import AppLayout from "@/components/layout/app-layout";

export const metadata = {
  title: "ConstructingOne Platform",
  description: "Construction finance management platform",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
