import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Gradient background (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-background -z-10" />

      {/* Content */}
      <div className="max-w-content mx-auto text-center space-y-8">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Construction Finance
          <br />
          <span className="text-primary dark:text-primary-dark">That Actually Works</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
          Stop guessing your margins. Get CFO-level financial systems built by someone who ran construction companies for 8+ years.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-600 dark:bg-primary-dark dark:hover:bg-primary-400 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book a Free Audit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-neutral-300 dark:border-neutral-700 text-lg px-8 py-6 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
          >
            See How It Works
          </Button>
        </div>

        {/* Social proof */}
        <div className="pt-12 text-sm text-neutral-600 dark:text-neutral-400">
          <p>Trusted by general contractors and specialty trades across the US</p>
        </div>
      </div>
    </section>
  );
}
