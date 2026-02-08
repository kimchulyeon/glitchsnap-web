import type { Metadata } from 'next'
import { siteConfig } from './constants'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: PageSEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [{ url: image }],
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer support',
    },
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: siteConfig.description,
    url: siteConfig.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier available',
    },
  }
}

export function generateBlogPostSchema({
  title,
  description,
  publishedAt,
  author,
  image,
  slug,
}: {
  title: string
  description: string
  publishedAt: string
  author: string
  image?: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image || siteConfig.ogImage,
    datePublished: publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}/`,
    },
  }
}
