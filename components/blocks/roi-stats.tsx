"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatProps {
  value: string;
  label: string;
  className?: string;
  gradient?: boolean;
  index: number;
}

function Stat({ value, label, className, gradient = true, index }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem]",
        "bg-gradient-to-br from-white to-neutral-50/50",
        "dark:from-neutral-900 dark:to-neutral-800/50",
        "border border-neutral-200/50 dark:border-neutral-700/50",
        "hover:border-brand/20 dark:hover:border-brand/20",
        "transition-all duration-300 ease-out",
        "hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex h-full flex-col items-center justify-center p-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className={cn(
            "text-6xl md:text-7xl font-bold",
            gradient &&
              "bg-gradient-to-r from-brand to-brand/80 bg-clip-text text-transparent"
          )}
        >
          {value}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.4 }}
          className="mt-4 text-base text-muted-foreground text-center max-w-[200px]"
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
}

export function ROIStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-white dark:bg-neutral-950">
      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our customers achieve outstanding ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered platform transforms audit efficiency and
            accuracy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Stat
            index={0}
            value="80%"
            label="reduction in manual effort through intelligent automation"
            className="md:col-span-1"
          />
          <Stat
            index={1}
            value="5X"
            label="faster risk identification with AI-powered analysis"
          />
          <Stat
            index={2}
            value="2X"
            label="increase in document processing speed"
          />
        </div>
      </div>
    </section>
  );
}
