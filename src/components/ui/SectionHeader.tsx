import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-16 sm:mb-24 lg:mb-32",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <p className="text-[0.6875rem] tracking-[0.28em] text-gold-muted uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-8 font-serif text-4xl font-light leading-[1.12] tracking-[-0.025em] text-charcoal sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-8 text-base leading-[1.9] text-charcoal-muted",
            align === "center" ? "mx-auto max-w-md" : "max-w-md",
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn("editorial-rule mt-10", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
    </header>
  );
}
