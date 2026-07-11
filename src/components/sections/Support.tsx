import { supportContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function Support() {
  return (
    <Section id="support" background="ivory">
      <Reveal>
        <SectionHeader
          eyebrow={supportContent.eyebrow}
          title={supportContent.title}
          description={supportContent.description}
        />
      </Reveal>

      <div className="mx-auto max-w-3xl">
        {supportContent.categories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.15}>
            <article
              className={cn(
                "py-14 sm:py-20",
                index > 0 && "border-t border-border/40",
              )}
            >
              <span className="font-serif text-[3.5rem] font-light leading-none text-stone-deep/70 sm:text-[4.5rem]">
                {category.number}
              </span>
              <h3 className="mt-8 font-serif text-[1.75rem] font-light tracking-[-0.015em] text-charcoal sm:text-[2rem]">
                {category.title}
              </h3>
              <div className="editorial-rule mt-8" aria-hidden="true" />
              <p className="mt-8 max-w-lg text-base leading-[1.9] text-charcoal-muted">
                {category.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
