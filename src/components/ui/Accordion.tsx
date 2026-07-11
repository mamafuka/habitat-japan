"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="border-t border-border">
            <button
              type="button"
              id={`faq-button-${index}`}
              className="flex w-full items-start justify-between gap-8 py-8 text-left transition-colors duration-700 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 sm:py-10"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="font-serif text-xl font-light leading-snug text-charcoal sm:text-2xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "mt-1 shrink-0 text-charcoal-faint transition-transform duration-700 ease-out",
                  isOpen && "rotate-45 text-gold-muted",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className={cn(
                "grid transition-all duration-700 ease-out motion-reduce:transition-none",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
              role="region"
              aria-labelledby={`faq-button-${index}`}
            >
              <div className="overflow-hidden">
                <p className="pb-8 text-base leading-[1.85] text-charcoal-muted sm:pb-10">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-border" aria-hidden="true" />
    </div>
  );
}
