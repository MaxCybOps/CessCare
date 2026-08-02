import { problem } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";

const tints = {
  rose: "bg-tint-rose text-icon-rose",
  lav: "bg-tint-lav text-ink",
  amber: "bg-tint-amber text-icon-amber",
} as const;

export function Problem() {
  return (
    <section className="section-y">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{problem.heading}</SectionHeading>
          <p className="max-w-2xl text-base text-body">{problem.subheading}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problem.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-[2rem] border border-line/60 bg-white p-8"
            >
              <span
                className={`grid size-12 place-items-center rounded-full ${tints[card.tint]}`}
              >
                <Icon name={card.icon} className="size-5" />
              </span>
              <h3 className="text-base font-medium text-ink">{card.title}</h3>
              <p className="text-base leading-relaxed text-body">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
