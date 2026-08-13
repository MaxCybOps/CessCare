import Image from "next/image";
import { aiCoach } from "@/lib/content";
import { Container } from "../ui";
import { Reveal } from "../reveal";

/*
  Full-bleed brand band (#00873A in the file). Headings inherit ink by default,
  so text colours are set explicitly throughout this section.
*/
export function AiCoach() {
  return (
    <section className="section-y bg-brand-bright">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5 sm:gap-6">
            <Reveal as="h2" className="text-h2 text-center text-white lg:text-left">
              {aiCoach.heading}
            </Reveal>
            <Reveal as="p" delay={80} className="mx-auto max-w-[37rem] text-center text-base leading-relaxed text-surface-mint lg:mx-0 lg:text-left">
              {aiCoach.subheading}
            </Reveal>

            <div className="mt-1 flex flex-col gap-4">
              {/* Inbound message — light bubble, left aligned. */}
              <Reveal as="p" delay={160} className="max-w-[24rem] rounded-[1.5rem] rounded-bl-md bg-white/25 p-4 text-base leading-relaxed text-white backdrop-blur-sm sm:p-5">
                &ldquo;{aiCoach.userMessage}&rdquo;
              </Reveal>
              {/* Coach reply — dark bubble, indented right. */}
              <Reveal as="p" delay={340} className="ml-auto max-w-[24rem] rounded-[1.5rem] rounded-br-md bg-brand-deep/85 p-4 text-base leading-relaxed text-white sm:p-5 lg:ml-12">
                &ldquo;{aiCoach.coachMessage}&rdquo;
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_-24px_rgba(0,33,9,0.6)] sm:rounded-[2rem]">
            <Image
              src="/images/ai-dashboard.png"
              alt="The CessCare preventive health intelligence dashboard showing biometric overview and recovery status."
              width={2368}
              height={1291}
              sizes="(max-width: 1024px) 92vw, 592px"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
