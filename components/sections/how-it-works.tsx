import { Fragment } from "react";
import { howItWorks } from "@/lib/content";
import { Container, SectionHeading } from "../ui";

/*
  Desktop is a five-across row joined by 89x2 connector rules. Those connectors
  only make sense in a single line, so below lg the steps become a plain grid
  and the rules are dropped rather than rotated.
*/
export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y">
      <Container>
        <SectionHeading className="text-center">
          {howItWorks.heading}
        </SectionHeading>

        <ol className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-center lg:gap-4">
          {howItWorks.steps.map((step, i) => (
            <Fragment key={step.n}>
              <li className="flex flex-col items-center gap-2 rounded-[2rem] bg-surface-lav px-4 py-8 text-center lg:flex-1">
                <span className="grid size-10 place-items-center rounded-full bg-brand font-mono text-base font-bold text-white">
                  {step.n}
                </span>
                <h3 className="mt-2 text-base font-medium text-ink">
                  {step.title}
                </h3>
                <p className="text-xs leading-snug text-body">{step.body}</p>
              </li>

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
