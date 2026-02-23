import AppSidebar from "./app-sidebar";
import MobileNav from "./mobile-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <AppSidebar />
      <MobileNav />
      {/* Main content offset by sidebar width on desktop, bottom padding for mobile nav */}
      <main className="md:ml-14 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
