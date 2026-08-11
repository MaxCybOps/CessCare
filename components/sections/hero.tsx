import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { hero } from "@/lib/content";
import { ButtonLink, Container } from "../ui";
import { Reveal } from "../reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/*
        Figma layers a 20%-opacity shader PNG here. Reproduced as a slowly
        drifting CSS gradient so the hero isn't dead still, without shipping a
        1280x800 decorative bitmap.
      */}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_15%_0%,#f2f3ff_0%,transparent_60%),radial-gradient(60%_50%_at_100%_10%,#f7fff2_0%,transparent_65%)]"
      />

      <Container>
        <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-[7.5rem]">
          <div className="flex flex-col items-start gap-5 sm:gap-6">
            <Reveal as="span" className="inline-block">
              <span className="text-eyebrow inline-block rounded-full bg-mint/45 px-4 py-1.5 text-brand-deep">
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal as="h1" delay={80} className="text-display">
              {hero.headingBefore}{" "}
              <span className="text-brand">{hero.headingAccent}</span>{" "}
              {hero.headingAfter}
            </Reveal>

            <Reveal as="p" delay={160} className="max-w-[36rem] text-base leading-relaxed text-body sm:text-lg">
              {hero.body}
            </Reveal>

            <Reveal delay={240} className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonLink href="#waitlist" className="justify-center">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary" className="justify-center">
                <PlayCircle size={20} aria-hidden="true" />
                {hero.secondaryCta}
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_32px_80px_-32px_rgba(19,27,46,0.35)] sm:rounded-[2rem] lg:rounded-[3rem]">
              <Image
                src="/images/hero-phone.png"
                alt="The CessCare mobile app showing a Cess Score of 84 alongside daily health metrics."
                width={2360}
                height={1286}
                sizes="(max-width: 1024px) 92vw, 592px"
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
