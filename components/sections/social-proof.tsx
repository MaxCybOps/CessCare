import { socialProof } from "@/lib/content";
import { Container } from "../ui";

/*
  The design placed four empty grey pills here as stand-ins for partner logos.
  There are no partners yet, so the pills now carry the launch markets from the
  go-to-market plan instead of fabricated logos.
*/
export function SocialProof() {
  return (
    <section className="bg-surface-lav py-12">
      <Container>
        <p className="text-eyebrow text-center text-body">{socialProof.label}</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialProof.markets.map((market) => (
            <li
              key={market}
              className="rounded-2xl bg-white/70 px-5 py-2 font-mono text-sm tracking-wide text-body"
            >
              {market}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
