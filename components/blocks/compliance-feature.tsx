"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ComplianceFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[600px] mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent rounded-[3rem] transform -rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent rounded-[3rem] transform rotate-3" />

              {/* Main image container */}
              <div className="relative bg-white dark:bg-neutral-900 rounded-[2rem] p-6 shadow-xl">
                {/* Chat bubbles and illustrations */}
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 transform hover:-translate-y-1 transition-transform">
                      <div className="w-8 h-8 bg-brand/20 rounded-full mb-2" />
                      <div className="h-2 w-24 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    </div>
                    <div className="bg-brand/10 rounded-2xl p-4 transform hover:-translate-y-1 transition-transform">
                      <div className="w-8 h-8 bg-brand/20 rounded-full mb-2" />
                      <div className="space-y-2">
                        <div className="h-2 w-32 bg-brand/20 rounded" />
                        <div className="h-2 w-20 bg-brand/20 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 transform hover:-translate-y-1 transition-transform">
                      <div className="w-8 h-8 bg-brand/20 rounded-full mb-2" />
                      <div className="h-2 w-28 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    </div>
                    <div className="bg-brand/10 rounded-2xl p-4 transform hover:-translate-y-1 transition-transform">
                      <div className="w-8 h-8 bg-brand/20 rounded-full mb-2" />
                      <div className="h-2 w-24 bg-brand/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-brand/10 text-brand font-medium text-sm mb-6">
                Risk & Compliance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Be compliant with Auditing Standards
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minimize human error in audits by leveraging the latest
              technologies to assist your team in ground work. Ensure accuracy
              with clear citations and audit trails
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    Automated Compliance Checks
                  </h3>
                  <p className="text-muted-foreground">
                    Real-time validation against industry standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clear Audit Trails</h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation of all actions and decisions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
