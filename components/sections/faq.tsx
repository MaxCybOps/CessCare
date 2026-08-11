import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

/*
  Native <details>/<summary> — no JS, works without hydration, keyboard
  accessible for free. The 768px column width comes from the design.
*/
export function Faq() {
  return (
    <section id="faq" className="section-y">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading className="text-center">
              {faq.heading}
            </SectionHeading>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12">
            {faq.items.map((item, i) => (
              <Reveal
                key={item.q}
                as="details"
                delay={i * 70}
                className="group rounded-[1.5rem] border border-line/60 bg-white px-5 py-4 transition-colors hover:border-brand/40 open:shadow-[0_16px_40px_-28px_rgba(19,27,46,0.35)] sm:rounded-[2rem] sm:px-6 sm:py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base text-ink marker:hidden sm:gap-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-body transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 text-base leading-relaxed text-body">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
