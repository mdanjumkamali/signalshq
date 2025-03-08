"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isLast: boolean;
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  isLast,
}: FAQItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "py-6 first:pt-0",
        !isLast && "border-b border-neutral-200 dark:border-neutral-800"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-xl font-semibold">{question}</span>
        <div
          className={cn(
            "ml-4 h-8 w-8 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800",
            "flex items-center justify-center transition-colors",
            "group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800",
            isOpen && "bg-brand/10 border-brand/20"
          )}
        >
          <svg
            className={cn(
              "h-4 w-4 text-neutral-500 transition-transform duration-200",
              isOpen && "rotate-45 text-brand"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "How does SignalsHQ work?",
      answer:
        "SignalsHQ is like your extended team. It brings all your data management in one place, where you can request PBC from clients, standardize the data, analyse flux and finally conduct test of details for relevant transactions. All of this is done in one place with complete audit trails",
    },
    {
      question: "Is my data secure?",
      answer:
        "Rest assured, we take your data security seriously. Our robust measures ensure that your information is kept safe and secure at all times.",
    },
    {
      question: "What use cases does SignalsHQ work for?",
      answer:
        "SignalsHQ is built for financial auditors. Whether you are in external audit, internal audit, government audit or non-profit audits, SignalsHQ can help automate a chunk of your fieldwork.",
    },
    {
      question: "How do I get started?",
      answer:
        "Just write to us on contact@signalsHQ.io and we shall get in touch with you to understand your requirements and set you up.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. For everything else email us
            on{" "}
            <a
              href="mailto:contact@signalsHQ.io"
              className="text-brand hover:text-brand/80 transition-colors underline"
            >
              contact@signalsHQ.io
            </a>
            .
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
