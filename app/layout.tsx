import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Contractor Finance - Construction Accounting & CFO Services by Carlos Ortiz",
  description: "Professional construction finance consulting. CFO services, controller setup, job costing, WIP schedules, and construction software implementation. Built by a contractor with 8+ years experience.",
  keywords: "construction accounting, construction CFO, job costing, WIP schedules, construction controller, Procore implementation, Sage 300 construction",
  openGraph: {
    title: "Contractor Finance - Construction Accounting That Actually Works",
    description: "Stop guessing your margins. Get CFO-level financial systems built by someone who ran construction companies for 8+ years.",
    type: "website",
    url: "https://contractorfinance.io",
  }
};

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = clerkKey && !clerkKey.includes("XXXX");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );

  if (isClerkConfigured) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
