import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 sm:p-8",
        "shadow-[0_2px_12px_var(--color-shadow)]",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--color-shadow-lg)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
