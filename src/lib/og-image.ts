/**
 * Open Graph Image utilities
 * Generate dynamic OG images for social sharing
 */

import seoConfig from "@/config/seo";

/**
 * Generate OG image URL for a page
 * Used for social media sharing preview
 */
export function generateOgImageUrl(
  title: string,
  options?: {
    description?: string;
    template?: "default" | "article" | "profile";
    backgroundColor?: string;
    textColor?: string;
  }
): string {
  const {
    template = "default",
    backgroundColor = "1F2937",
    textColor = "FFFFFF",
  } = options || {};

  // Using Vercel OG Image Generation (if deployed on Vercel)
  // Otherwise, use a placeholder or custom solution
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(options?.description || "");

  // Example using Vercel OG Image generation
  const params = new URLSearchParams({
    title: encodedTitle,
    description: encodedDesc,
    template,
    backgroundColor,
    textColor,
  });

  return `${seoConfig.site.url}/api/og?${params.toString()}`;
}

/**
 * Generate social meta tags HTML
 */
export function generateSocialMetaTags(
  title: string,
  description: string,
  image?: string,
  url?: string
): string {
  const ogImage = image || seoConfig.author.image;
  const ogUrl = url || seoConfig.site.url;

  return `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="${seoConfig.site.locale}" />
    <meta property="og:site_name" content="${seoConfig.site.name}" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${ogUrl}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="${ogImage}" />
    ${seoConfig.social.twitter ? `<meta property="twitter:creator" content="${seoConfig.social.twitter.replace("https://twitter.com/", "@")}" />` : ""}

    <!-- LinkedIn -->
    <meta property="linkedin:title" content="${title}" />
    <meta property="linkedin:description" content="${description}" />
    <meta property="linkedin:image" content="${ogImage}" />

    <!-- WhatsApp -->
    <meta property="whatsapp:title" content="${title}" />
    <meta property="whatsapp:image" content="${ogImage}" />
  `;
}

/**
 * Generate JSON for social sharing
 */
export function generateSocialShareData(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    title,
    description,
    url,
    image: image || seoConfig.author.image,
    shareLinks: {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + url)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
  };
}

export default {
  generateOgImageUrl,
  generateSocialMetaTags,
  generateSocialShareData,
};
