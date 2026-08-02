import Link from "next/link";
import { Globe, Share2 } from "lucide-react";
import { footer } from "@/lib/content";
import { Container, Logo } from "./ui";

export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-line/40 bg-white">
      <Container className="py-16 lg:py-20">
        {/* 464 / 208 / 208 / 208 in the design → brand column stays wider. */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-6">
            <Logo size={32} />
            <p className="max-w-[320px] text-sm leading-relaxed text-body">
              {footer.blurb}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                aria-label="Website"
                className="grid size-8 place-items-center rounded-full bg-surface-lav text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Globe size={14} />
              </Link>
              <Link
                href="#"
                aria-label="Share"
                className="grid size-8 place-items-center rounded-full bg-surface-lav text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Share2 size={14} />
              </Link>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-6">
              <h5 className="text-base font-bold text-ink">{col.heading}</h5>
              <ul className="flex flex-col gap-4">
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

        <div className="mt-16 border-t border-line/40 pt-8">
          <p className="text-center font-mono text-xs text-body">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
