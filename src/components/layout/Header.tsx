"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { navigation } from "@/components/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);
const ease = [0.25, 0.1, 0.25, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 sm:px-10 sm:pt-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease }}
          className={cn(
            "mx-auto flex max-w-[var(--content-max)] items-center justify-between px-2 py-4",
            "transition-all duration-1000 ease-out",
            scrolled && "glass-nav -mx-2 rounded-none border-b border-border/30 px-6 sm:px-8",
          )}
        >
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:flex" />

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <MotionLink
                key={item.href}
                href={item.href}
                className="text-[0.8125rem] tracking-[0.04em] text-charcoal-muted transition-colors duration-1000 ease-out hover:text-charcoal"
                transition={{ duration: 1, ease }}
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" size="default" variant="secondary">
              Consultation
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-charcoal transition-opacity duration-700 hover:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1" />
              )}
            </svg>
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 bg-charcoal/10 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu-panel"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-x-6 top-[5rem] z-50 bg-ivory px-8 py-10 sm:inset-x-10 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-border/30">
                  <Link
                    href={item.href}
                    className="block py-5 text-base text-charcoal transition-opacity duration-700 hover:opacity-50"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="#contact" className="w-full" onClick={closeMenu}>
                Request Private Consultation
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
