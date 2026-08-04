import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const runtime = "nodejs";
/* Never cache a mutation. */
export const dynamic = "force-dynamic";

const MAX_EMAIL_LENGTH = 254; // RFC 5321 limit.
const RATE_LIMIT = { windowMs: 60_000, max: 5 };

/*
  In-memory throttle. Good enough to stop a bored person with a browser console,
  but it resets on deploy and is per-instance — if this ever runs on more than
  one serverless instance, move it to Redis or Postgres.
*/
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT.max;
}

/* Opportunistic cleanup so the map can't grow without bound. */
function pruneExpired() {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now > entry.resetAt) hits.delete(key);
  }
}

/*
  Deliberately permissive: one @, no spaces, a dot in the domain. Anything
  stricter rejects valid addresses. Real validation is the confirmation email.
*/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/* Hashed so we retain an abuse signal without storing raw IPs. */
function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${ip}:${process.env.IP_HASH_SALT ?? "cesscare"}`)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(req: Request) {
  pruneExpired();

  const ip = clientIp(req);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = (body as { email?: unknown })?.email;
  if (typeof raw !== "string") {
    return NextResponse.json(
      { error: "Please enter your email address." },
      { status: 400 },
    );
  }

  const email = raw.trim().toLowerCase();

  if (email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email address." },
      { status: 400 },
    );
  }

  /*
    Throttle only after the address parses. Validation is cheap and touches no
    database, so letting a user fix five typos costs us nothing — what needs
    protecting is the write below.
  */
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in a minute." },
      { status: 429 },
    );
  }

  const source = (body as { source?: unknown })?.source;

  try {
    /*
      Upsert rather than create so a repeat signup is a no-op instead of a
      unique-constraint error. The response is identical either way — we don't
      reveal whether an address is already on the list.
    */
    await getPrisma().waitlistSignup.upsert({
      where: { email },
      update: {},
      create: {
        email,
        source: typeof source === "string" ? source.slice(0, 64) : undefined,
        userAgent: req.headers.get("user-agent")?.slice(0, 512) ?? null,
        ipHash: ip === "unknown" ? null : hashIp(ip),
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[waitlist] signup failed", error);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again." },
      { status: 500 },
    );
  }
}
