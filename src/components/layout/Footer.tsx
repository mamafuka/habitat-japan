import { footerContent } from "@/components/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-warm-white">
      <div className="mx-auto max-w-[var(--content-max)] px-8 py-[clamp(5rem,10vw,7.5rem)] sm:px-12">
        <p className="text-center text-[0.6875rem] tracking-[0.06em] text-charcoal-faint">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
