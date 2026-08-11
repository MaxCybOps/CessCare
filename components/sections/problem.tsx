import { problem } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const tints = {
  rose: "bg-tint-rose text-icon-rose",
  lav: "bg-tint-lav text-ink",
  amber: "bg-tint-amber text-icon-amber",
} as const;

export function Problem() {
  return (
    <section className="section-y">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{problem.heading}</SectionHeading>
          <p className="max-w-2xl text-base text-body">{problem.subheading}</p>
        </Reveal>

        {/* 2-up at tablet rather than 3 — three 230px columns was too cramped. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {problem.cards.map((card, i) => (
            <Reveal
              key={card.title}
              as="article"
              delay={i * 90}
              className="card-lift flex flex-col gap-4 rounded-[1.75rem] border border-line/60 bg-white p-6 sm:rounded-[2rem] sm:p-8"
            >
              <span
                className={`grid size-12 place-items-center rounded-full ${tints[card.tint]}`}
              >
                <Icon name={card.icon} className="size-5" />
              </span>
              <h3 className="text-base font-medium text-ink">{card.title}</h3>
              <p className="text-base leading-relaxed text-body">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
