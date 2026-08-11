import { lifestyle } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

/* 4-up desktop, 2-up tablet, single column on phones. */
export function LifestyleGrid() {
  return (
    <section className="section-y">
      <Container>
        <Reveal>
          <SectionHeading className="text-center">
            {lifestyle.heading}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {lifestyle.cards.map((card, i) => (
            <Reveal
              key={card.title}
              as="article"
              // Stagger by column so a row appears to settle together.
              delay={(i % 4) * 80}
              className="card-lift flex flex-col gap-2 rounded-[1.75rem] border border-line/60 bg-white p-5 sm:rounded-[2rem] sm:p-6"
            >
              <Icon name={card.icon} className="size-7 text-brand" />
              <h3 className="mt-2 text-lg text-ink">{card.title}</h3>
              <p className="text-sm leading-relaxed text-body">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
