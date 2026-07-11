import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  children: React.ReactNode;
}

export function PlaceholderPage({ title, children }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-border px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-between">
          <Logo size="md" />
          <Link
            href="/"
            className="text-sm text-charcoal-muted transition-colors hover:text-charcoal"
          >
            Return to homepage
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <p className="text-xs tracking-[0.24em] text-gold-muted uppercase">
          Placeholder
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-[-0.02em] text-charcoal sm:text-5xl">
          {title}
        </h1>
        <div className="editorial-rule mt-10" aria-hidden="true" />
        <div className="mt-10 space-y-6 text-base leading-[1.85] text-charcoal-muted">
          {children}
        </div>
        <div
          className={cn(
            "mt-12 rounded-sm border border-gold/30 bg-gold-light/40 px-6 py-5",
          )}
        >
          <p className="text-sm leading-relaxed text-charcoal">
            <strong className="font-medium text-charcoal">
              Content required before launch.
            </strong>{" "}
            This page contains placeholder text only. Replace with reviewed legal
            and company information before public release.
          </p>
        </div>
      </main>
    </div>
  );
}
