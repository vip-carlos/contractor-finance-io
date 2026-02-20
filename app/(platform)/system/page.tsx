import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Cloud,
  Database,
  Lock,
  Zap,
  Globe,
  Server,
  Code,
} from "lucide-react";

const techStack = [
  {
    icon: Code,
    name: "Next.js 14",
    description: "React framework with App Router and server components",
  },
  {
    icon: Cloud,
    name: "Vercel",
    description: "Edge deployment with automatic CI/CD pipeline",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    description: "Primary database with row-level security",
  },
  {
    icon: Lock,
    name: "Clerk",
    description: "Authentication with MFA, SSO, and role-based access",
  },
  {
    icon: Shield,
    name: "SOC 2 Type II",
    description: "Enterprise security compliance and audit trails",
  },
  {
    icon: Zap,
    name: "Real-time Sync",
    description: "WebSocket connections for live data updates",
  },
  {
    icon: Globe,
    name: "CDN",
    description: "Global edge caching for sub-100ms response times",
  },
  {
    icon: Server,
    name: "API Layer",
    description: "RESTful + GraphQL endpoints with rate limiting",
  },
];

const integrations = [
  { name: "QuickBooks Online", status: "Available", category: "Accounting" },
  { name: "Sage 300 CRE", status: "Available", category: "Accounting" },
  { name: "Procore", status: "Coming Soon", category: "Project Mgmt" },
  { name: "DocuSign", status: "Available", category: "Signatures" },
  { name: "Plaid", status: "Available", category: "Banking" },
  { name: "Stripe", status: "Available", category: "Payments" },
];

export default function SystemPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          System Architecture
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          ConstructingOne + ContractorOS platform overview
        </p>
      </div>

      {/* Architecture Diagram (Visual) */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Platform Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4 py-4">
            {/* Client Layer */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-center">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Client Layer
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                Next.js App Router + React Server Components
              </p>
            </div>
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600" />

            {/* API / Auth Layer */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
              <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                API & Auth Layer
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                Server Actions + Clerk Auth + Middleware
              </p>
            </div>
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600" />

            {/* Data Layer */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-center">
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                Data Layer
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                PostgreSQL + Drizzle ORM + Redis Cache
              </p>
            </div>
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600" />

            {/* Integration Layer */}
            <div className="w-full max-w-lg p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 text-center">
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                Integration Layer
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                QuickBooks + Sage + DocuSign + Plaid APIs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tech Stack Grid */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900"
                >
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 pr-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Integration
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Category
                  </th>
                  <th className="text-left py-3 pl-4 font-medium text-neutral-500 dark:text-neutral-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-100 dark:border-neutral-800"
                  >
                    <td className="py-3 pr-4 font-medium text-neutral-900 dark:text-white">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-neutral-500 dark:text-neutral-400">
                      {item.category}
                    </td>
                    <td className="py-3 pl-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === "Available"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
