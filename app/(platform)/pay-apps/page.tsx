import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import { payApps } from "@/lib/mock-data";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PayAppsPage() {
  const app = payApps[0]; // Show first pay app in detail

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Pay Applications
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          AIA G702/G703 Schedule of Values
        </p>
      </div>

      {/* Pay App Selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {payApps.map((pa) => (
          <Card
            key={pa.id}
            className={`border-0 shadow-sm min-w-[240px] cursor-pointer ${
              pa.id === app.id ? "ring-2 ring-primary" : ""
            }`}
          >
            <CardContent className="pt-4 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Pay App #{pa.number}
                </span>
                <StatusBadge status={pa.status} />
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {pa.subcontractor}
              </p>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1">
                {formatCurrency(pa.revisedContract)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contract Summary (G702) */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              G702 — {app.subcontractor}
            </CardTitle>
            <StatusBadge status={app.status} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Original Contract
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                {formatCurrency(app.originalContract)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Change Orders
              </p>
              <p className="text-lg font-semibold text-amber-600 dark:text-amber-400 mt-1">
                {formatCurrency(app.changeOrders)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Revised Contract
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                {formatCurrency(app.revisedContract)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Retention
              </p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                {app.retentionPercent}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule of Values (G703) */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">G703 — Schedule of Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Description
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Scheduled
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Prior
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    This Period
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    % Complete
                  </th>
                  <th className="text-right py-3 pl-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {app.lineItems.map((item, i) => {
                  const totalCompleted = item.prior + item.thisPeriod;
                  const balance = item.scheduled - totalCompleted;
                  return (
                    <tr
                      key={i}
                      className="border-b border-neutral-100 dark:border-neutral-800"
                    >
                      <td className="py-3 pr-4 text-neutral-700 dark:text-neutral-300">
                        {item.description}
                      </td>
                      <td className="py-3 px-4 text-right text-neutral-700 dark:text-neutral-300">
                        {formatCurrency(item.scheduled)}
                      </td>
                      <td className="py-3 px-4 text-right text-neutral-500 dark:text-neutral-400">
                        {formatCurrency(item.prior)}
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-primary">
                        {formatCurrency(item.thisPeriod)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`font-medium ${
                            item.percentComplete >= 90
                              ? "text-green-600 dark:text-green-400"
                              : item.percentComplete >= 50
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-neutral-600 dark:text-neutral-400"
                          }`}
                        >
                          {item.percentComplete}%
                        </span>
                      </td>
                      <td className="py-3 pl-4 text-right text-neutral-700 dark:text-neutral-300">
                        {formatCurrency(balance)}
                      </td>
                    </tr>
                  );
                })}
                {/* Totals */}
                <tr className="font-semibold bg-neutral-50 dark:bg-neutral-900">
                  <td className="py-3 pr-4 text-neutral-900 dark:text-white">
                    Total
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-900 dark:text-white">
                    {formatCurrency(
                      app.lineItems.reduce((s, i) => s + i.scheduled, 0)
                    )}
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-500 dark:text-neutral-400">
                    {formatCurrency(
                      app.lineItems.reduce((s, i) => s + i.prior, 0)
                    )}
                  </td>
                  <td className="py-3 px-4 text-right text-primary">
                    {formatCurrency(
                      app.lineItems.reduce((s, i) => s + i.thisPeriod, 0)
                    )}
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-900 dark:text-white">
                    —
                  </td>
                  <td className="py-3 pl-4 text-right text-neutral-900 dark:text-white">
                    {formatCurrency(
                      app.lineItems.reduce(
                        (s, i) => s + (i.scheduled - i.prior - i.thisPeriod),
                        0
                      )
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
