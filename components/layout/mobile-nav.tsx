"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Gavel,
  ClipboardList,
  CalendarRange,
  Receipt,
  Landmark,
  Calculator,
  FileCheck,
  Settings,
} from "lucide-react";
import { navItems } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Gavel,
  ClipboardList,
  CalendarRange,
  Receipt,
  Landmark,
  Calculator,
  FileCheck,
  Settings,
};

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-around h-16 px-2 overflow-x-auto">
        {navItems.slice(0, 5).map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] py-1 px-1 rounded-lg text-xs transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {Icon && <Icon className="w-5 h-5" />}
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
        {/* More menu for remaining items */}
        <Link
          href="/pay-apps"
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[48px] py-1 px-1 rounded-lg text-xs transition-colors ${
            ["/pay-apps", "/escrow", "/accounting", "/lien-waivers", "/system"].includes(pathname)
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          <Settings className="w-5 h-5" />
          <span className="truncate">More</span>
        </Link>
      </div>
    </nav>
  );
}
