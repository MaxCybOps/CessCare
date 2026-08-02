import Image from "next/image";
import { aiCoach } from "@/lib/content";
import { Container } from "../ui";

/*
  Full-bleed brand band (#00873A in the file). Headings inherit ink by default,
  so text colours are set explicitly throughout this section.
*/
export function AiCoach() {
  return (
    <section className="section-y bg-brand-bright">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-h2 !text-white">{aiCoach.heading}</h2>
            <p className="max-w-[37rem] text-base leading-relaxed text-surface-mint">
              {aiCoach.subheading}
            </p>

            <div className="mt-2 flex flex-col gap-4">
              {/* Inbound message — light bubble, left aligned. */}
              <p className="max-w-[24rem] rounded-[1.5rem] rounded-bl-md bg-white/25 p-5 text-base leading-relaxed text-white backdrop-blur-sm">
                &ldquo;{aiCoach.userMessage}&rdquo;
              </p>
              {/* Coach reply — dark bubble, indented right. */}
              <p className="ml-auto max-w-[24rem] rounded-[1.5rem] rounded-br-md bg-brand-deep/85 p-5 text-base leading-relaxed text-white lg:ml-12">
                &ldquo;{aiCoach.coachMessage}&rdquo;
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-24px_rgba(0,33,9,0.6)]">
            <Image
              src="/images/ai-dashboard.png"
              alt="The CessCare preventive health intelligence dashboard showing biometric overview and recovery status."
              width={1184}
              height={646}
              sizes="(max-width: 1024px) 100vw, 592px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
