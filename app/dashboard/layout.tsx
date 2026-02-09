import Link from "next/link";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = clerkKey && !clerkKey.includes("XXXX");

async function ClerkUserButton() {
  if (!isClerkConfigured) return null;
  const { UserButton } = await import("@clerk/nextjs");
  return <UserButton afterSignOutUrl="/" />;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold">
              Contractor Finance
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-neutral-700 dark:text-neutral-300 hover:text-primary">
                Dashboard
              </Link>
              <Link href="/dashboard/documents" className="text-neutral-700 dark:text-neutral-300 hover:text-primary">
                Documents
              </Link>
              <Link href="/dashboard/reports" className="text-neutral-700 dark:text-neutral-300 hover:text-primary">
                Reports
              </Link>
              <Link href="/dashboard/messages" className="text-neutral-700 dark:text-neutral-300 hover:text-primary">
                Messages
              </Link>
              <ClerkUserButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
