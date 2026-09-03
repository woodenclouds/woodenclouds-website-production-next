export type WaiPillar = {
  id: string;
  title: string;
  price: string;
  unit?: string;
  label: string;
  description: string;
  features: string[];
  note?: string;
  accent: "violet" | "blue" | "cyan" | "amber";
};

export const waiProduct = {
  name: "WAI",
  brand: "Woodenclouds AI",
  fullName: "Woodenclouds AI — WAI",
  tagline: "Smarter Conversations. Better Business.",
  description:
    "An AI that answers calls in English and Malayalam, like a helpful teammate.",
  valueProp: "Your 24/7 AI employee for calls, sales, and customer support.",
  slogan: "Smart. Natural. Reliable.",
  image: "/solutions/wai-agent-hq.png",
  logo: "/solutions/wai-logo.png",
  demoHref: "/contact",
};

export const waiStrengths = [
  "Human-like conversations",
  "Powered by advanced AI",
  "Low latency (<500ms)",
  "100% Indian infrastructure",
  "English & Malayalam",
];

export const waiCapabilities = [
  { id: "01", title: "Inbound & outbound calls", body: "Answer and place calls around the clock with a consistent voice." },
  { id: "02", title: "Call recording & downloads", body: "Keep every conversation for training, QA, and compliance." },
  { id: "03", title: "Live transcripts", body: "See what was said in real time — useful for coaching and handoffs." },
  { id: "04", title: "Analytics dashboard", body: "Volume, outcomes, and trends in one place your team can act on." },
  { id: "05", title: "Knowledge base", body: "Ground answers in your products, policies, and FAQs." },
  { id: "06", title: "Human transfer", body: "Escalate to a person when the caller needs a specialist." },
  { id: "07", title: "English & Malayalam", body: "Speak the languages your customers already use." },
  { id: "08", title: "Secure cloud", body: "Hosted on Indian infrastructure with careful access defaults." },
];

export const waiReasons = [
  { title: "No prepaid packs", detail: "Pay only for the minutes and chat you actually use." },
  { title: "Lower rates at scale", detail: "Higher usage unlocks better per-minute pricing." },
  { title: "Scale anytime", detail: "From a hundred minutes to a hundred thousand." },
  { title: "No hidden costs", detail: "Setup, platform, and usage — priced in the open." },
];

export const waiPillars: WaiPillar[] = [
  {
    id: "setup",
    title: "AI Agent Setup",
    price: "₹15,000",
    unit: "starting from",
    label: "One-time",
    description: "Onboarding, prompts, knowledge, and go-live. Final cost depends on your requirements.",
    features: [
      "Agent configuration",
      "Prompt engineering",
      "Knowledge base setup",
      "CRM / API integration",
      "Phone number setup",
      "Testing & deployment",
    ],
    note: "Additional agent setup is charged extra per agent.",
    accent: "violet",
  },
  {
    id: "platform",
    title: "Platform + Number",
    price: "₹1,700",
    unit: "/ month",
    label: "Recurring",
    description: "WAI platform access with one dedicated Indian business number.",
    features: [
      "Dashboard & analytics",
      "Call recording",
      "Live transcripts",
      "AI updates",
      "Priority support",
      "1 local Indian number",
    ],
    note: "Additional numbers are charged extra per number / month.",
    accent: "blue",
  },
  {
    id: "chat",
    title: "AI Chat Assistant",
    price: "₹10,000",
    unit: "starting from",
    label: "One-time",
    description: "Website or app chat agent, configured around your brand and knowledge.",
    features: [
      "Chat agent setup",
      "Prompt engineering",
      "Knowledge base",
      "Site / app integration",
      "Multi-language",
      "Testing & deployment",
    ],
    note: "Monthly AI usage is pay as you go.",
    accent: "cyan",
  },
  {
    id: "usage",
    title: "AI Usage",
    price: "Pay as you go",
    label: "Usage",
    description: "Voice minutes and chat usage — billed only for what you consume.",
    features: [
      "Voice calling minutes",
      "Chat AI usage",
      "No lock-in",
      "No wasted packs",
      "Volume discounts",
      "Transparent billing",
    ],
    accent: "amber",
  },
];

export const waiCallTiers = [
  {
    range: "0 – 500 mins",
    rate: "₹3.50 / min",
    bestFor: "Low to moderate volume",
  },
  {
    range: "501 – 1,500 mins",
    rate: "₹3.25 / min",
    savings: "~7% off",
    bestFor: "Growing sales teams",
  },
  {
    range: "1,500+ mins",
    rate: "₹3.00 / min",
    savings: "~14% off",
    bestFor: "High-volume desks",
  },
];

export const waiCallNote =
  "Rates are per minute, billed per second (60 sec minimum). Prices exclude GST.";
