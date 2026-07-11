import { processContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <Section id="process" background="stone">
      <Reveal>
        <SectionHeader
          eyebrow={processContent.eyebrow}
          title={processContent.title}
          description={processContent.description}
          align="center"
        />
      </Reveal>

      <div className="relative mx-auto mt-4 max-w-2xl">
        <div
          className="absolute top-6 bottom-6 left-[1.125rem] w-px bg-border/50 sm:left-[1.375rem]"
          aria-hidden="true"
        />

        <ol className="space-y-0">
          {processContent.steps.map((step, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <li className="relative grid grid-cols-[2.75rem_1fr] gap-8 py-10 sm:grid-cols-[3.25rem_1fr] sm:gap-10 sm:py-14">
                  <span className="font-serif text-2xl font-light text-stone-muted sm:text-3xl">
                    {stepNumber}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light tracking-[-0.01em] text-charcoal sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-[1.9] text-charcoal-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
