import { lifestyle } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";

/* 4x2 on desktop (284px cards), 2-up on tablet, single column on phones. */
export function LifestyleGrid() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading className="text-center">
          {lifestyle.heading}
        </SectionHeading>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lifestyle.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-2 rounded-[2rem] border border-line/60 bg-white p-6 transition-shadow duration-200 hover:shadow-[0_16px_40px_-20px_rgba(19,27,46,0.35)]"
            >
              <Icon name={card.icon} className="size-7 text-brand" />
              <h3 className="mt-2 text-lg text-ink">{card.title}</h3>
              <p className="text-sm leading-relaxed text-body">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
