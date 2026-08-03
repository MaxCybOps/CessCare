import { differentiators } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";

/*
  Occupies the slot the design used for testimonials. Those quotes were
  attributed to invented people; with the product pre-launch there are no real
  customers to quote, so the section now carries the positioning from the
  strategy report instead. Swap back in real quotes once you have them.
*/
export function Differentiators() {
  return (
    <section className="section-y bg-surface-lav">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{differentiators.heading}</SectionHeading>
          <p className="max-w-2xl text-base text-body">
            {differentiators.subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {differentiators.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-[0_16px_48px_-28px_rgba(19,27,46,0.35)]"
            >
              <span className="grid size-12 place-items-center rounded-full bg-brand/10 text-brand">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-base leading-relaxed text-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
