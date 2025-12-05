/**
 * Metadata utilities for SEO
 * Helps generate consistent metadata across pages
 */

import { Metadata } from "next";
import seoConfig from "@/config/seo";

interface PageMetadataProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  publishedDate?: Date;
  modifiedDate?: Date;
  keywords?: string[];
  type?: "website" | "article" | "profile";
}

/**
 * Generate metadata object for a page
 */
export function generateMetadata(
  props: PageMetadataProps
): Metadata {
  const {
    title,
    description = seoConfig.site.description,
    image = seoConfig.author.image,
    url = seoConfig.site.url,
    author = seoConfig.author.name,
    publishedDate,
    modifiedDate,
    keywords = seoConfig.keywords,
    type = "website",
  } = props;

  const fullTitle = `${title} | ${seoConfig.site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author, url: seoConfig.site.url }],
    creator: author,
    publisher: seoConfig.site.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type as any,
      locale: seoConfig.site.locale,
      url,
      siteName: seoConfig.site.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
      ...(publishedDate && {
        publishedTime: publishedDate.toISOString(),
      }),
      ...(modifiedDate && {
        modifiedTime: modifiedDate.toISOString(),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: seoConfig.social.twitter?.replace("https://twitter.com/", "@"),
    },
    robots: {
      index: true,
      follow: true,
      nosnippet: false,
    },
    viewport: {
      width: "device-width",
      initialScale: 1.0,
      maximumScale: 5.0,
      userScalable: true,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

/**
 * Generate JSON-LD schema for article
 */
export function generateArticleSchema(
  props: PageMetadataProps
) {
  const {
    title,
    description,
    image,
    url,
    author = seoConfig.author.name,
    publishedDate,
    modifiedDate,
  } = props;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || seoConfig.site.description,
    image: image || seoConfig.author.image,
    author: {
      "@type": "Person",
      name: author,
      url: seoConfig.site.url,
    },
    datePublished: publishedDate?.toISOString() || new Date().toISOString(),
    dateModified: modifiedDate?.toISOString() || new Date().toISOString(),
    url: url || seoConfig.site.url,
    publisher: {
      "@type": "Organization",
      name: seoConfig.site.name,
      logo: {
        "@type": "ImageObject",
        url: seoConfig.author.image,
      },
    },
  };
}

/**
 * Generate JSON-LD schema for local business
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: seoConfig.site.name,
    description: seoConfig.site.description,
    image: seoConfig.author.image,
    url: seoConfig.site.url,
    email: seoConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: seoConfig.author.location.city,
      addressCountry: seoConfig.author.location.countryCode,
    },
    sameAs: [
      seoConfig.social.linkedin,
      seoConfig.social.github,
      seoConfig.social.twitter,
    ].filter(Boolean),
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
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

export default {
  generateMetadata,
  generateArticleSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
};
