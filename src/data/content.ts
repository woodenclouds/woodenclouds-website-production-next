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
