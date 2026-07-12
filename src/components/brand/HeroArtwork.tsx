import { cn } from "@/lib/utils";

interface HeroArtworkProps {
  className?: string;
}

function HeroMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-[clamp(5.5rem,14vw,9.5rem)]", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="hero-monogram-gold"
          x1="22"
          y1="4"
          x2="22"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#dcc9a3" />
          <stop offset="45%" stopColor="#b8956a" />
          <stop offset="100%" stopColor="#8f7550" />
        </linearGradient>
        <linearGradient
          id="hero-monogram-sheen"
          x1="0"
          y1="0"
          x2="44"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#hero-monogram-gold)" strokeLinecap="square">
        <path d="M9 8V50" strokeWidth="0.9" />
        <path d="M6.5 8H11.5" strokeWidth="0.55" />
        <path d="M19 8V27" strokeWidth="0.9" />
        <path d="M16.5 8H21.5" strokeWidth="0.55" />
        <path d="M9 27H37" strokeWidth="0.55" />
        <path d="M35 27V50" strokeWidth="0.9" />
        <path d="M37 27V29.5" strokeWidth="0.55" />
      </g>
      <g stroke="url(#hero-monogram-sheen)" strokeLinecap="square" opacity="0.85">
        <path d="M9 8V50" strokeWidth="0.9" />
        <path d="M35 27V50" strokeWidth="0.9" />
      </g>
    </svg>
  );
}

export function HeroArtwork({ className }: HeroArtworkProps) {
  return (
    <div
      className={cn(
        "hero-artwork relative h-full min-h-[46vh] w-full overflow-hidden sm:min-h-[50vh]",
        "rounded-tl-[clamp(2.75rem,14vw,10rem)] rounded-tr-[clamp(1rem,3vw,1.5rem)]",
        "lg:rounded-tr-none lg:rounded-bl-none",
        className,
      )}
      aria-hidden="true"
    >
      {/* Base charcoal with depth */}
      <div className="absolute inset-0 bg-[#141414]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 42%, rgba(38, 36, 33, 0.55) 0%, transparent 68%)",
        }}
      />

      {/* Fine paper grain */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Architectural grid — barely visible */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #fdfbf7 1px, transparent 1px),
            linear-gradient(0deg, #fdfbf7 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Corner registration marks */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g stroke="#b8956a" strokeOpacity="0.22" strokeWidth="1">
          <line x1="36" y1="36" x2="76" y2="36" />
          <line x1="36" y1="36" x2="36" y2="76" />
          <line x1="364" y1="564" x2="324" y2="564" />
          <line x1="364" y1="564" x2="364" y2="524" />
        </g>
      </svg>

      {/* Logo composition */}
      <div className="absolute inset-0 flex items-center justify-center px-8 py-14 sm:px-12 sm:py-16 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="motion-safe:animate-[hero-breathe_14s_ease-in-out_infinite] motion-reduce:animate-none">
            <HeroMonogram />
          </div>

          <p className="mt-10 font-serif text-[0.6875rem] font-normal tracking-[0.42em] text-gold sm:mt-12 sm:text-[0.75rem]">
            HABITAT TOKYO
          </p>

          <div className="mt-5 h-px w-14 bg-gradient-to-r from-transparent via-gold/70 to-transparent sm:mt-6 sm:w-16" />

          <p className="mt-5 max-w-[14rem] text-[0.5rem] leading-[1.9] tracking-[0.32em] text-gold/55 uppercase sm:mt-6 sm:max-w-none sm:text-[0.5625rem] sm:tracking-[0.36em]">
            Private Relocation Concierge
          </p>
        </div>
      </div>

      {/* Soft edge vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.18) 100%)",
        }}
      />
    </div>
  );
}
