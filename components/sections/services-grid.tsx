import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "CFO Services",
    description: "Strategic financial planning, cash flow forecasting, and executive-level guidance for growth-stage contractors.",
    features: [
      "Cash flow & revenue forecasting",
      "Financial KPI dashboards",
      "Strategic planning sessions",
      "Board-ready financial reports"
    ]
  },
  {
    title: "Controller Setup",
    description: "Build bulletproof accounting systems from scratch. Chart of accounts, job costing, WIP schedules - done right.",
    features: [
      "Chart of accounts architecture",
      "Job costing system design",
      "WIP schedule automation",
      "AIA billing workflows"
    ]
  },
  {
    title: "Software Implementation",
    description: "Seamless integration of Procore, Sage 300, Foundation, or QuickBooks. Training included.",
    features: [
      "Platform selection guidance",
      "Data migration & setup",
      "Team training programs",
      "Ongoing optimization support"
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-background">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services Built for Contractors
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From day-one controller setup to fractional CFO services.
            Pricing starts at $5k for one-time projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-neutral-200 dark:border-neutral-800 hover:border-primary dark:hover:border-primary-dark transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary dark:text-primary-dark flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Not sure which service fits your needs?
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-600 dark:bg-primary-dark dark:hover:bg-primary-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book a Free 30-Min Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
