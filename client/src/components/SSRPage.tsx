import { ReactNode } from "react";
import { SEOHead } from "./SEOHead";
import { useLanguage } from "@/i18n/LanguageContext";

interface SSRPageProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

export function SSRPage({
  children,
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  structuredData,
  noindex = false,
}: SSRPageProps) {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalPath={canonicalPath}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      {noindex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      {children}
    </>
  );
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Azores4fun",
    "description": "Multi-service tourism company in Horta, Faial, Azores. Accommodation, tourist activities, events, tattoo services, property management and shop.",
    "url": "https://azores4fun.com",
    "telephone": "+351 934 993 770",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Conselheiro Medeiros, 27",
      "addressLocality": "Horta",
      "addressRegion": "Açores",
      "postalCode": "9900-144",
      "addressCountry": "PT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.5333,
      "longitude": -28.6333
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ilha do Faial, Açores"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/azores4fun",
      "https://www.instagram.com/azores4fun"
    ]
  };
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  provider: string = "Azores4fun"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "url": "https://azores4fun.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Ilha do Faial, Açores, Portugal"
    }
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  author: string = "Azores4fun"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": imageUrl,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Azores4fun",
      "url": "https://azores4fun.com"
    }
  };
}
