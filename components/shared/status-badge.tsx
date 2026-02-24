"use client";

const variants: Record<string, string> = {
  success: "bg-green-100 text-green-800",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-red-100 text-red-800",
  info: "bg-blue-50 text-[#0a84ff]",
};

export default function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: "success" | "warning" | "danger" | "info";
}) {
  return (
    <span
      className={`text-[9px] font-semibold px-2.5 py-0.5 rounded-full inline-block ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
