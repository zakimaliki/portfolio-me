/**
 * SEO Utilities
 * Common SEO helper functions
 */

/**
 * Truncate text to specific length
 * Useful for meta descriptions (max 160 chars)
 */
export function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

/**
 * Sanitize text for meta tags
 * Remove special characters and extra spaces
 */
export function sanitizeMetaText(text: string): string {
  return text
    .replace(/[^\w\s\-.,!?]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();
}

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Check if URL is internal
 */
export function isInternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return typeof window !== "undefined" && urlObj.hostname === window.location.hostname;
  } catch {
    return url.startsWith("/") || url.startsWith("#");
  }
}

/**
 * Generate readable URL
 */
export function generateReadableUrl(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Extract keywords from text
 */
export function extractKeywords(text: string, limit: number = 5): string[] {
  // Simple keyword extraction (can be improved with NLP)
  const words = text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 3);

  const frequency: Record<string, number> = {};
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([word]) => word);
}

/**
 * Generate reading time estimate
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate unique ID
 */
export function generateUniqueId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Format date for schema.org
 */
export function formatDateForSchema(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Get SEO score
 * Simple scoring system
 */
export function calculateSeoScore(data: {
  titleLength?: number;
  descriptionLength?: number;
  hasKeywords?: boolean;
  hasImages?: boolean;
  hasStructuredData?: boolean;
  hasCanonical?: boolean;
  loadTime?: number;
}): number {
  let score = 0;

  // Title (max 20 points)
  if (data.titleLength) {
    if (data.titleLength >= 30 && data.titleLength <= 60) {
      score += 20;
    } else if (data.titleLength >= 20 && data.titleLength <= 70) {
      score += 15;
    } else {
      score += 5;
    }
  }

  // Meta Description (max 20 points)
  if (data.descriptionLength) {
    if (data.descriptionLength >= 120 && data.descriptionLength <= 160) {
      score += 20;
    } else if (data.descriptionLength >= 80 && data.descriptionLength <= 180) {
      score += 15;
    } else {
      score += 5;
    }
  }

  // Keywords (10 points)
  if (data.hasKeywords) score += 10;

  // Images (10 points)
  if (data.hasImages) score += 10;

  // Structured Data (15 points)
  if (data.hasStructuredData) score += 15;

  // Canonical Tag (10 points)
  if (data.hasCanonical) score += 10;

  // Load Time (5 points)
  if (data.loadTime && data.loadTime < 3) score += 5;

  return Math.min(score, 100);
}

/**
 * Generate breadcrumb items
 */
export function generateBreadcrumbs(
  pathname: string
): Array<{ name: string; path: string }> {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ name: "Home", path: "/" }];

  let currentPath = "";
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ name, path: currentPath });
  });

  return breadcrumbs;
}

export default {
  truncateText,
  sanitizeMetaText,
  generateSlug,
  isInternalUrl,
  generateReadableUrl,
  extractKeywords,
  calculateReadingTime,
  validateEmail,
  generateUniqueId,
  formatDateForSchema,
  calculateSeoScore,
  generateBreadcrumbs,
};
