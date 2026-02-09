import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Messages</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Communicate with your accountant
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Messaging</CardTitle>
          <CardDescription>Direct communication with your Contractor Finance team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <svg className="w-12 h-12 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg font-medium mb-2">Messaging coming soon</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              In the meantime, email us at{" "}
              <a href="mailto:hello@contractorfinance.io" className="text-primary dark:text-primary-dark hover:underline">
                hello@contractorfinance.io
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
