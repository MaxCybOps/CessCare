import Image from "next/image";
import { solution } from "@/lib/content";
import { Icon } from "../icons";
import { Container, SectionHeading } from "../ui";

export function Solution() {
  return (
    <section id="features" className="section-y bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image sits left on desktop, but reads second on mobile so the
              heading leads. order-* handles the swap without duplicating markup. */}
          <div className="order-2 overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-32px_rgba(19,27,46,0.4)] lg:order-1 lg:rounded-[3rem]">
            <Image
              src="/images/solution-tablet.png"
              alt="A tablet on a desk showing the CessCare dashboard with sleep, activity and hydration summaries."
              width={1184}
              height={646}
              sizes="(max-width: 1024px) 100vw, 592px"
              className="h-auto w-full"
            />
          </div>

          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <SectionHeading>{solution.heading}</SectionHeading>

            <div className="grid gap-8 sm:grid-cols-2">
              {solution.features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <Icon
                    name={f.icon}
                    className="mt-0.5 size-5 shrink-0 text-brand"
                  />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-ink">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-body">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
