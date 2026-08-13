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
  /*
    The design had four empty grey pills standing in for partner logos. No
    partners exist yet, so rather than invent logos these carry the launch
    markets from the go-to-market plan — true, and defensible pre-launch.
  */
  markets: ["Nigeria", "Ghana", "Kenya", "South Africa"],
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
      /*
        Was "Seamless integration with your favorite wearables" — but the V1
        PRD puts wearable integrations in V2 and lists manual entry as the MVP
        approach. Rewritten so the page doesn't promise what V1 can't do.
      */
      body: "Log sleep, hydration, mood and symptoms in seconds. No wearable required.",
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
    /* Step 1 was "Wearables sync data" — V1 is manual logging. See solution.tracking. */
    { n: 1, title: "Log", body: "A few taps a day." },
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
    "Not just data. Conversational guidance that understands your context, your schedule, and your goals.",
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

/*
  Replaces the design's "Trusted by Proactive Patients" block. That section
  carried three quotes attributed to named people who do not exist — the product
  is pre-launch with no customers, so those were fabricated endorsements and
  have been removed rather than reworded.

  The layout is kept; the content now comes from the competitive strategy
  report's market-gap analysis (Gaps #1, #2 and #3), which is defensible today.
*/
export const differentiators = {
  heading: "Most apps track. We interpret.",
  subheading:
    "The first generation of wellness apps helped you collect data. The second helped you track habits. This is the layer that makes sense of both.",
  items: [
    {
      icon: "insights",
      title: "Data with meaning",
      body: "Most apps hand you charts and leave you to guess. CessCare tells you what changed, why it matters, and what to do next.",
    },
    {
      icon: "shield",
      title: "One score, not seven apps",
      body: "Sleep, nutrition, hydration, stress, activity and symptoms in a single view, because your health doesn't happen in separate apps.",
    },
    {
      icon: "lifestyle",
      title: "Guidance that fits you",
      body: "Not “drink more water.” Recommendations built from your own logged habits and the patterns running between them.",
    },
  ],
} as const;

export const faq = {
  heading: "Common Questions",
  /*
    The three questions are from Figma; the fourth is added because the product
    documents repeat the "not a doctor" disclaimer more than any other single
    statement, which makes it the question most worth answering here.

    Answers are grounded in the V1 PRD and strategy report. Two still need your
    sign-off before launch:
      - the privacy answer states a commitment ("never sold") the docs don't
        define — confirm it matches your actual policy;
      - the wearables answer says V1 is manual-only, per the roadmap.
  */
  items: [
    {
      q: "Is my health data private and secure?",
      a: "Your logs belong to you. CessCare is a wellness companion, not a healthcare provider, and your data is never sold to advertisers or third parties. You can export everything or permanently delete your account at any time.",
    },
    {
      q: "Which wearables are supported?",
      a: "Version one runs on manual logging. You record sleep, hydration, meals, mood, stress and symptoms yourself, which keeps CessCare useful whether or not you own a wearable. Automatic wearable integrations are the next major release on our roadmap.",
    },
    {
      q: "How often is my Cess Score updated?",
      a: "Your score recalculates every time you log something, so it reflects the day as it actually unfolds rather than a fixed snapshot. Trends build as you keep logging.",
    },
    {
      q: "Is CessCare a medical service?",
      a: "No. CessCare is not a doctor, therapist, healthcare provider or diagnostic tool, and nothing it shows you is medical advice. It helps you understand your daily habits. For diagnosis or treatment, always speak to a qualified professional.",
    },
  ],
} as const;

export const finalCta = {
  heading: "Your Future Health Starts Today.",
  subheading:
    "Join 15,000+ others who are taking control of their longevity. Secure your spot on the early access waitlist.",
  placeholder: "Enter your email",
  button: "Join the Waitlist",
  footnote: "No credit card required. Invite-only access launching Q4 2026.",
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
    "© 2026 CessCare. Precision Health Intelligence. All rights reserved.",
} as const;
