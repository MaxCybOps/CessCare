import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";
import { Container, SectionHeading } from "../ui";

/*
  Native <details>/<summary> — the accordion needs no JS, works without
  hydration, and is keyboard accessible for free. The 768px column width is
  taken straight from the design.
*/
export function Faq() {
  return (
    <section id="faq" className="section-y">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading className="text-center">{faq.heading}</SectionHeading>

          <div className="mt-12 flex flex-col gap-4">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-[2rem] border border-line/60 bg-white px-6 py-5 open:shadow-[0_16px_40px_-28px_rgba(19,27,46,0.35)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-body transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 text-base leading-relaxed text-body">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
