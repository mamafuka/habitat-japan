import { Monogram } from "@/components/brand/Monogram";
import { cn } from "@/lib/utils";

interface HeroArtworkProps {
  className?: string;
}

export function HeroArtwork({ className }: HeroArtworkProps) {
  return (
    <div
      className={cn(
        "relative h-full min-h-[50vh] overflow-hidden rounded-lg bg-charcoal sm:min-h-[55vh] lg:min-h-0 lg:rounded-xl",
        className,
      )}
      aria-hidden="true"
    >
      {/* Subtle stone texture via fine cross-hatch */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #fdfbf7 1px, transparent 1px),
            linear-gradient(0deg, #fdfbf7 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Architectural frame lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical rhythm lines */}
        <line
          x1="60"
          y1="0"
          x2="60"
          y2="600"
          stroke="#fdfbf7"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
        <line
          x1="340"
          y1="0"
          x2="340"
          y2="600"
          stroke="#fdfbf7"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
        {/* Horizontal threshold */}
        <line
          x1="0"
          y1="280"
          x2="400"
          y2="280"
          stroke="#fdfbf7"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="480"
          x2="400"
          y2="480"
          stroke="#fdfbf7"
          strokeOpacity="0.05"
          strokeWidth="1"
        />
        {/* Entryway arch suggestion — thin geometric curve */}
        <path
          d="M120 480 L120 200 L200 120 L280 200 L280 480"
          stroke="#fdfbf7"
          strokeOpacity="0.07"
          strokeWidth="1"
          fill="none"
        />
        {/* Corner registration marks */}
        <line
          x1="40"
          y1="40"
          x2="80"
          y2="40"
          stroke="#b8956a"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <line
          x1="40"
          y1="40"
          x2="40"
          y2="80"
          stroke="#b8956a"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <line
          x1="360"
          y1="560"
          x2="320"
          y2="560"
          stroke="#b8956a"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <line
          x1="360"
          y1="560"
          x2="360"
          y2="520"
          stroke="#b8956a"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      </svg>

      {/* Oversized monogram — centered with generous negative space */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <Monogram
            size={200}
            theme="dark"
            className="opacity-[0.12] motion-safe:animate-[hero-breathe_12s_ease-in-out_infinite] motion-reduce:animate-none sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px]"
          />
          {/* Thin accent line beneath monogram */}
          <div className="absolute -bottom-8 left-1/2 h-px w-16 -translate-x-1/2 bg-gold/30" />
        </div>
      </div>

      {/* Bottom edge — no gradient, solid panel */}
    </div>
  );
}
