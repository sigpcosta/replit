export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Azores4fun",
  "url": "https://azores4fun.com",
  "logo": "https://azores4fun.com/logo.png",
  "description": "Multi-service tourism company in Horta, Faial, Azores offering accommodation, activities, events, tattoo studio, property management and retail shop",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Horta",
    "addressLocality": "Faial",
    "addressRegion": "Açores",
    "postalCode": "9900",
    "addressCountry": "PT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+351-934-993-770",
    "contactType": "customer service",
    "availableLanguage": ["Portuguese", "English"]
  },
  "sameAs": [
    "https://www.facebook.com/azores4fun",
    "https://www.instagram.com/azores4fun"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Azores4fun",
  "image": "https://azores4fun.com/images/og-home.jpg",
  "url": "https://azores4fun.com",
  "telephone": "+351-934-993-770",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Horta",
    "addressLocality": "Faial",
    "addressRegion": "Açores",
    "postalCode": "9900",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.5319,
    "longitude": -28.6267
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$"
};

export const tattooStudioSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "name": "Azores4fun Tattoo Studio - Catarina Gomes",
  "image": "https://azores4fun.com/images/principal pagina tatoo2_1763984346847.jpeg",
  "url": "https://azores4fun.com/tatuagem",
  "telephone": "+351-934-993-770",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Horta",
    "addressLocality": "Faial",
    "addressRegion": "Açores",
    "postalCode": "9900",
    "addressCountry": "PT"
  },
  "priceRange": "$$",
  "servesCuisine": null,
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Sterilized Equipment",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Professional Artist",
      "value": true
    }
  ]
};

export const catarinaGomesSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Catarina Gomes",
  "jobTitle": "Tattoo Artist & Body Piercer",
  "worksFor": {
    "@type": "Organization",
    "name": "Azores4fun"
  },
  "url": "https://catarinamachado00.wixsite.com/tattooartist",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Horta, Faial",
    "addressRegion": "Açores",
    "addressCountry": "PT"
  },
  "knowsAbout": ["Tattoo Art", "Body Piercing", "Fine Line Tattoos", "Custom Designs"]
};

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
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

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Azores4fun"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Faial, Azores, Portugal"
    },
    "url": url
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
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
