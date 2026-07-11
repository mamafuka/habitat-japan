import { Logo } from "@/components/brand/Logo";
import Link from "next/link";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-border px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-between">
          <Logo size="md" />
          <Link
            href="/"
            className="text-sm text-charcoal-muted transition-colors duration-700 hover:text-charcoal"
          >
            Return to homepage
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="font-serif text-4xl font-light tracking-[-0.02em] text-charcoal sm:text-5xl">
          {title}
        </h1>
        <div className="editorial-rule mt-10" aria-hidden="true" />
        <div className="mt-10 space-y-12 text-base leading-[1.85] text-charcoal-muted">
          {children}
        </div>
      </main>
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-light tracking-[-0.015em] text-charcoal">
        {title}
      </h2>
      <div className="mt-6 space-y-4">{children}</div>
    </section>
  );
}

export { LegalSection };
