"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "basic",
    name: "Basic Bookkeeping",
    price: "$500/month",
    description: "Perfect for small contractors who need clean books",
    features: [
      "Monthly bank reconciliation",
      "P&L and Balance Sheet",
      "Transaction categorization",
      "QuickBooks Online access"
    ]
  },
  {
    id: "controller",
    name: "Construction Controller",
    price: "$1,200/month",
    description: "Complete job costing and financial management",
    features: [
      "Everything in Basic +",
      "Job costing by project",
      "Monthly WIP schedules",
      "Payroll processing",
      "AIA billing support"
    ],
    popular: true
  },
  {
    id: "cfo",
    name: "Fractional CFO",
    price: "$2,500/month",
    description: "Strategic financial guidance and planning",
    features: [
      "Everything in Controller +",
      "Weekly cash flow forecasting",
      "Monthly strategic review calls",
      "Quarterly tax planning",
      "Custom KPI dashboards"
    ]
  },
  {
    id: "setup",
    name: "One-Time Setup",
    price: "$3,000 - $8,000",
    description: "Get your accounting system properly configured",
    features: [
      "QuickBooks Online setup",
      "Construction-specific chart of accounts",
      "Job costing configuration",
      "Payroll setup",
      "2 hours of training"
    ]
  }
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selected) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Service</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Select the plan that best fits your construction business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all relative ${
                selected === service.id
                  ? "border-primary dark:border-primary-dark border-2 shadow-lg"
                  : "border-neutral-200 dark:border-neutral-800 hover:border-primary dark:hover:border-primary-dark"
              }`}
              onClick={() => setSelected(service.id)}
            >
              {"popular" in service && service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary dark:bg-primary-dark text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{service.name}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary dark:text-primary-dark">
                  {service.price}
                </CardDescription>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary dark:text-primary-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            disabled={!selected}
            className="bg-primary hover:bg-primary-600 dark:bg-primary-dark dark:hover:bg-primary-400 text-white px-12 py-6 text-lg"
          >
            Continue to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
