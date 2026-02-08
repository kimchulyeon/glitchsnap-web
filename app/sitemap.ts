import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date()

  // Static pages
  const staticPages = [
    '',
    '/features/',
    '/pricing/',
    '/about/',
    '/blog/',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = [
    { slug: 'getting-started-with-glitchsnap', date: '2025-01-15' },
    { slug: 'bug-reporting-best-practices', date: '2025-01-10' },
    { slug: 'session-recording-for-qa-teams', date: '2025-01-05' },
  ].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
