import { statementContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export function Statement() {
  return (
    <Section
      id="statement"
      background="warm-white"
      className="!py-[clamp(6rem,14vw,12rem)]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-serif text-[2rem] font-light leading-[1.18] tracking-[-0.025em] text-charcoal sm:text-[2.5rem] lg:text-[3rem]">
            {statementContent.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="editorial-rule mx-auto mt-12" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-xl text-base leading-[1.9] text-charcoal-muted sm:text-lg">
            {statementContent.body}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
