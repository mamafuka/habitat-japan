import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "ivory" | "warm-white" | "stone" | "surface" | "charcoal";
  narrow?: boolean;
}

const backgroundStyles = {
  ivory: "bg-ivory",
  "warm-white": "bg-warm-white",
  stone: "bg-stone/60",
  surface: "bg-surface",
  charcoal: "bg-charcoal",
};

export function Section({
  id,
  children,
  className,
  background = "ivory",
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-[var(--section-py)]", backgroundStyles[background], className)}
    >
      <div
        className={cn(
          "mx-auto px-6 sm:px-10",
          narrow ? "max-w-3xl" : "max-w-[var(--content-max)]",
        )}
      >
        {children}
      </div>
    </section>
  );
}
