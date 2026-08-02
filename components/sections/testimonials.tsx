import { testimonials } from "@/lib/content";
import { StarIcon } from "../icons";
import { Container, SectionHeading } from "../ui";

export function Testimonials() {
  return (
    <section className="section-y bg-surface-lav">
      <Container>
        <SectionHeading className="text-center">
          {testimonials.heading}
        </SectionHeading>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-[0_16px_48px_-28px_rgba(19,27,46,0.35)]"
            >
              <div
                className="flex gap-1 text-brand"
                role="img"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-5" />
                ))}
              </div>

              <blockquote className="grow text-base leading-relaxed text-body italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-4">
                {/* The design uses empty grey avatar circles — no photos exist. */}
                <span
                  aria-hidden="true"
                  className="size-12 shrink-0 rounded-full bg-surface-lav"
                />
                <span className="flex flex-col">
                  <span className="font-mono text-base font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="text-xs text-body">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
