"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  quality?: number;
  objectPosition?: string;
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 58vw",
  className,
  quality = 90,
  objectPosition = "center center",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "3%"],
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority={priority}
          sizes={sizes}
          quality={quality}
        />
      </motion.div>
    </div>
  );
}
