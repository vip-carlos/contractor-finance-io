"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Documents</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Upload invoices, receipts, and bank statements
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Upload New Documents</CardTitle>
          <CardDescription>
            Drag and drop or click to upload invoices, receipts, and statements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-12 text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-lg font-medium mb-2">Drag files here or click to browse</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Supported: PDF, JPG, PNG, Excel (Max 10MB)
            </p>
            <Button className="mt-4 bg-primary hover:bg-primary-600">
              Choose Files
            </Button>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-4">
            Note: File uploads will be enabled when you connect UploadThing. See .env.local for API keys.
          </p>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your recently uploaded documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center py-8">
              No documents uploaded yet. Upload your first document above.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
