import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import MiniBarChart from "@/components/ui/mini-bar-chart";
import { kpiStats, projects } from "@/lib/mock-data";

const changeColorMap: Record<string, string> = {
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-green-600 dark:text-green-400",
  amber: "text-amber-600 dark:text-amber-400",
  red: "text-red-600 dark:text-red-400",
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Overview of your construction portfolio
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiStats.map((kpi) => (
          <Card key={kpi.label} className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {kpi.label}
              </p>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">
                {kpi.value}
              </p>
              <p className={`text-xs mt-2 ${changeColorMap[kpi.changeColor]}`}>
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project List */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-neutral-900 dark:text-white truncate">
                      {project.name}
                    </p>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    Budget: {formatCurrency(project.budget)}
                  </p>
                </div>
                <div className="w-32 flex-shrink-0">
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <MiniBarChart
                    value={project.progress}
                    color={
                      project.status === "behind"
                        ? "bg-amber-500"
                        : project.status === "completed"
                        ? "bg-green-500"
                        : "bg-primary"
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
