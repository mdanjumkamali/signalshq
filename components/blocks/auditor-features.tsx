"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index: number;
}

function FeatureCard({
  icon,
  title,
  description,
  className,
  index,
}: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        "group relative overflow-hidden",
        "bg-gradient-to-br from-white to-neutral-50/50",
        "dark:from-neutral-900 dark:to-neutral-800/50",
        "border border-neutral-200/50 dark:border-neutral-700/50",
        "hover:border-brand/20 dark:hover:border-brand/20",
        "rounded-[2rem] p-10",
        "transition-all duration-300 ease-out",
        "hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col h-full">
        <div className="mb-8">
          <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">{icon}</div>
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="text-2xl font-semibold mb-4 text-foreground"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.4 }}
          className="text-muted-foreground text-base leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function AuditorFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.07] to-transparent" />

      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            SignalsHQ is built for Auditors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your audit workflow with powerful AI-driven tools designed
            specifically for modern auditing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <FeatureCard
            index={0}
            icon={
              <svg
                className="w-8 h-8 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            title="Streamline your work"
            description="Efficiency starts here. Streamline your fieldwork to automate data collection, standardization, flux analysis and test of details with our intelligent automation."
            className="md:row-span-1"
          />
          <FeatureCard
            index={1}
            icon={
              <svg
                className="w-8 h-8 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            }
            title="Works with your tools"
            description="Seamlessly integrate with your existing workflow. Connect with your favorite tools and platforms for a unified auditing experience."
          />
          <FeatureCard
            index={2}
            icon={
              <svg
                className="w-8 h-8 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            title="Save valuable time"
            description="Focus on what matters most. Our AI-powered automation helps you save hours every week by handling routine tasks and complex analyses."
          />
        </div>
      </div>
    </section>
  );
}
