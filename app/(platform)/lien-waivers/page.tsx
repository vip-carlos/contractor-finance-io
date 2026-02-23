import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import { lienWaivers } from "@/lib/mock-data";
import { FileCheck, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function LienWaiversPage() {
  const signedCount = lienWaivers.filter((w) => w.status === "signed").length;
  const pendingCount = lienWaivers.filter((w) => w.status === "pending").length;
  const totalAmount = lienWaivers.reduce((s, w) => s + w.amount, 0);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Lien Waiver Tracking
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Manage conditional and unconditional waivers
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Send className="w-4 h-4 mr-2" />
          Request Waiver
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {signedCount}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Signed Waivers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Send className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {pendingCount}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Pending Waivers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {formatCurrency(totalAmount)}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Total Waived
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Waiver Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">All Waivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Vendor
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Type
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Amount
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Status
                  </th>
                  <th className="text-left py-3 pl-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Method
                  </th>
                </tr>
              </thead>
              <tbody>
                {lienWaivers.map((waiver) => (
                  <tr
                    key={waiver.id}
                    className="border-b border-neutral-100 dark:border-neutral-800"
                  >
                    <td className="py-3 pr-4 font-medium text-neutral-900 dark:text-white">
                      {waiver.vendor}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          waiver.type === "Unconditional"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {waiver.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-neutral-700 dark:text-neutral-300">
                      {formatCurrency(waiver.amount)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatusBadge status={waiver.status} />
                    </td>
                    <td className="py-3 pl-4 text-neutral-500 dark:text-neutral-400">
                      {waiver.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
