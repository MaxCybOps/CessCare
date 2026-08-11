import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function SectionHeading({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2 id={id} className={`text-h2 ${className}`}>
      {children}
    </h2>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "onDark";
  children: ReactNode;
} & ComponentProps<typeof Link>;

/* Pill buttons: 48px radius in the design, 58px tall on the hero. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base transition-colors duration-200 whitespace-nowrap";
  const variants = {
    primary:
      "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(0,107,44,0.5)] hover:bg-brand-bright",
    secondary:
      "border border-line bg-white text-ink hover:border-brand hover:text-brand",
    onDark: "bg-white text-brand hover:bg-surface-mint",
  } as const;

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 sm:gap-3 ${className}`}
      aria-label="CessCare home"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={size}
        height={size}
        className="size-8 shrink-0 rounded-lg sm:size-10"
        priority
      />
      {/* truncate rather than push the row wider than the viewport */}
      <span
        className="truncate font-display text-xl font-bold text-ink sm:text-2xl"
        style={{ letterSpacing: "-0.01em" }}
      >
        Cess<span className="text-brand">Care</span>
      </span>
    </Link>
  );
}
