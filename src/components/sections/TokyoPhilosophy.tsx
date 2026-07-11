import { tokyoPhilosophyContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export function TokyoPhilosophy() {
  return (
    <Section
      id="philosophy"
      background="charcoal"
      className="!py-[clamp(8rem,18vw,16rem)]"
    >
      <div className="mx-auto max-w-5xl px-2 text-center">
        <Reveal y={20}>
          <blockquote className="font-serif text-[1.75rem] font-light leading-[1.22] tracking-[-0.02em] text-ivory sm:text-[2.5rem] lg:text-[3.5rem] lg:leading-[1.18] xl:text-[4rem]">
            &ldquo;{tokyoPhilosophyContent.statement}&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </Section>
  );
}
