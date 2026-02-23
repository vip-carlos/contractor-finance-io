import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleReports = [
  {
    title: "January 2026 P&L",
    date: "2026-02-01",
    type: "Profit & Loss",
  },
  {
    title: "January 2026 Balance Sheet",
    date: "2026-02-01",
    type: "Balance Sheet",
  },
  {
    title: "Job Cost Report - Main St Project",
    date: "2026-01-28",
    type: "Job Costing",
  }
];

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Financial Reports</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          View and download your financial statements
        </p>
      </div>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Your monthly financial reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleReports.map((report, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                <div>
                  <h3 className="font-semibold">{report.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {report.type} &bull; Generated {new Date(report.date).toLocaleDateString()}
                  </p>
                </div>
                <Button variant="outline">Download PDF</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
