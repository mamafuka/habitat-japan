import { Monogram } from "@/components/brand/Monogram";
import { aboutContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" background="warm-white" className="!py-[clamp(6rem,14vw,12rem)]">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-[0.6875rem] tracking-[0.28em] text-gold-muted uppercase">
            {aboutContent.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.14] tracking-[-0.025em] text-charcoal sm:text-5xl lg:text-[3.25rem]">
            {aboutContent.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="editorial-rule mt-12" aria-hidden="true" />
        </Reveal>
        <div className="mt-12 space-y-8">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.28 + index * 0.1}>
              <p className="text-base leading-[1.95] text-charcoal-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.55}>
          <div className="mt-16 flex justify-center sm:mt-20" aria-hidden="true">
            <Monogram size={28} theme="muted" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
