import Image from "next/image";
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

const dimensionMap = {
  sm: { full: { width: 140, height: 36 }, mark: { width: 32, height: 32 } },
  md: { full: { width: 156, height: 40 }, mark: { width: 36, height: 36 } },
  lg: { full: { width: 188, height: 48 }, mark: { width: 40, height: 40 } },
} as const;

export function Logo({
  variant = "full",
  theme = "light",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  const dimensions = sizeMap[size];
  const pixelDimensions = dimensionMap[size];
  const isMonogram = variant === "monogram";

  const src = isMonogram
    ? "/logo/mark.svg"
    : theme === "dark"
      ? "/logo/logo-dark.svg"
      : "/logo/logo.svg";

  const { width, height } = isMonogram ? pixelDimensions.mark : pixelDimensions.full;

  const content = (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      unoptimized
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
