import { cessScore } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";

const RADIUS = 140;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function CessScore() {
  /*
    Figma draws the ring as two stacked 280px vectors — a track and a progress
    arc. Rendered here as an 84% arc so the ring actually reflects the score.
    Swap `dash` for CIRCUMFERENCE if you want the closed ring from the file.
  */
  const dash = (cessScore.score / 100) * CIRCUMFERENCE;

  return (
    <section id="cess-score" className="section-y bg-surface-off">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{cessScore.heading}</SectionHeading>
          <p className="max-w-[41rem] text-base text-body">
            {cessScore.subheading}
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative grid size-[260px] place-items-center sm:size-[320px]">
            <svg
              viewBox="0 0 320 320"
              className="absolute inset-0 size-full -rotate-90"
              role="img"
              aria-label={`Cess Score ${cessScore.score} out of 100 — ${cessScore.status}`}
            >
              <circle
                cx="160"
                cy="160"
                r={RADIUS}
                fill="none"
                stroke="var(--color-line)"
                strokeOpacity="0.35"
                strokeWidth="8"
              />
              <circle
                cx="160"
                cy="160"
                r={RADIUS}
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${CIRCUMFERENCE}`}
              />
            </svg>

            <div className="flex flex-col items-center">
              <span className="font-display text-6xl font-bold tracking-tight text-brand">
                {cessScore.score}
              </span>
              <span className="text-eyebrow mt-1 text-body">
                {cessScore.status}
              </span>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {cessScore.pillars.map((p) => (
            <li key={p.label} className="flex flex-col items-center gap-3">
              <span className="grid size-16 place-items-center rounded-full bg-brand/10 text-brand">
                <Icon name={p.icon} className="size-5" />
              </span>
              <span className="font-mono text-base font-bold text-ink">
                {p.label}
              </span>
              <span className="-mt-2 text-xs text-body">
                Contributing {p.weight}%
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
