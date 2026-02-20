import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scheduleItems } from "@/lib/mock-data";

const TOTAL_WEEKS = 22;

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Project Schedule
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Riverside Office Complex — 22-Week Timeline
        </p>
      </div>

      {/* Gantt Chart */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-4">
            <CardTitle className="text-lg">Construction Schedule</CardTitle>
            <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-sm border-2 border-red-400 bg-red-400/20" />
                Critical Path
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-sm bg-neutral-300 dark:bg-neutral-600" />
                Non-Critical
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Week Headers */}
              <div className="flex items-center mb-2">
                <div className="w-36 flex-shrink-0" />
                <div className="flex-1 flex">
                  {Array.from({ length: TOTAL_WEEKS }, (_, i) => (
                    <div
                      key={i}
                      className="flex-1 text-center text-xs text-neutral-400 dark:text-neutral-500"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bars */}
              <div className="space-y-2">
                {scheduleItems.map((item, i) => {
                  const leftPct = ((item.startWeek - 1) / TOTAL_WEEKS) * 100;
                  const widthPct = (item.duration / TOTAL_WEEKS) * 100;
                  return (
                    <div key={i} className="flex items-center">
                      <div className="w-36 flex-shrink-0 pr-3">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate block">
                          {item.trade}
                        </span>
                      </div>
                      <div className="flex-1 relative h-8">
                        {/* Grid lines */}
                        <div className="absolute inset-0 flex">
                          {Array.from({ length: TOTAL_WEEKS }, (_, j) => (
                            <div
                              key={j}
                              className="flex-1 border-l border-neutral-100 dark:border-neutral-800"
                            />
                          ))}
                        </div>
                        {/* Bar */}
                        <div
                          className={`absolute top-1 h-6 rounded-md flex items-center px-2 text-xs text-white font-medium ${
                            item.isCriticalPath
                              ? "ring-2 ring-red-400/50"
                              : ""
                          }`}
                          style={{
                            left: `${leftPct}%`,
                            width: `${widthPct}%`,
                            backgroundColor: item.color,
                          }}
                        >
                          <span className="truncate">{item.duration}w</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Total Duration
            </p>
            <p className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
              22 Weeks
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Critical Path Items
            </p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">
              {scheduleItems.filter((s) => s.isCriticalPath).length} Activities
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="pt-6">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Current Week
            </p>
            <p className="text-2xl font-bold text-primary mt-1">Week 11</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
