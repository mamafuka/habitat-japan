import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footerContent, footerLegalLinks } from "@/components/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-warm-white">
      <div className="mx-auto max-w-[var(--content-max)] px-8 py-16 sm:px-12 sm:py-20">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo size="md" />
            <p className="mt-6 max-w-xs text-sm leading-[1.8] text-charcoal-muted">
              {footerContent.tagline}
            </p>
          </div>

          <nav
            className="flex flex-col gap-3"
            aria-label="Footer legal links"
          >
            {footerLegalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-charcoal-muted transition-opacity duration-700 hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-[0.6875rem] tracking-[0.06em] text-charcoal-faint">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
