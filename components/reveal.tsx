"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/*
  Scroll reveal via IntersectionObserver — no animation library, no scroll
  listener, and it disconnects once an element has appeared so nothing keeps
  running as the user scrolls a 6,000px page.

  Elements reveal once and stay revealed; re-animating on scroll-up is the kind
  of thing that reads as showy on a marketing page and annoying on a re-read.
*/
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger, in ms. Keep under ~250 or the page feels sluggish. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /*
      Reduced motion is handled purely in CSS (globals.css forces .reveal
      visible under the media query) rather than with a setState here — calling
      setState synchronously in an effect body triggers a cascading render.
    */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Start slightly before the element is fully on screen.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
