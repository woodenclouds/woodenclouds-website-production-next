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
      "Websites, apps, and custom software built to ship clean and scale with the business.",
    image: "/services/technology.jpg",
    href: "/services/technology",
  },
  {
    title: "Startup & Business Support",
    description:
      "Research, planning, and operational support so early decisions stay clear and durable.",
    image: "/services/startup-business-support.jpg",
    href: "/services/business-support",
  },
  {
    title: "Branding & Digital Marketing",
    description:
      "Brand systems and campaigns that make the product easier to find, trust, and choose.",
    image: "/services/marketing.jpg",
    href: "/services/digital-marketing",
  },
];

export const servicesFaqs: Faq[] = [
  {
    question: "What technology work do you do?",
    answer:
      "We build websites, mobile apps, custom software, online shops, and cloud setups — matched to your business goals.",
  },
  {
    question: "Do you help with more than technology?",
    answer:
      "Yes. We also help with research, planning, numbers, and day-to-day support so startups and growing teams can move with confidence.",
  },
  {
    question: "What marketing services do you offer?",
    answer:
      "SEO, social media, ads, email, content, and reporting — so people can find you, trust you, and choose you.",
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

export const site = {
  name: "Woodenclouds",
  email: "hello@woodenclouds.com",
  phone: "+91 892 170 8606",
  phoneHref: "tel:+918921708606",
  whatsapp: "918921708606",
  careersEmail: "careers@woodenclouds.com",
  address:
    "1st floor, Door No - 27/165, Modisseril building, Nr. Pipeline Junction, Thrikkakara, Edappally, Kochi, Kerala, India - 682022",
  social: {
    linkedin: "https://www.linkedin.com/company/team-woodenclouds/",
    facebook: "https://www.facebook.com/teamwoodenclouds",
    instagram: "https://www.instagram.com/teamwoodenclouds/",
  },
};

export function whatsappHref(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
