import Image from "next/image";
import { solution } from "@/lib/content";
import { Icon } from "../icons";
import { Container } from "../ui";
import { Reveal } from "../reveal";

export function Solution() {
  return (
    <section id="features" className="section-y bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Image left on desktop, but second on mobile so the heading leads. */}
          <Reveal className="order-2 overflow-hidden rounded-[1.5rem] shadow-[0_24px_64px_-32px_rgba(19,27,46,0.4)] sm:rounded-[2rem] lg:order-1 lg:rounded-[3rem]">
            <Image
              src="/images/solution-tablet.png"
              alt="A tablet on a desk showing the CessCare dashboard with sleep, activity and hydration summaries."
              width={2368}
              height={1291}
              sizes="(max-width: 1024px) 92vw, 592px"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="order-1 flex flex-col gap-6 sm:gap-8 lg:order-2">
            {/* Heading centres on mobile to match the sections around it;
                the feature rows stay left because they lead with an icon. */}
            <Reveal as="h2" className="text-h2 text-center lg:text-left">
              {solution.heading}
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {solution.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70} className="flex gap-4">
                  <Icon
                    name={f.icon}
                    className="mt-0.5 size-5 shrink-0 text-brand"
                  />
                  <div className="flex min-w-0 flex-col gap-2">
                    <h4 className="text-lg font-bold text-ink">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-body">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
