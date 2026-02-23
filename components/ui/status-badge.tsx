const variants: Record<string, string> = {
  "on-track": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  behind: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  approved: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  signed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  synced: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  conflicts: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  active: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function StatusBadge({ status }: { status: string }) {
  const classes = variants[status] ?? "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${classes}`}>
      {status.replace("-", " ")}
    </span>
  );
}
