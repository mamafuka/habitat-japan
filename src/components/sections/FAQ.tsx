import { faqContent } from "@/components/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  return (
    <Section id="faq" background="ivory" narrow className="!py-[clamp(6rem,14vw,12rem)]">
      <Reveal>
        <SectionHeader
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
          align="center"
        />
      </Reveal>
      <Reveal delay={0.2}>
        <Accordion items={faqContent.items} />
      </Reveal>
    </Section>
  );
}
