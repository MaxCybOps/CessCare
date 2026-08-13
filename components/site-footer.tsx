import Link from "next/link";
import { Globe, Share2 } from "lucide-react";
import { footer } from "@/lib/content";
import { Container, Logo } from "./ui";

/*
  Previously a single grid where all four blocks stacked on mobile, producing a
  1,118px column of links you had to scroll past. Now the three link groups sit
  in their own nested grid — 2-up on phones, 3-up from sm — and `lg:contents`
  dissolves that wrapper at desktop so the groups become direct children of the
  outer grid again and the original 4-column row is preserved.
*/
export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-line/40 bg-white">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
            <Logo size={32} />
            <p className="max-w-[340px] text-sm leading-relaxed text-body">
              {footer.blurb}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Website"
                className="grid size-9 place-items-center rounded-full bg-surface-lav text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Globe size={15} />
              </Link>
              <Link
                href="#"
                aria-label="Share"
                className="grid size-9 place-items-center rounded-full bg-surface-lav text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Share2 size={15} />
              </Link>
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:contents">
            {footer.columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h5 className="text-sm font-bold tracking-wide text-ink uppercase">
                  {col.heading}
                </h5>
                <ul className="flex flex-col gap-3">
                  {col.links.map((label) => (
                    <li key={label}>
                      <Link
                        href="#"
                        className="text-sm text-body transition-colors hover:text-brand"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line/40 pt-6 lg:mt-14 lg:pt-8">
          <p className="text-center font-mono text-xs leading-relaxed text-body">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
