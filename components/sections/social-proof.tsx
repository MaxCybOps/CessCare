import { socialProof } from "@/lib/content";
import { Container } from "../ui";

/*
  The design shows four grey placeholder pills where partner logos will go.
  They're kept as placeholders rather than invented, and hidden from screen
  readers since they carry no meaning yet.
*/
export function SocialProof() {
  return (
    <section className="bg-surface-lav py-12">
      <Container>
        <p className="text-eyebrow text-center text-body">{socialProof.label}</p>
        <div
          aria-hidden="true"
          className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          {socialProof.placeholderWidths.map((w, i) => (
            <div
              key={i}
              className="h-8 rounded-2xl bg-ink/[0.07]"
              style={{ width: w, maxWidth: "22vw" }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
