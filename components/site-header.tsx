"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { ButtonLink, Container, Logo } from "./ui";

/*
  Figma gives an 80px static bar. Made sticky here — at 6752px tall the page
  needs persistent access to the CTA. Below lg the links collapse into a sheet,
  since five links plus a 214px button cannot fit a 390px viewport.
*/
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/40 bg-white/85 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {nav.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-base text-body transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="#waitlist"
              className="hidden font-mono text-sm tracking-widest uppercase sm:inline-flex"
            >
              {nav.cta}
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-line text-ink lg:hidden"
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
