import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  footerContent,
  footerNavigation,
  legalNotice,
  siteConfig,
} from "@/components/content/site";

export function Footer() {
  const primaryLinks = footerNavigation.filter((item) =>
    item.href.startsWith("#"),
  );
  const legalLinks = footerNavigation.filter((item) =>
    item.href.startsWith("/"),
  );

  return (
    <footer className="border-t border-border/40 bg-warm-white">
      <div className="mx-auto max-w-[var(--content-max)] px-8 py-20 sm:px-12 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          <div>
            <Logo size="md" />
            <p className="mt-8 max-w-xs text-sm leading-[1.8] text-charcoal-muted">
              {footerContent.tagline}
            </p>
            <p className="mt-8 text-xs leading-relaxed text-charcoal-faint">
              {footerContent.operatingCompany}
            </p>
          </div>

          <div>
            <p className="text-[0.6875rem] tracking-[0.22em] text-gold-muted uppercase">
              Navigation
            </p>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Footer navigation">
              {primaryLinks.map((item) => (
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

          <div>
            <p className="text-[0.6875rem] tracking-[0.22em] text-gold-muted uppercase">
              Legal
            </p>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Footer legal links">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-charcoal-muted transition-opacity duration-700 hover:opacity-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 text-xs text-charcoal-faint">
              {siteConfig.email}
              <span className="mt-1 block text-charcoal-faint/70">
                Production contact endpoint required before launch
              </span>
            </p>
          </div>
        </div>

        <div className="editorial-rule mt-16" aria-hidden="true" />

        <p className="mt-10 max-w-2xl text-xs leading-[1.8] text-charcoal-faint">
          {legalNotice}
        </p>

        <p className="mt-12 text-[0.6875rem] tracking-[0.06em] text-charcoal-faint">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
