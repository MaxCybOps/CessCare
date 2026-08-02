"use client";

import { useState } from "react";
import { finalCta } from "@/lib/content";
import { Container } from "../ui";

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    /*
      No waitlist backend exists yet. The field validates and the form confirms
      locally; wire the POST here when the endpoint is ready.
    */
    setStatus("done");
  }

  return (
    <section id="waitlist" className="section-y bg-surface-off">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-display">{finalCta.heading}</h2>
          <p className="max-w-2xl text-base text-body">{finalCta.subheading}</p>

          {status === "done" ? (
            <p
              role="status"
              className="rounded-full bg-brand/10 px-6 py-4 text-base text-brand"
            >
              You&rsquo;re on the list — we&rsquo;ll be in touch at {email}.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex w-full max-w-xl flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={finalCta.placeholder}
                className="min-w-0 grow rounded-full border border-line bg-white px-6 py-4 text-base text-ink placeholder:text-body/60 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand px-8 py-4 text-base text-white shadow-[0_8px_24px_-8px_rgba(0,107,44,0.5)] transition-colors hover:bg-brand-bright"
              >
                {finalCta.button}
              </button>
            </form>
          )}

          <p className="text-eyebrow text-body">{finalCta.footnote}</p>
        </div>
      </Container>
    </section>
  );
}
