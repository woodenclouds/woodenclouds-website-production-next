import type { Metadata } from "next";
import { site } from "@/data/content";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://woodenclouds.com";

export const SITE_NAME = site.name;

export const DEFAULT_DESCRIPTION =
  "Woodenclouds designs and builds digital products, technology solutions, branding, digital marketing, and dedicated teams from Kochi, India.";

export const DEFAULT_OG_IMAGE = "/hero/hero-lead.jpg";

export const SITE_KEYWORDS = [
  "Woodenclouds",
  "digital agency Kochi",
  "web development Kerala",
  "mobile app development",
  "custom software development",
  "digital marketing Kochi",
  "branding agency",
  "dedicated development team",
  "startup support India",
];

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

/** Build consistent title, description, canonical, Open Graph, and Twitter metadata. */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const absoluteImage = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;
  const brandedTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Designing your digital future`;

  return {
    // String titles use the root layout template (`%s | Woodenclouds`).
    // Home uses absolute so it does not become duplicated.
    title: title ?? { absolute: brandedTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [{ url: absoluteImage, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [absoluteImage],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-dark.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    email: site.email,
    telephone: site.phone,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1st floor, Door No - 27/165, Modisseril building, Nr. Pipeline Junction, Thrikkakara, Edappally",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682022",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.0261,
      longitude: 76.3125,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      site.social.linkedin,
      site.social.facebook,
      site.social.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      email: site.email,
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logo-dark.png`,
      },
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image
      ? input.image.startsWith("http")
        ? input.image
        : `${SITE_URL}${input.image}`
      : `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    datePublished: input.datePublished || undefined,
    dateModified: input.dateModified || input.datePublished || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${input.path}`,
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logo-dark.png`,
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewsJsonLd(
  items: {
    quote: string;
    name: string;
    role?: string;
    company?: string;
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    review: items.map((item) => ({
      "@type": "Review",
      reviewBody: item.quote,
      author: {
        "@type": "Person",
        name: item.name,
        jobTitle: item.role || undefined,
        worksFor: item.company
          ? { "@type": "Organization", name: item.company }
          : undefined,
      },
    })),
  };
}
