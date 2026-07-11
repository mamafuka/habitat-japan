"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "large";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-charcoal text-ivory border border-charcoal/90 hover:bg-charcoal/85 hover:border-charcoal/70",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40 hover:bg-stone/20",
  ghost:
    "text-charcoal-muted border border-transparent hover:text-charcoal hover:border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-11 px-7 text-[0.8125rem] tracking-[0.06em]",
  large: "h-12 px-9 text-[0.8125rem] tracking-[0.08em]",
};

const luxuryEase = [0.25, 0.1, 0.25, 1] as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external = false,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const styles = cn(
    "inline-flex items-center justify-center rounded-full font-normal",
    "transition-all duration-700 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
    "disabled:pointer-events-none disabled:opacity-40",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -1, opacity: variant === "primary" ? 0.92 : 1 },
        whileTap: { scale: 0.985 },
        transition: { duration: 0.7, ease: luxuryEase },
      };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link href={href} className={styles} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
