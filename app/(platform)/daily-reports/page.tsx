"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/ui/status-badge";
import { dailyReports } from "@/lib/mock-data";
import { Sun, Cloud, CloudRain, Plus, Users, Calendar } from "lucide-react";

const weatherIcons: Record<string, React.ReactNode> = {
  sunny: <Sun className="w-5 h-5 text-amber-500" />,
  cloudy: <Cloud className="w-5 h-5 text-neutral-400" />,
  rain: <CloudRain className="w-5 h-5 text-blue-500" />,
};

export default function DailyReportsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Daily Reports
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Field reports and manpower tracking
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Report
        </Button>
      </div>

      {/* New Report Form (Mobile-optimized) */}
      {showForm && (
        <Card className="border-0 shadow-sm border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-lg">New Daily Report</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Project
                  </label>
                  <select className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm">
                    <option>Riverside Office Complex</option>
                    <option>Harbor View Condos</option>
                    <option>Metro Transit Hub</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Weather Conditions
                </label>
                <div className="flex gap-3">
                  {(["sunny", "cloudy", "rain"] as const).map((w) => (
                    <button
                      key={w}
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 hover:border-primary transition-colors text-sm capitalize"
                    >
                      {weatherIcons[w]}
                      {w}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Work Summary
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe today's activities..."
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm"
                />
              </div>
              <div className="flex gap-3">
                <Button type="button" className="bg-primary hover:bg-primary/90 text-white">
                  Submit Report
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Report List */}
      <div className="space-y-4">
        {dailyReports.map((report) => (
          <Card key={report.id} className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Left: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {report.project}
                    </h3>
                    {weatherIcons[report.weather]}
                    <StatusBadge
                      status={report.onSchedule ? "on-track" : "behind"}
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </span>
                    <span>{report.superintendent}</span>
                  </div>
                </div>

                {/* Right: Manpower */}
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-600 dark:text-neutral-300">
                    {report.manpower.reduce((sum, m) => sum + m.count, 0)} workers
                  </span>
                </div>
              </div>

              {/* Manpower Breakdown */}
              <div className="mt-4 flex flex-wrap gap-2">
                {report.manpower.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-600 dark:text-neutral-300"
                  >
                    {m.trade}: {m.count}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
