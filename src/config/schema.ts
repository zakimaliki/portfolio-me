import { Metadata } from "next";

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zaki Maliki",
  url: "https://yourportfolio.com",
  sameAs: [
    "https://linkedin.com/in/zaki-maliki-b6a798168",
    "https://github.com/yourgithub", // Update this
  ],
  email: "malikzakitop@gmail.com",
  jobTitle: "Web Developer & Frontend Specialist",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "ID",
    },
  },
  image: "https://yourportfolio.com/avatar.png",
  description: "Professional Web Developer & Frontend Specialist with expertise in React, Next.js, and full-stack development.",
  knowsLanguage: ["en-US", "id-ID"],
  worksFor: {
    "@type": "Organization",
    name: "Freelance Web Developer",
  },
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Full-Stack Development",
    "Web Development",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zaki Maliki - Web Developer",
  url: "https://yourportfolio.com",
  logo: "https://yourportfolio.com/logo.png",
  description: "Professional Web Development Services - React, Next.js, and Full-Stack Solutions",
  contact: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "malikzakitop@gmail.com",
  },
  sameAs: [
    "https://linkedin.com/in/zaki-maliki-b6a798168",
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yourportfolio.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://yourportfolio.com/#projects",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://yourportfolio.com/#about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://yourportfolio.com/#contact",
    },
  ],
};
