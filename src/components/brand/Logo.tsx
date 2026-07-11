import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "monogram";
type LogoTheme = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string | null;
}

const sizeMap = {
  sm: { full: "h-9", mark: "h-8" },
  md: { full: "h-10", mark: "h-9" },
  lg: { full: "h-12", mark: "h-10" },
} as const;

export function Logo({
  variant = "full",
  theme = "light",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  const dimensions = sizeMap[size];
  const isMonogram = variant === "monogram";

  const src = isMonogram
    ? "/logo/mark.svg"
    : theme === "dark"
      ? "/logo/logo-dark.svg"
      : "/logo/logo.svg";

  const content = (
    <img
      src={src}
      alt=""
      className={cn(
        "w-auto shrink-0",
        isMonogram ? dimensions.mark : dimensions.full,
        className,
      )}
    />
  );

  if (href !== null) {
    return (
      <Link
        href={href ?? "/"}
        className="group inline-flex transition-opacity duration-1000 ease-out hover:opacity-50"
      >
        <span className="sr-only">Habitat Tokyo</span>
        {content}
      </Link>
    );
  }

  return content;
}
