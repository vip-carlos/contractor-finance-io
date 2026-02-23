import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bids, bidLineItems } from "@/lib/mock-data";
import { Star, Trophy } from "lucide-react";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function BiddingPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Bid Comparison
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Riverside Office Complex — MEP Package
        </p>
      </div>

      {/* Bid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bids.map((bid) => (
          <Card
            key={bid.id}
            className={`border-0 shadow-sm relative ${
              bid.isBestValue
                ? "ring-2 ring-primary"
                : ""
            }`}
          >
            {bid.isBestValue && (
              <div className="absolute -top-3 left-4 flex items-center gap-1 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
                <Trophy className="w-3 h-3" />
                Best Value
              </div>
            )}
            <CardContent className="pt-6">
              <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">
                {bid.company}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm text-neutral-600 dark:text-neutral-300">
                  {bid.rating}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Total Amount
                  </span>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {formatCurrency(bid.totalAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Duration
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {bid.duration} weeks
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Line Item Comparison Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Line Item Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Description
                  </th>
                  {bids.map((bid) => (
                    <th
                      key={bid.id}
                      className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400"
                    >
                      {bid.company}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bidLineItems.map((item, i) => {
                  const min = Math.min(...item.amounts);
                  return (
                    <tr
                      key={i}
                      className="border-b border-neutral-100 dark:border-neutral-800"
                    >
                      <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">
                        {item.description}
                      </td>
                      {item.amounts.map((amt, j) => (
                        <td
                          key={j}
                          className={`py-3 px-4 text-right ${
                            amt === min
                              ? "text-green-600 dark:text-green-400 font-semibold"
                              : "text-neutral-700 dark:text-neutral-300"
                          }`}
                        >
                          {formatCurrency(amt)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
                {/* Totals */}
                <tr className="font-semibold">
                  <td className="py-3 pr-4 text-neutral-900 dark:text-white">
                    Total
                  </td>
                  {bids.map((bid) => (
                    <td
                      key={bid.id}
                      className={`py-3 px-4 text-right ${
                        bid.isBestValue
                          ? "text-primary"
                          : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {formatCurrency(bid.totalAmount)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
