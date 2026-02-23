"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 pt-32 bg-white dark:bg-background">
      {/* Subtle pattern overlay (optional, very light) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-30 -z-10" />

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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            size="lg"
            className="bg-primary hover:bg-primary-600 dark:bg-primary-dark dark:hover:bg-primary-400 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book a Free Audit
          </Button>
          <Button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            size="lg"
            variant="outline"
            className="border-2 border-neutral-300 dark:border-neutral-700 text-lg px-8 py-6 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
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
