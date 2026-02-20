import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import { accountingClients } from "@/lib/mock-data";
import { RefreshCw, AlertTriangle } from "lucide-react";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function AccountingPage() {
  const totalWip = accountingClients.reduce((s, c) => s + c.wipAmount, 0);
  const totalProjects = accountingClients.reduce(
    (s, c) => s + c.projectCount,
    0
  );
  const conflictCount = accountingClients.reduce(
    (s, c) => s + (c.conflictCount ?? 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          ContractorOS — CPA Dashboard
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Multi-entity WIP tracking and accounting sync
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Total WIP
            </p>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">
              {formatCurrency(totalWip)}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Across {accountingClients.length} clients
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Active Projects
            </p>
            <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">
              {totalProjects}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              All tracked in platform
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Sync Conflicts
            </p>
            <p className={`text-3xl font-bold mt-1 ${conflictCount > 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
              {conflictCount}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {conflictCount > 0 ? "Requires attention" : "All synced"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Client Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Client Entities</CardTitle>
            <button className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors">
              <RefreshCw className="w-4 h-4" />
              Sync All
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Client Name
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Projects
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    WIP Amount
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Sync Status
                  </th>
                  <th className="text-right py-3 pl-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Issues
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountingClients.map((client, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-100 dark:border-neutral-800"
                  >
                    <td className="py-3 pr-4 font-medium text-neutral-900 dark:text-white">
                      {client.name}
                    </td>
                    <td className="py-3 px-4 text-right text-neutral-700 dark:text-neutral-300">
                      {client.projectCount}
                    </td>
                    <td className="py-3 px-4 text-right text-neutral-700 dark:text-neutral-300">
                      {formatCurrency(client.wipAmount)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <StatusBadge status={client.syncStatus} />
                    </td>
                    <td className="py-3 pl-4 text-right">
                      {client.conflictCount && client.conflictCount > 0 ? (
                        <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-medium">
                          <AlertTriangle className="w-4 h-4" />
                          {client.conflictCount}
                        </span>
                      ) : (
                        <span className="text-neutral-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Accounting Integration Info */}
      <Card className="border-0 shadow-sm bg-neutral-900 dark:bg-neutral-800 text-white">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">QuickBooks / Sage Integration</h3>
              <p className="text-sm text-neutral-300 mt-1">
                ContractorOS syncs WIP reports, job costing, and pay application
                data with your accounting platform. Configure API connections in
                Settings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
