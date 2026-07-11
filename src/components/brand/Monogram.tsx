import { cn } from "@/lib/utils";

interface MonogramProps {
  size?: number;
  className?: string;
  theme?: "light" | "dark" | "muted";
}

export function Monogram({
  size = 36,
  className,
  theme = "light",
}: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "shrink-0",
        theme === "light" && "text-charcoal",
        theme === "dark" && "text-ivory",
        theme === "muted" && "text-stone-deep",
        className,
      )}
      aria-hidden="true"
    >
      {/* Torii-inspired portal — negative space as doorway */}
      <line
        x1="9"
        y1="7"
        x2="9"
        y2="33"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <line
        x1="31"
        y1="7"
        x2="31"
        y2="33"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <line
        x1="9"
        y1="20"
        x2="31"
        y2="20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}
