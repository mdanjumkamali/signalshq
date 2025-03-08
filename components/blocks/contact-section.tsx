"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";

export function ContactSection() {
  return (
    <section id="contact">
      <BackgroundBeamsWithCollision className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Ready to revolutionize your{" "}
                <div className="relative mx-auto inline-block w-max">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                    <span>audit workflow</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
                    <span>audit workflow</span>
                  </div>
                </div>
                ?
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Get early access to SignalsHQ and transform how you manage
                audits with AI-powered automation.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-200"
                >
                  Join Waitlist
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-200/50 text-blue-600 hover:bg-blue-50/50 dark:border-blue-500/20 dark:text-blue-400 dark:hover:bg-blue-500/10"
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
