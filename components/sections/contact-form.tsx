"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, just simulate submission
    // In next iteration, we'll add Resend email integration
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-primary dark:bg-primary-dark rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold">Thanks for reaching out!</h3>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            We&apos;ll get back to you within 24 hours to schedule your free consultation.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="mt-6"
          >
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get Started
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Book your free 30-minute consultation. No sales pitch -
            we&apos;ll audit your current setup and give you actionable next steps.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                placeholder="ABC Construction"
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>

            {/* Contact Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Smith"
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@abcconstruction.com"
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                required
                className="bg-white dark:bg-neutral-800"
              />
            </div>
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="service">What do you need help with? *</Label>
            <Select name="service" required>
              <SelectTrigger className="bg-white dark:bg-neutral-800">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cfo">CFO Services</SelectItem>
                <SelectItem value="controller">Controller Setup</SelectItem>
                <SelectItem value="software">Software Implementation</SelectItem>
                <SelectItem value="training">Team Training</SelectItem>
                <SelectItem value="other">Not Sure / Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your situation (optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="e.g., We're a $10M GC struggling with job costing accuracy..."
              rows={5}
              className="bg-white dark:bg-neutral-800"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-600 dark:bg-primary-dark dark:hover:bg-primary-400 text-white text-lg py-6"
          >
            {isSubmitting ? "Sending..." : "Book Free Consultation"}
          </Button>

          <p className="text-sm text-center text-neutral-500 dark:text-neutral-500">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
