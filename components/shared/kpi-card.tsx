"use client";

export default function KpiCard({
  label,
  value,
  subtitle,
  accentColor,
}: {
  label: string;
  value: string;
  subtitle: string;
  accentColor: string;
}) {
  return (
    <div className="bg-white rounded-[10px] border border-gray-200 p-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-[10px] font-medium" style={{ color: accentColor }}>
        {subtitle}
      </p>
    </div>
  );
}
