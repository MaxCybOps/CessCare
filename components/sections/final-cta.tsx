"use client";

import { useState } from "react";
import { finalCta } from "@/lib/content";
import { Container } from "../ui";

type Status = "idle" | "submitting" | "done" | "error";

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing-cta" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setError("Couldn't reach the server. Check your connection and retry.");
      setStatus("error");
    }
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
              noValidate
              className="flex w-full max-w-xl flex-col gap-3"
            >
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={status === "submitting"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "waitlist-error" : undefined}
                  placeholder={finalCta.placeholder}
                  className="min-w-0 grow rounded-full border border-line bg-white px-6 py-4 text-base text-ink placeholder:text-body/60 focus:border-brand focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="shrink-0 rounded-full bg-brand px-8 py-4 text-base text-white shadow-[0_8px_24px_-8px_rgba(0,107,44,0.5)] transition-colors hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Joining…" : finalCta.button}
                </button>
              </div>

              {status === "error" && (
                <p
                  id="waitlist-error"
                  role="alert"
                  className="text-sm text-icon-rose"
                >
                  {error}
                </p>
              )}
            </form>
          )}

          <p className="text-eyebrow text-body">{finalCta.footnote}</p>
        </div>
      </Container>
    </section>
  );
}
