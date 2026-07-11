import Image from "next/image";
import { tokyoCollectionContent } from "@/components/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TokyoCollection() {
  return (
    <Section id="collection" background="warm-white">
      <Reveal>
        <SectionHeader
          eyebrow={tokyoCollectionContent.eyebrow}
          title={tokyoCollectionContent.title}
          description={tokyoCollectionContent.description}
          align="center"
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-16">
        {tokyoCollectionContent.locations.map((location, index) => (
          <Reveal key={location.name} delay={index * 0.1} y={24}>
            <article className="group">
              <div className="overflow-hidden bg-stone transition-shadow duration-700 ease-out group-hover:shadow-[0_12px_40px_-20px_rgba(28,28,28,0.18)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`${location.name} — Tokyo lifestyle`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
                    style={{ objectPosition: location.imagePosition }}
                  />
                </div>
              </div>

              <div className="mt-10 sm:mt-12">
                <h3 className="font-serif text-[1.75rem] font-light tracking-[-0.02em] text-charcoal sm:text-2xl">
                  {location.name}
                </h3>
                <div className="editorial-rule mt-8" aria-hidden="true" />
                <div className="mt-8 space-y-1">
                  {location.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[0.9375rem] leading-[1.85] tracking-[0.01em] text-charcoal-muted"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
