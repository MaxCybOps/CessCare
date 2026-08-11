import { Fragment } from "react";
import { howItWorks } from "@/lib/content";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

/*
  Desktop is a five-across row joined by connector rules. Those only make sense
  in a single line, so below lg the steps become a grid and the rules drop.
*/
export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y">
      <Container>
        <Reveal>
          <SectionHeading className="text-center">
            {howItWorks.heading}
          </SectionHeading>
        </Reveal>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:flex lg:items-center">
          {howItWorks.steps.map((step, i) => (
            <Fragment key={step.n}>
              <Reveal
                as="li"
                delay={i * 80}
                className="card-lift flex flex-col items-center gap-2 rounded-[1.75rem] bg-surface-lav px-4 py-6 text-center sm:rounded-[2rem] sm:py-8 lg:flex-1"
              >
                <span className="grid size-10 place-items-center rounded-full bg-brand font-mono text-base font-bold text-white">
                  {step.n}
                </span>
                <h3 className="mt-2 text-base font-medium text-ink">
                  {step.title}
                </h3>
                <p className="text-xs leading-snug text-body">{step.body}</p>
              </Reveal>

              {i < howItWorks.steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden h-0.5 w-[89px] shrink-0 bg-line lg:block"
                />
              )}
            </Fragment>
          ))}
        </ol>
      </Container>
    </section>
  );
}
