import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    '',
    '/features/',
    '/pricing/',
    '/about/',
    '/blog/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2024-01-15'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    'getting-started-with-glitchsnap',
    'best-practices-test-case-management',
    'playwright-integration-guide',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date('2024-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
