import { cn } from "@/lib/utils";

interface HeroArtworkProps {
  className?: string;
}

const MONOGRAM_PATHS = [
  { d: "M9 8V50", w: 0.9 },
  { d: "M6.5 8H11.5", w: 0.55 },
  { d: "M19 8V27", w: 0.9 },
  { d: "M16.5 8H21.5", w: 0.55 },
  { d: "M9 27H37", w: 0.55 },
  { d: "M35 27V50", w: 0.9 },
  { d: "M37 27V29.5", w: 0.55 },
] as const;

const HIGHLIGHT_PATHS = [
  { d: "M9 8V50", w: 0.4 },
  { d: "M19 8V27", w: 0.4 },
  { d: "M35 27V50", w: 0.4 },
  { d: "M9 27H37", w: 0.3 },
] as const;

function HeroMonogram({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Radial gold glow — blooms at 1.8s */}
      <div
        className="hero-intro-glow pointer-events-none absolute left-1/2 top-[42%] h-[clamp(7rem,18vw,11rem)] w-[clamp(7rem,18vw,11rem)] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 149, 106, 0.16) 0%, rgba(184, 149, 106, 0.05) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* One-shot diagonal shimmer at 3.2s */}
      <div
        className="hero-intro-shimmer pointer-events-none absolute inset-[-30%] z-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="hero-intro-shimmer-beam absolute inset-0" />
      </div>

      <svg
        viewBox="0 0 44 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[clamp(5.5rem,14vw,9.5rem)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="hero-gold-brush"
            x1="8"
            y1="6"
            x2="36"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#e2d0ad" />
            <stop offset="22%" stopColor="#c9ae82" />
            <stop offset="48%" stopColor="#b8956a" />
            <stop offset="68%" stopColor="#d4bc92" />
            <stop offset="100%" stopColor="#967a52" />
          </linearGradient>

          <linearGradient
            id="hero-gold-shadow"
            x1="22"
            y1="6"
            x2="22"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2a241c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0d0b08" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient
            id="hero-gold-highlight"
            x1="22"
            y1="6"
            x2="22"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#f5ecdc" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f5ecdc" stopOpacity="0" />
          </linearGradient>

          <pattern
            id="hero-brush-pattern"
            patternUnits="userSpaceOnUse"
            width="2.5"
            height="2.5"
            patternTransform="rotate(8)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="2.5"
              stroke="#f0e6d2"
              strokeWidth="0.3"
              strokeOpacity="0.05"
            />
          </pattern>

          <filter
            id="hero-monogram-soft"
            x="-30%"
            y="-15%"
            width="160%"
            height="130%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.35" result="soft" />
            <feMerge>
              <feMergeNode in="soft" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Engraved shadow — draws with monogram */}
        <g
          stroke="url(#hero-gold-shadow)"
          strokeLinecap="square"
          transform="translate(0.28 0.38)"
          opacity="0.55"
        >
          {MONOGRAM_PATHS.map(({ d, w }) => (
            <path
              key={`s-${d}`}
              d={d}
              pathLength={1}
              strokeWidth={w}
              className="hero-monogram-stroke hero-monogram-stroke-shadow"
            />
          ))}
        </g>

        {/* Primary brushed metal stroke — draw-in at 0.8s */}
        <g
          stroke="url(#hero-gold-brush)"
          strokeLinecap="square"
          filter="url(#hero-monogram-soft)"
        >
          {MONOGRAM_PATHS.map(({ d, w }) => (
            <path
              key={`m-${d}`}
              d={d}
              pathLength={1}
              strokeWidth={w}
              className="hero-monogram-stroke"
            />
          ))}
        </g>

        {/* Brushed texture — fades in after draw */}
        <g
          stroke="url(#hero-brush-pattern)"
          strokeLinecap="square"
          className="hero-monogram-texture-brush"
        >
          {MONOGRAM_PATHS.map(({ d, w }) => (
            <path key={`t-${d}`} d={d} pathLength={1} strokeWidth={w * 1.4} />
          ))}
        </g>

        {/* Engraved highlight — appears after draw */}
        <g
          stroke="url(#hero-gold-highlight)"
          strokeLinecap="square"
          transform="translate(-0.15 -0.2)"
          className="hero-monogram-texture-highlight"
        >
          {HIGHLIGHT_PATHS.map(({ d, w }) => (
            <path key={`h-${d}`} d={d} pathLength={1} strokeWidth={w} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function ConstructionLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
      viewBox="0 0 400 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#fdfbf7" strokeOpacity="0.022" strokeWidth="0.5">
        <line x1="100" y1="0" x2="100" y2="600" />
        <line x1="300" y1="0" x2="300" y2="600" />
        <line x1="0" y1="200" x2="400" y2="200" />
        <line x1="0" y1="400" x2="400" y2="400" />
      </g>

      <g stroke="#b8956a" strokeWidth="0.5" strokeOpacity="0.14">
        <line x1="32" y1="32" x2="60" y2="32" />
        <line x1="32" y1="32" x2="32" y2="60" />
        <line x1="368" y1="568" x2="340" y2="568" />
        <line x1="368" y1="568" x2="368" y2="540" />
      </g>

      <path
        d="M148 470 L148 230 L200 178 L252 230 L252 470"
        stroke="#fdfbf7"
        strokeOpacity="0.018"
        strokeWidth="0.5"
        fill="none"
      />
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
        "[contain:layout_style_paint]",
        className,
      )}
      aria-hidden="true"
    >
      {/* Base — nearly black at load */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 38%, rgba(42, 38, 34, 0.55) 0%, transparent 62%),
            radial-gradient(ellipse 130% 95% at 50% 108%, rgba(0, 0, 0, 0.5) 0%, transparent 52%),
            linear-gradient(165deg, #1b1a18 0%, #141414 48%, #0e0e0e 100%)
          `,
        }}
      />

      {/* Intro: warm ambient bloom from upper left (0.3s) */}
      <div
        className="hero-intro-ambient pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 18% 12%, rgba(184, 149, 106, 0.09) 0%, transparent 68%)",
        }}
      />

      {/* Idle: drifting warm ambient (after intro) */}
      <div
        className="hero-idle-ambient pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 44% at 50% 42%, rgba(184, 149, 106, 0.055) 0%, transparent 70%)",
        }}
      />

      {/* Idle: cool counterpoint drift */}
      <div
        className="hero-idle-ambient-alt pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 38% 32% at 58% 36%, rgba(255, 252, 247, 0.024) 0%, transparent 68%)",
        }}
      />

      {/* Brushed stone — static texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.016]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            105deg,
            transparent,
            transparent 4px,
            rgba(253, 251, 247, 0.45) 4px,
            rgba(253, 251, 247, 0.45) 4.5px
          )`,
        }}
      />

      {/* Paper grain — moves from 0.0s, imperceptible idle drift after intro */}
      <svg
        className="hero-idle-grain pointer-events-none absolute inset-[-8%] h-[116%] w-[116%] opacity-[0.032] mix-blend-soft-light"
        aria-hidden="true"
      >
        <filter id="hero-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain-filter)" />
      </svg>

      {/* Construction grid — static */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.014]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(253,251,247,0.8) 1px, transparent 1px),
            linear-gradient(0deg, rgba(253,251,247,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <ConstructionLines />

      {/* Embossed panel edge */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255, 252, 247, 0.035),
            inset 1px 0 0 rgba(255, 252, 247, 0.02),
            inset 0 -1px 0 rgba(0, 0, 0, 0.28),
            inset -1px 0 0 rgba(0, 0, 0, 0.14)
          `,
        }}
      />

      {/* Curved corner catch light — static with idle drift */}
      <div
        className="hero-idle-ambient pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 30% at 6% 5%, rgba(255, 252, 247, 0.034) 0%, transparent 68%)",
        }}
      />

      {/* Logo composition */}
      <div className="absolute inset-0 flex items-center justify-center px-8 py-14 sm:px-12 sm:py-16 lg:px-10">
        <div className="hero-idle-breathe flex flex-col items-center text-center">
          <HeroMonogram />

          <p className="hero-intro-brand mt-10 font-serif text-[0.6875rem] font-normal tracking-[0.42em] text-[#c4a574] sm:mt-12 sm:text-[0.75rem]">
            HABITAT TOKYO
          </p>

          <div className="hero-intro-brand relative mt-5 sm:mt-6">
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#b8956a]/45 to-transparent sm:w-16" />
          </div>

          <p className="hero-intro-tagline mt-5 max-w-[14rem] text-[0.5rem] leading-[1.9] tracking-[0.32em] text-[#b8956a]/45 uppercase sm:mt-6 sm:max-w-none sm:text-[0.5625rem] sm:tracking-[0.36em]">
            Private Relocation Concierge
          </p>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 18%, transparent 78%, rgba(0,0,0,0.18) 100%),
            linear-gradient(90deg, rgba(0,0,0,0.06) 0%, transparent 16%, transparent 84%, rgba(0,0,0,0.1) 100%)
          `,
        }}
      />
    </div>
  );
}
