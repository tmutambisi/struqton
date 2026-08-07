import heroImg from "@/assets/hero.jpg";

export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.struqtonstructural.com";
export const BRAND_NAME = "Struqton Structural";
export const SITE_DESCRIPTION =
  "Struqton Structural is a Zimbabwean building and civil engineering contractor delivering residential, commercial, industrial, mining, agricultural and energy infrastructure projects from concept through commissioning.";
export const DEFAULT_OG_IMAGE = heroImg;

const normalizedSiteUrl = SITE_URL.replace(/\/$/, "");

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (!pathOrUrl.startsWith("/")) pathOrUrl = `/${pathOrUrl}`;
  return `${normalizedSiteUrl}${pathOrUrl}`;
}

export function pageTitle(title: string) {
  return `${title} — ${BRAND_NAME}`;
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND_NAME,
  description: SITE_DESCRIPTION,
  url: normalizedSiteUrl,
  telephone: "+263774751861",
  email: "info@struqton.com",
  logo: absoluteUrl("/favicon.ico"),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 120-123, Longcheng Plaza, Mutley Bend, Belvedere",
    addressLocality: "Harare",
    addressRegion: "Harare",
    postalCode: "",
    addressCountry: "ZW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-17.8292",
    longitude: "31.0530",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/struqtonstructural/",
  ],
};
