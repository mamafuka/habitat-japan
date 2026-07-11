"use client";

import Image from "next/image";
import { heroContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "framer-motion";

function ScrollCue() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 lg:bottom-12"
      aria-hidden="true"
    >
      <span className="text-[0.5625rem] tracking-[0.28em] text-charcoal-faint uppercase">
        Scroll
      </span>
      <div className="relative h-8 w-px bg-border/60">
        <div
          className={
            prefersReducedMotion
              ? "absolute inset-x-0 top-0 h-2 bg-gold/40"
              : "absolute inset-x-0 top-0 h-2 animate-[scroll-cue_4s_ease-in-out_infinite] bg-gold/40"
          }
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[88svh] bg-ivory lg:grid lg:h-[92vh] lg:max-h-[94vh] lg:min-h-[88vh] lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col justify-center px-8 pb-28 pt-32 sm:px-12 sm:pb-32 sm:pt-36 lg:px-16 lg:py-20 xl:px-24">
        <Reveal y={16}>
          <h1
            id="hero-heading"
            className="font-serif text-[2.875rem] font-light leading-[1.06] tracking-[-0.035em] text-charcoal sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.5rem]"
          >
            {heroContent.headline.map((line, index) => (
              <span
                key={line}
                className={index === 1 ? "block text-charcoal-muted" : "block"}
              >
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.25} y={12}>
          <div className="editorial-rule mt-14 sm:mt-16" aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.35} y={12}>
          <p className="mt-12 max-w-xs text-[0.9375rem] leading-[2] tracking-[0.02em] text-charcoal-muted sm:mt-14">
            {heroContent.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.5} y={8}>
          <div className="mt-14 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-center sm:gap-6">
            <Button href={heroContent.primaryCta.href} size="large">
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="large"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="relative min-h-[46vh] px-8 pb-14 pt-4 sm:min-h-[50vh] lg:min-h-0 lg:px-12 lg:py-12 lg:pl-0">
        <div className="relative h-full min-h-[46vh] w-full min-w-0 overflow-hidden sm:min-h-[50vh] lg:absolute lg:inset-0 lg:min-h-0">
          <Image
            src={heroContent.image}
            alt={heroContent.imageAlt}
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, 58vw"
            decoding="sync"
            className="hero-image object-cover [object-position:55%_40%] lg:[object-position:58%_center]"
          />
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
