"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { ButtonLink, Container, Logo } from "./ui";

/*
  The CTA is a wide, non-wrapping pill. Showing it from `sm` meant that between
  roughly 400px and 1024px the row (logo + CTA + hamburger) could not fit, so
  the header overflowed and dragged the whole page into horizontal scroll —
  which made every section below look shoved around and oversized.

  Fix: the CTA only appears at `lg`, where the nav links appear too and there is
  room for both. Below that it lives in the mobile sheet. min-w-0 on the flex
  children lets them shrink instead of forcing the row wider than the viewport.
*/
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Deepen the header shadow once the page moves, so it reads as a layer.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_rgba(189,202,186,0.5),0_8px_24px_-16px_rgba(19,27,46,0.35)]"
          : "shadow-[0_1px_0_rgba(189,202,186,0.35)]"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo className="min-w-0 shrink" />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {nav.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative text-base text-body transition-colors hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            {/*
              Wrapped rather than putting `hidden` on the ButtonLink itself:
              ButtonLink already sets `inline-flex`, and Tailwind emits
              `.inline-flex` after `.hidden`, so the hide silently lost and the
              CTA stayed on screen at every width. Two display utilities on one
              element is the trap — the wrapper avoids it entirely.
            */}
            <div className="hidden lg:block">
              <ButtonLink
                href="#waitlist"
                className="font-mono text-sm tracking-widest uppercase"
              >
                {nav.cta}
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line/40 bg-white lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {nav.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-lg text-ink transition-colors hover:bg-surface-off"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-4 w-full font-mono text-sm tracking-widest uppercase"
          >
            {nav.cta}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
