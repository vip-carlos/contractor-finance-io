import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = clerkKey && !clerkKey.includes("XXXX");

async function getUserName(): Promise<string> {
  if (!isClerkConfigured) return "there";
  try {
    const { currentUser } = await import("@clerk/nextjs/server");
    const user = await currentUser();
    return user?.firstName || "there";
  } catch {
    return "there";
  }
}

export default async function DashboardPage() {
  const firstName = await getUserName();

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {firstName}!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Here&apos;s what&apos;s happening with your account
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Plan</CardTitle>
            <CardDescription>Your current subscription</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary dark:text-primary-dark">
              Construction Controller
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              $1,200/month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>Uploaded this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <Link href="/dashboard/documents" className="text-sm text-primary dark:text-primary-dark hover:underline mt-1 inline-block">
              View all &rarr;
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Report</CardTitle>
            <CardDescription>Most recent financial report</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">January 2026 P&amp;L</p>
            <Link href="/dashboard/reports" className="text-sm text-primary dark:text-primary-dark hover:underline mt-1 inline-block">
              View reports &rarr;
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button asChild className="bg-primary hover:bg-primary-600">
            <Link href="/dashboard/documents">Upload Documents</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/messages">Message Your Accountant</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard/reports">View Financial Reports</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
