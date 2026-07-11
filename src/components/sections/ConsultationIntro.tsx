import { consultationIntroContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export function ConsultationIntro() {
  return (
    <Section
      id="consultation"
      background="warm-white"
      className="!py-[clamp(6rem,14vw,12rem)]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-serif text-4xl font-light leading-[1.12] tracking-[-0.025em] text-charcoal sm:text-5xl lg:text-[3.5rem]">
            {consultationIntroContent.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="editorial-rule mx-auto mt-10" aria-hidden="true" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-lg text-base leading-[1.9] text-charcoal-muted">
            {consultationIntroContent.description}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-[1.8] text-charcoal-faint">
            {consultationIntroContent.serviceScopeNotice}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
