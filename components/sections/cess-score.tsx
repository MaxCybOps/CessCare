"use client";

import { useEffect, useRef, useState } from "react";
import { cessScore } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";
import { Reveal } from "../reveal";

const RADIUS = 140;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DURATION = 1600;

/*
  Figma draws the ring as two stacked 280px vectors — a track and a progress
  arc — so the arc reflects the score rather than closing the circle. It draws
  from zero and the number counts up when the section scrolls into view, which
  is the one place on this page where motion carries meaning rather than
  decoration: you watch the score resolve.
*/
export function CessScore() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Skip the count-up entirely for reduced motion; land on the number.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setValue(cessScore.score);
          return;
        }

        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          // easeOutCubic — fast at first, settles gently on the final number.
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * cessScore.score));
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dash = (value / 100) * CIRCUMFERENCE;

  return (
    <section id="cess-score" className="section-y bg-surface-off">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionHeading>{cessScore.heading}</SectionHeading>
          <p className="max-w-[41rem] text-base text-body">
            {cessScore.subheading}
          </p>
        </Reveal>

        <div ref={ref} className="mt-10 flex justify-center sm:mt-12">
          <div className="relative grid size-[220px] place-items-center sm:size-[280px] lg:size-[320px]">
            <svg
              viewBox="0 0 320 320"
              className="absolute inset-0 size-full -rotate-90"
              role="img"
              aria-label={`Cess Score ${cessScore.score} out of 100, ${cessScore.status}`}
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
              <span className="font-display text-5xl font-bold tracking-tight text-brand tabular-nums sm:text-6xl">
                {value}
              </span>
              <span className="text-eyebrow mt-1 text-body">
                {cessScore.status}
              </span>
            </div>
          </div>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:mt-14 lg:grid-cols-5">
          {cessScore.pillars.map((p, i) => (
            <Reveal
              key={p.label}
              as="li"
              delay={i * 70}
              className="flex flex-col items-center gap-3"
            >
              <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand sm:size-16">
                <Icon name={p.icon} className="size-5" />
              </span>
              <span className="font-mono text-sm font-bold text-ink sm:text-base">
                {p.label}
              </span>
              <span className="-mt-2 text-xs text-body">
                Contributing {p.weight}%
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
