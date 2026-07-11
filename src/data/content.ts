export type Faq = { question: string; answer: string };

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const homeServiceCards: ServiceCard[] = [
  {
    title: "Technology Services",
    description:
      "Discover bespoke technology solutions with Woodenclouds, specializing in website development, mobile apps, and custom software to fuel your business growth.",
    image: "/services/technology.jpg",
    href: "/services/technology",
  },
  {
    title: "Startup & Business Support",
    description:
      "From startup essentials to ongoing support, Woodenclouds is your dedicated partner for navigating challenges and achieving sustained success.",
    image: "/services/startup-business-support.jpg",
    href: "/services/business-support",
  },
  {
    title: "Branding & Digital Marketing",
    description:
      "Elevate your brand effortlessly with Woodenclouds seamless branding and digital marketing solutions. Drive visibility, engagement, and results.",
    image: "/services/marketing.jpg",
    href: "/services/digital-marketing",
  },
];

export const servicesFaqs: Faq[] = [
  {
    question: "What types of services does Woodenclouds offer for technology solutions?",
    answer:
      "Woodenclouds offers website development, mobile app development, custom software, e-commerce platforms, cloud solutions, and more — tailored to your business goals.",
  },
  {
    question:
      "How does Woodenclouds support startups and businesses beyond technology solutions?",
    answer:
      "We provide consulting, research, planning, financial analysis, and operational support to help startups and growing businesses move with clarity.",
  },
  {
    question:
      "What digital marketing services does Woodenclouds provide to elevate brands?",
    answer:
      "Our digital marketing services include SEO, social media management, PPC, email marketing, content creation, and analytics-driven campaigns.",
  },
];

export const technologyServices: ServiceCard[] = [
  {
    title: "Website Development",
    description:
      "Transform your online presence with stunning brochure sites or powerful e-commerce experiences.",
    image: "/services/technology/website.png",
    href: "/services/technology/website-development",
  },
  {
    title: "Web Application Development",
    description:
      "Build CRM tools, project management platforms, and custom web applications that scale.",
    image: "/services/technology/web-application.png",
    href: "/services/technology/web-application-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that users love.",
    image: "/services/technology/mobile-app.png",
    href: "/services/technology/mobile-app-development",
  },
  {
    title: "Custom Software Development",
    description:
      "ERP, CRM, and bespoke software systems designed around your operations.",
    image: "/services/technology/software.png",
    href: "/services/technology/custom-software-development",
  },
  {
    title: "E-commerce Development",
    description:
      "Seamless, secure commerce platforms built for conversion and growth.",
    image: "/services/technology/ecommerce.png",
    href: "/services/technology/ecommerce-development",
  },
  {
    title: "Extension Development",
    description:
      "Browser extensions and plugins that extend workflows and improve UX.",
    image: "/services/technology/extension.png",
    href: "/services/technology/extension-development",
  },
];

export const processSteps = [
  "Requirement Analysis",
  "Structuring",
  "Designing",
  "Development",
  "Deployment",
  "Support & Maintenance",
];

export type TechPage = {
  slug: string;
  title: string;
  description: string;
  logos: { src: string; alt: string }[];
  faqs: Faq[];
  platforms?: { title: string; description: string; image: string }[];
};

export const techPages: TechPage[] = [
  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Looking for professional website development services in Kerala, India? We craft stunning and responsive websites — from brochure sites to complex e-commerce — designed to drive traffic and conversions.",
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
    description:
      "We build custom, user-friendly, and secure web applications for startups and established businesses — with transparent collaboration at every step.",
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
    description:
      "Bespoke mobile apps that streamline processes, deepen engagement, and bring new products to market on iOS and Android.",
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
    description:
      "Bespoke software to automate operations, streamline workflows, and unlock innovation across your organization.",
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
    title: "Ecommerce",
    description:
      "Immersive storefronts with refined UI/UX, resilient backends, and the integrations your commerce team needs.",
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
    description:
      "Chrome, Firefox, and Edge extensions that streamline workflows and improve everyday digital experiences.",
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

export const digitalMarketingServices: ServiceCard[] = [
  {
    title: "Brand Identity Development",
    description: "Craft a distinctive brand system that feels consistent across every touchpoint.",
    image: "/backgrounds/1.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "Digital Marketing Campaigns",
    description: "Performance campaigns that connect the right message to the right audience.",
    image: "/backgrounds/1.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "Social Media Management",
    description: "Always-on social presence with content, community, and growth in mind.",
    image: "/backgrounds/1.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "Content Creation",
    description: "Stories, visuals, and copy that make your brand memorable.",
    image: "/backgrounds/1.jpg",
    href: "/services/digital-marketing",
  },
  {
    title: "SEO Optimization",
    description: "Technical and content SEO that helps the right people find you.",
    image: "/backgrounds/1.jpg",
    href: "/services/digital-marketing",
  },
];

export const partnerPrograms = [
  {
    id: "outsourcing",
    title: "Outsourcing Partnership",
    tagline: "Delivery capacity you can trust",
    description:
      "Outsource projects to Woodenclouds and get dedicated expertise across software and digital marketing. Focus on your core work while we deliver on time with quality you can stand behind.",
    highlights: ["Dedicated squads", "On-time delivery", "Tech & marketing"],
    image: "/team/team-work.jpg",
  },
  {
    id: "affiliate",
    title: "Affiliate Partnership",
    tagline: "Earn from every successful referral",
    description:
      "Refer clients to Woodenclouds and earn rewards for every successful conversion. A simple way for individuals and businesses to monetize their network.",
    highlights: ["Simple referrals", "Reward on conversion", "Partner support"],
    image: "/hero/hero-collab.jpg",
  },
  {
    id: "business",
    title: "Business Partnerships",
    tagline: "Alliances that open new markets",
    description:
      "Explore joint ventures, co-marketing, and strategic alliances that expand reach for both sides. Leverage our expertise to unlock new markets and stay ahead.",
    highlights: ["Co-marketing", "Joint ventures", "Shared growth"],
    image: "/about/about-img3.jpg",
  },
];

export const partnerReasons = [
  {
    title: "Shared standards",
    body: "We treat partner work with the same craft, communication, and accountability as our direct clients.",
  },
  {
    title: "Clear economics",
    body: "Transparent scopes, timelines, and referral terms — so collaboration stays simple as it scales.",
  },
  {
    title: "Long-term fit",
    body: "From one project to ongoing alliances, we build partnerships meant to compound over time.",
  },
];

export const quoteSubjects = [
  "Web Development",
  "Mobile App Development",
  "Ecommerce Development",
  "Custom Software Development",
  "Digital Marketing",
  "Social Media Management",
  "SEO",
  "Video Production",
  "Other",
];

export const quoteBudgets = [
  "Below 1 Lakh",
  "Between 1 Lakh - 5 Lakh",
  "Between 5 Lakh - 10 Lakh",
  "Above 10 Lakh",
];

export const site = {
  name: "Woodenclouds",
  email: "hello@woodenclouds.com",
  phone: "+91 892 170 8606",
  phoneHref: "tel:+918921708606",
  careersEmail: "careers@woodenclouds.com",
  address:
    "1st floor, Door No - 27/165, Modisseril building, Nr. Pipeline Junction, Thrikkakara, Edappally, Kochi, Kerala, India - 682022",
  social: {
    linkedin: "https://www.linkedin.com/company/team-woodenclouds/",
    facebook: "https://www.facebook.com/teamwoodenclouds",
    instagram: "https://www.instagram.com/teamwoodenclouds/",
  },
};
