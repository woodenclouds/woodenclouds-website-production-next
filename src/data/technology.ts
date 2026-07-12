export type TechFaq = { question: string; answer: string };

export type TechDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  logos: { src: string; alt: string }[];
  platforms?: { title: string; description: string; image: string }[];
  faqs: TechFaq[];
};

export const technologyHero = {
  brand: "Woodenclouds",
  eyebrow: "Technology",
  title: "Build products",
  titleAccent: "people rely on.",
  description:
    "Websites, apps, platforms, and commerce — engineered for clarity, performance, and the next release.",
  image: "/services/technology.jpg",
};

export const technologyCapabilities = [
  {
    title: "Website Development",
    tagline: "Presence that converts",
    description:
      "Brochure sites and marketing experiences built for speed, clarity, and the moments that turn visitors into customers.",
    image: "/patterns/tech/tech-pattern-01.png",
    href: "/services/technology/website-development",
  },
  {
    title: "Web Application Development",
    tagline: "Software shaped around work",
    description:
      "CRMs, dashboards, and custom web apps designed around how your teams actually operate — not generic templates.",
    image: "/patterns/tech/tech-pattern-02.png",
    href: "/services/technology/web-application-development",
  },
  {
    title: "Mobile App Development",
    tagline: "Apps people return to",
    description:
      "Native and cross-platform products for iOS and Android with calm interfaces, reliable performance, and lasting polish.",
    image: "/patterns/tech/tech-pattern-03.png",
    href: "/services/technology/mobile-app-development",
  },
  {
    title: "Custom Software Development",
    tagline: "Systems that fit your ops",
    description:
      "ERP, CRM, and bespoke platforms built around your workflows — secure, integrable, and ready to evolve.",
    image: "/patterns/tech/tech-pattern-04.png",
    href: "/services/technology/custom-software-development",
  },
  {
    title: "E-commerce Development",
    tagline: "Commerce built to grow",
    description:
      "Storefronts and commerce backends tuned for conversion, multi-channel selling, and long-term scale.",
    image: "/patterns/tech/tech-pattern-05.png",
    href: "/services/technology/ecommerce-development",
  },
  {
    title: "Extension Development",
    tagline: "Tools that extend the workflow",
    description:
      "Browser extensions and plugins that remove friction, connect systems, and keep teams in flow.",
    image: "/patterns/tech/tech-pattern-06.png",
    href: "/services/technology/extension-development",
  },
];

export const technologyProcess = [
  {
    index: "01",
    title: "Requirement analysis",
    body: "We map goals, constraints, and success metrics so the build starts from clarity — not assumptions.",
  },
  {
    index: "02",
    title: "Structuring",
    body: "Architecture, information design, and delivery plan come first — so scope stays honest and shippable.",
  },
  {
    index: "03",
    title: "Designing",
    body: "Interfaces and flows shaped for real users: calm hierarchy, clear actions, and conversion-minded craft.",
  },
  {
    index: "04",
    title: "Development",
    body: "Clean, maintainable engineering with visible progress — short cycles, shared demos, no black boxes.",
  },
  {
    index: "05",
    title: "Deployment",
    body: "Launch with confidence: environments, monitoring, and a go-live plan that protects the experience.",
  },
  {
    index: "06",
    title: "Support & maintenance",
    body: "After ship, we stay close — updates, performance, and iteration as your product and market evolve.",
  },
];

export const technologyStandards = [
  {
    title: "Outcome ownership",
    body: "One team from brief to launch — fewer handoffs, clearer accountability, stronger results.",
  },
  {
    title: "Performance by default",
    body: "Speed, accessibility, and reliability are design constraints — not afterthoughts.",
  },
  {
    title: "Secure foundations",
    body: "Careful integrations, sensible defaults, and practices aligned with how modern products ship.",
  },
  {
    title: "Built to iterate",
    body: "Architecture and process that leave room to learn, adapt, and keep shipping after v1.",
  },
];

export const techPages: TechDetail[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Sites built to convert and endure",
    description:
      "From brochure presence to conversion-led marketing sites — responsive, fast, and shaped around the journeys that grow your business.",
    image: "/patterns/tech/tech-pattern-01.png",
    highlights: [
      "Responsive, conversion-led UX",
      "Performance and SEO foundations",
      "CMS-ready content models",
      "Analytics and launch support",
    ],
    logos: [
      { src: "/services/technology/website/html-css-js.png", alt: "HTML CSS JS" },
      { src: "/services/technology/website/reactjs.png", alt: "React" },
      { src: "/services/technology/website/nextjs.png", alt: "Next.js" },
      { src: "/services/technology/website/python.png", alt: "Python" },
      { src: "/services/technology/website/php.png", alt: "PHP" },
      { src: "/services/technology/website/postgresql.png", alt: "PostgreSQL" },
      { src: "/services/technology/website/mysql.png", alt: "MySQL" },
    ],
    faqs: [
      {
        question: "How long does it take to develop a website?",
        answer:
          "Timelines vary based on scope and complexity. We tailor the plan to your goals while keeping quality as the priority.",
      },
      {
        question: "What platforms and technologies do you use?",
        answer:
          "We work with HTML, CSS, JavaScript, React, Next.js, Python, PHP, PostgreSQL, and MySQL — choosing the right stack for each project.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes. We offer ongoing support including hosting guidance, security updates, and continuous improvements.",
      },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "Software shaped around how you work",
    description:
      "Custom web applications for startups and established teams — secure, usable, and built with transparent collaboration at every step.",
    image: "/patterns/tech/tech-pattern-02.png",
    highlights: [
      "Role-based product flows",
      "API-first architecture",
      "Secure auth and permissions",
      "Iterative delivery with demos",
    ],
    logos: [
      { src: "/services/technology/website/html-css-js.png", alt: "HTML CSS JS" },
      { src: "/services/technology/website/reactjs.png", alt: "React" },
      { src: "/services/technology/website/nextjs.png", alt: "Next.js" },
      { src: "/services/technology/website/python.png", alt: "Python" },
      { src: "/services/technology/website/php.png", alt: "PHP" },
      { src: "/services/technology/website/postgresql.png", alt: "PostgreSQL" },
      { src: "/services/technology/website/mysql.png", alt: "MySQL" },
    ],
    faqs: [
      {
        question: "How long does web application development take?",
        answer:
          "It depends on features, integrations, and complexity. We share a clear roadmap and milestones before development begins.",
      },
      {
        question: "Which technologies do you use for web apps?",
        answer:
          "Common stacks include HTML/CSS/JS, React, Node.js, Django, PHP, PostgreSQL, and MySQL — selected to fit your product needs.",
      },
      {
        question: "Do you support the product after launch?",
        answer:
          "Yes. We provide maintenance, monitoring, and iterative feature development after go-live.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Apps people return to",
    description:
      "Bespoke mobile products that streamline processes, deepen engagement, and bring new ideas to market on iOS and Android.",
    image: "/patterns/tech/tech-pattern-03.png",
    highlights: [
      "iOS, Android, and cross-platform",
      "Shared design systems",
      "Store-ready release process",
      "Analytics and push foundations",
    ],
    logos: [
      { src: "/services/technology/app/react-native.png", alt: "React Native" },
      { src: "/services/technology/app/flutter.png", alt: "Flutter" },
      { src: "/services/technology/app/android.png", alt: "Android" },
      { src: "/services/technology/app/ios.png", alt: "iOS" },
    ],
    faqs: [
      {
        question: "Which platforms do you support?",
        answer:
          "We build for iOS, Android, and cross-platform with React Native and Flutter.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "Timelines depend on scope, platforms, and integrations. We define phases from discovery to store release.",
      },
      {
        question: "Do you support Flutter and React Native apps after launch?",
        answer:
          "Yes. We provide updates, store compliance support, and ongoing feature development.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Systems built around your operations",
    description:
      "Bespoke software to automate operations, streamline workflows, and unlock innovation across your organization.",
    image: "/patterns/tech/tech-pattern-04.png",
    highlights: [
      "Discovery-led requirements",
      "Integrations with existing tools",
      "Audit-friendly architecture",
      "Long-term maintainability",
    ],
    logos: [
      { src: "/services/technology/website/html-css-js.png", alt: "HTML CSS JS" },
      { src: "/services/technology/website/reactjs.png", alt: "React" },
      { src: "/services/technology/website/nextjs.png", alt: "Next.js" },
      { src: "/services/technology/website/python.png", alt: "Python" },
      { src: "/services/technology/website/php.png", alt: "PHP" },
      { src: "/services/technology/website/postgresql.png", alt: "PostgreSQL" },
      { src: "/services/technology/website/mysql.png", alt: "MySQL" },
      { src: "/services/technology/website/firebase.png", alt: "Firebase" },
    ],
    faqs: [
      {
        question: "Which industries do you serve?",
        answer:
          "We build custom software across industries — from operations and logistics to finance, healthcare, and education.",
      },
      {
        question: "How do you ensure the software fits our requirements?",
        answer:
          "We start with discovery workshops, document requirements, prototype key flows, and iterate with your stakeholders.",
      },
      {
        question: "Can you integrate with existing systems and third-party tools?",
        answer:
          "Yes. We design APIs and integrations that connect cleanly with your current stack and preferred vendors.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    tagline: "Commerce engineered for conversion",
    description:
      "Immersive storefronts with refined UX, resilient backends, and the integrations your commerce team needs to grow.",
    image: "/patterns/tech/tech-pattern-05.png",
    highlights: [
      "Conversion-focused storefronts",
      "Payments and inventory sync",
      "Headless-ready when needed",
      "Post-launch growth support",
    ],
    logos: [],
    platforms: [
      {
        title: "Magento",
        description: "Enterprise-ready commerce with deep customization.",
        image: "/services/magento.png",
      },
      {
        title: "WooCommerce",
        description: "Flexible WordPress commerce for growing brands.",
        image: "/services/woocommerce.png",
      },
      {
        title: "Shopify",
        description: "Fast-to-market storefronts with strong ecosystem support.",
        image: "/services/shopify.png",
      },
      {
        title: "Medusa",
        description: "Composable commerce for modern product teams.",
        image: "/services/medusa.png",
      },
    ],
    faqs: [
      {
        question: "What stands out about your ecommerce approach?",
        answer:
          "We combine conversion-focused design, reliable architecture, and platform expertise to ship stores that perform.",
      },
      {
        question: "Which platforms do you work with?",
        answer:
          "We work with Magento, WooCommerce, Shopify, Medusa, and fully custom builds when needed.",
      },
      {
        question: "What does a custom ecommerce project look like?",
        answer:
          "Typical phases include Research, Design, Development, and Launch — with analytics and iteration after go-live.",
      },
    ],
  },
  {
    slug: "extension-development",
    title: "Extension Development",
    tagline: "Small tools with outsized impact",
    description:
      "Chrome, Firefox, and Edge extensions that streamline workflows and improve everyday digital experiences.",
    image: "/patterns/tech/tech-pattern-06.png",
    highlights: [
      "Chrome, Firefox, and Edge",
      "Workflow automation",
      "Secure permission models",
      "Store packaging and updates",
    ],
    logos: [
      { src: "/services/technology/website/html.png", alt: "HTML" },
      { src: "/services/technology/website/css.png", alt: "CSS" },
      { src: "/services/technology/website/js.png", alt: "JavaScript" },
      { src: "/services/technology/website/json.png", alt: "JSON" },
    ],
    faqs: [
      {
        question: "Which browsers do you support?",
        answer:
          "We build for Chrome, Firefox, and Edge, with cross-browser compatibility as a core requirement.",
      },
      {
        question: "Can you customize an existing extension or build a new one?",
        answer:
          "Both. We can enhance existing extensions or design and ship new ones from scratch.",
      },
      {
        question: "How do you handle cross-browser compatibility?",
        answer:
          "We test across target browsers and adapt APIs and packaging to each store’s requirements.",
      },
    ],
  },
];

export function getTechPage(slug: string) {
  return techPages.find((p) => p.slug === slug);
}
