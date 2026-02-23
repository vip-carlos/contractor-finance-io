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

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-14 bg-[#171717] min-h-screen fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="flex items-center justify-center h-14 border-b border-white/10">
        <span className="text-white font-bold text-lg">C1</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col items-center gap-1 pt-4">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "text-neutral-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {Icon && <Icon className="w-5 h-5" />}
              {/* Tooltip */}
              <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium text-white bg-neutral-800 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
