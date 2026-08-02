import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { hero } from "@/lib/content";
import { ButtonLink, Container } from "../ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/*
        Figma layers a 20%-opacity shader PNG here. Reproduced as a CSS gradient
        so we ship no 1280x800 decorative bitmap.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_15%_0%,#f2f3ff_0%,transparent_60%),radial-gradient(60%_50%_at_100%_10%,#f7fff2_0%,transparent_65%)]"
      />

      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-12 lg:py-[7.5rem]">
          <div className="flex flex-col items-start gap-6">
            <span className="text-eyebrow rounded-full bg-mint/45 px-4 py-1.5 text-brand-deep">
              {hero.eyebrow}
            </span>

            <h1 className="text-display">
              {hero.headingBefore}{" "}
              <span className="text-brand">{hero.headingAccent}</span>{" "}
              {hero.headingAfter}
            </h1>

            <p className="max-w-[36rem] text-lg leading-relaxed text-body">
              {hero.body}
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#waitlist">{hero.primaryCta}</ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary">
                <PlayCircle size={20} aria-hidden="true" />
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-32px_rgba(19,27,46,0.35)] lg:rounded-[3rem]">
              <Image
                src="/images/hero-phone.png"
                alt="The CessCare mobile app showing a Cess Score of 84 alongside daily health metrics."
                width={1180}
                height={644}
                sizes="(max-width: 1024px) 100vw, 592px"
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
