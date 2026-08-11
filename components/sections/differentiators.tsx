import { differentiators } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

/*
  Occupies the slot the design used for testimonials. Those quotes were
  attributed to invented people; with the product pre-launch there are no real
  customers to quote, so the section carries positioning from the strategy
  report instead. Swap back in real quotes once you have them.
*/
export function Differentiators() {
  return (
    <section className="section-y bg-surface-lav">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{differentiators.heading}</SectionHeading>
          <p className="max-w-2xl text-base text-body">
            {differentiators.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {differentiators.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 90}
              className="card-lift flex flex-col gap-4 rounded-[1.75rem] border border-transparent bg-white p-6 shadow-[0_16px_48px_-28px_rgba(19,27,46,0.35)] sm:rounded-[2rem] sm:p-8"
            >
              <span className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-base leading-relaxed text-body">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
