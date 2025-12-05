/**
 * SEO Configuration
 * Centralized configuration for all SEO-related settings
 */

export const seoConfig = {
  // Domain configuration
  site: {
    name: "Zaki Maliki - Web Developer",
    description: "Professional Web Developer & Frontend Specialist",
    url: "https://yourportfolio.com", // ⚠️ UPDATE THIS
    locale: "en_US",
    language: "en",
  },

  // Personal information
  author: {
    name: "Zaki Maliki",
    email: "malikzakitop@gmail.com",
    title: "Web Developer & Frontend Specialist",
    bio: "Professional Web Developer & Frontend Specialist with expertise in React, Next.js, and full-stack development.",
    location: {
      city: "Yogyakarta",
      country: "Indonesia",
      countryCode: "ID",
    },
    image: "https://yourportfolio.com/avatar.png", // ⚠️ UPDATE THIS
  },

  // Social links
  social: {
    linkedin: "https://linkedin.com/in/zaki-maliki-b6a798168",
    github: "https://github.com/yourgithub", // ⚠️ UPDATE THIS
    twitter: "https://twitter.com/yourtwitterhandle", // Optional
  },

  // Keywords for SEO
  keywords: [
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "full-stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "web development",
    "frontend development",
    "web applications",
  ],

  // Navigation items for breadcrumb
  navigation: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Contact", path: "/#contact" },
  ],

  // Open Graph settings
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zaki Maliki - Web Developer",
  },

  // Twitter Card settings
  twitter: {
    card: "summary_large_image",
    creator: "@yourtwitterhandle", // Optional
  },

  // Skills for schema
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Full-Stack Development",
    "Web Development",
    "Tailwind CSS",
    "Node.js",
  ],
};

/**
 * Generate full URL for paths
 */
export const getFullUrl = (path: string = ""): string => {
  return `${seoConfig.site.url}${path}`;
};

/**
 * Generate meta description
 */
export const getMetaDescription = (
  description?: string
): string => {
  return (
    description ||
    seoConfig.site.description
  );
};

/**
 * Generate page title
 */
export const getPageTitle = (
  pageTitle: string,
  includeCompanyName: boolean = true
): string => {
  if (includeCompanyName) {
    return `${pageTitle} | ${seoConfig.site.name}`;
  }
  return pageTitle;
};

export default seoConfig;
