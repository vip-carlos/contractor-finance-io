import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { escrowAccount, drawSteps, architectInspection } from "@/lib/mock-data";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function EscrowPage() {
  const disbursedPct = (escrowAccount.disbursed / escrowAccount.funded) * 100;
  const retentionPct = (escrowAccount.retentionHeld / escrowAccount.funded) * 100;
  const balancePct = (escrowAccount.balance / escrowAccount.funded) * 100;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Escrow & Draw Management
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          {escrowAccount.project} — {escrowAccount.owner}
        </p>
      </div>

      {/* Escrow Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Total Funded
            </p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              {formatCurrency(escrowAccount.funded)}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Disbursed
            </p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
              {formatCurrency(escrowAccount.disbursed)}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Retention Held
            </p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
              {formatCurrency(escrowAccount.retentionHeld)}
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Available Balance
            </p>
            <p className="text-2xl font-bold text-primary mt-1">
              {formatCurrency(escrowAccount.balance)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Fund Allocation Bar */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Fund Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden flex">
            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${disbursedPct}%` }}
              title={`Disbursed: ${disbursedPct.toFixed(1)}%`}
            />
            <div
              className="h-full bg-amber-500 transition-all"
              style={{ width: `${retentionPct}%` }}
              title={`Retention: ${retentionPct.toFixed(1)}%`}
            />
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${balancePct}%` }}
              title={`Available: ${balancePct.toFixed(1)}%`}
            />
          </div>
          <div className="flex items-center gap-6 mt-3 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Disbursed ({disbursedPct.toFixed(0)}%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              Retention ({retentionPct.toFixed(0)}%)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Available ({balancePct.toFixed(0)}%)
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Draw Request Flow */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Draw Request Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {drawSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {step.status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  ) : step.status === "active" ? (
                    <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-neutral-300 dark:text-neutral-600 flex-shrink-0" />
                  )}
                  <span
                    className={`text-sm whitespace-nowrap ${
                      step.status === "completed"
                        ? "text-green-700 dark:text-green-400"
                        : step.status === "active"
                        ? "text-primary font-semibold"
                        : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < drawSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 hidden sm:block flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architect Inspection */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Architect Inspection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Architect
              </p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                {architectInspection.architect}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Inspection Date
              </p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                {architectInspection.inspectionDate}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Draw Amount
              </p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white mt-1">
                {formatCurrency(architectInspection.drawAmount)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase">
                Status
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
                {architectInspection.status}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
