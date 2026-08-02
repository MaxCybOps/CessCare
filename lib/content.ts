/*
  Every string on the page, lifted verbatim from the Figma file (node 27:1069).
  Kept in one place so copy edits never require touching layout code.

  The only strings NOT from Figma are the FAQ answers — the design ships the
  accordions collapsed, so no answer copy exists. Those are marked below.
*/

export const nav = {
  links: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Cess Score", href: "#cess-score" },
    { label: "FAQ", href: "#faq" },
    { label: "About", href: "#about" },
  ],
  cta: "Get Early Access",
} as const;

export const hero = {
  eyebrow: "Redefining Preventive Care",
  headingBefore: "Know Your Health",
  headingAccent: "Before",
  headingAfter: "It Becomes a Problem.",
  body: "CessCare combines precision AI data with human-centric habits to help you navigate your well-being with clarity and intelligence.",
  primaryCta: "Start My Journey",
  secondaryCta: "See How It Works",
} as const;

export const socialProof = {
  label: "Built for people who believe prevention is the future",
  /* The design shows four grey placeholder pills, not real logos. */
  placeholderWidths: [128, 96, 160, 112],
} as const;

export const problem = {
  heading: "Most Health Problems Don't Happen Overnight",
  subheading:
    "The silent shifts in your data tell the real story of your future health.",
  cards: [
    {
      icon: "eye-off",
      tint: "rose",
      title: "Invisible Habits",
      body: "Small lifestyle choices that accumulate over years, often going unnoticed until they impact your quality of life.",
    },
    {
      icon: "chart",
      tint: "lav",
      title: "Daily Decisions",
      body: "Your hydration, sleep, and nutrition choices today dictate your biological age and resilience tomorrow.",
    },
    {
      icon: "history",
      tint: "amber",
      title: "Delayed Action",
      body: "Traditional medicine focuses on symptoms. CessCare focuses on the indicators that precede them by months.",
    },
  ],
} as const;

export const solution = {
  heading: "Meet Your Daily Health Companion",
  features: [
    {
      icon: "shield",
      title: "Cess Score",
      body: "A singular metric of your systemic health vitality.",
    },
    {
      icon: "insights",
      title: "AI Insights",
      body: "Contextual patterns extracted from your unique biometric data.",
    },
    {
      icon: "tracking",
      title: "Daily Tracking",
      body: "Seamless integration with your favorite wearables.",
    },
    {
      icon: "meal",
      title: "Meal Analysis",
      body: "Snap a photo to understand the systemic impact of your diet.",
    },
    {
      icon: "lifestyle",
      title: "Lifestyle Recs",
      body: "Personalized nudges for hydration, movement, and focus.",
    },
    {
      icon: "journal",
      title: "Symptom Journal",
      body: "Correlate how you feel with your physiological data.",
    },
  ],
} as const;

export const howItWorks = {
  heading: "Five Steps to Longevity",
  steps: [
    { n: 1, title: "Track", body: "Wearables sync data." },
    { n: 2, title: "Analyze", body: "AI finds correlations." },
    { n: 3, title: "Score", body: "Get your Cess Score." },
    { n: 4, title: "Recommend", body: "Actionable nudges." },
    { n: 5, title: "Improve", body: "Master your future." },
  ],
} as const;

export const cessScore = {
  heading: "The Cess Score",
  subheading:
    "A single, unified metric derived from thousands of data points across five critical health pillars.",
  score: 84,
  status: "Optimal Status",
  pillars: [
    { icon: "moon", label: "Sleep", weight: 22 },
    { icon: "utensils", label: "Nutrition", weight: 28 },
    { icon: "droplet", label: "Hydration", weight: 15 },
    { icon: "leaf", label: "Stress", weight: 18 },
    { icon: "walk", label: "Movement", weight: 17 },
  ],
} as const;

export const aiCoach = {
  heading: "Your Personal Health Oracle",
  subheading:
    "Not just data—conversational guidance that understands your context, your schedule, and your goals.",
  userMessage: "Hey Cess, I'm feeling a bit sluggish this morning. What's up?",
  coachMessage:
    "Morning! Your HRV was slightly lower last night, and you're 20% behind on hydration. Let's start with 500ml of water and a light 10min stretch before your first meeting.",
} as const;

export const lifestyle = {
  heading: "Comprehensive Lifestyle Intelligence",
  cards: [
    {
      icon: "moon",
      title: "Sleep",
      body: "Deep cycle analysis and rhythm optimization.",
    },
    {
      icon: "apple",
      title: "Nutrition",
      body: "Glycemic load monitoring and macro balance.",
    },
    {
      icon: "droplet",
      title: "Hydration",
      body: "Smart fluid tracking and electrolyte balance.",
    },
    {
      icon: "leaf",
      title: "Stress",
      body: "Cortisol monitoring via heart rate variability.",
    },
    {
      icon: "dumbbell",
      title: "Activity",
      body: "Movement quality vs quantity tracking.",
    },
    {
      icon: "brain",
      title: "Cognitive",
      body: "Focus windows and mental energy tracking.",
    },
    {
      icon: "sun",
      title: "Exposure",
      body: "Sunlight and blue-light exposure metrics.",
    },
    {
      icon: "stethoscope",
      title: "Vitals",
      body: "Resting heart rate and blood oxygenation.",
    },
  ],
} as const;

export const testimonials = {
  heading: "Trusted by Proactive Patients",
  items: [
    {
      quote:
        "CessCare changed how I view my mornings. Instead of reactive coffee, I now have a data-backed routine that has doubled my afternoon productivity.",
      name: "Sarah Jenkins",
      role: "Performance Coach",
    },
    {
      quote:
        "The meal analysis is incredible. It finally helped me identify which 'healthy' foods were actually causing my systemic inflammation. Precision at its best.",
      name: "David Chen",
      role: "Software Architect",
    },
    {
      quote:
        "Having a Cess Score gives me a peace of mind that no other app could. It feels like a quiet partner looking out for my long-term future health.",
      name: "Elena Rodriguez",
      role: "HR Executive",
    },
  ],
} as const;

export const faq = {
  heading: "Common Questions",
  /*
    Questions are from Figma. Answers are placeholders written to fill the
    component — they are NOT design copy and should be replaced with real,
    legally reviewed text before launch (especially the privacy one).
  */
  items: [
    {
      q: "Is my health data private and secure?",
      a: "Your data is encrypted in transit and at rest, and is never sold or shared with advertisers. You can export or permanently delete everything from your account at any time.",
    },
    {
      q: "Which wearables are supported?",
      a: "CessCare integrates with the major wearable platforms and reads from Apple Health and Google Health Connect, so most modern watches, rings, and trackers sync automatically.",
    },
    {
      q: "How often is my Cess Score updated?",
      a: "Your score recalculates continuously as new data arrives, with a consolidated daily reading each morning once your overnight recovery metrics have synced.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Your Future Health Starts Today.",
  subheading:
    "Join 15,000+ others who are taking control of their longevity. Secure your spot on the early access waitlist.",
  placeholder: "Enter your email",
  button: "Join the Waitlist",
  footnote: "No credit card required. Invite-only access launching Q4 2024.",
} as const;

export const footer = {
  blurb:
    "Precision health intelligence for the modern era. We bridge the gap between reactive treatment and proactive living.",
  columns: [
    {
      heading: "Product",
      links: ["Features", "Cess Score", "AI Labs", "How it Works"],
    },
    {
      heading: "Company",
      links: ["About", "Careers", "Press", "Contact"],
    },
    {
      heading: "Legal",
      links: ["Privacy Policy", "Terms of Service", "HIPAA Compliance"],
    },
  ],
  copyright:
    "© 2024 CessCare. Precision Health Intelligence. All rights reserved.",
} as const;
