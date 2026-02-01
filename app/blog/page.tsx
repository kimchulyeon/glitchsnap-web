'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui'

// Sample blog posts data - in production, this would come from MDX/CMS
const blogPosts = [
  {
    slug: 'getting-started-with-glitchsnap',
    title: 'Getting Started with GlitchSnap Studio',
    excerpt:
      'Learn how to migrate your test cases from Excel to GlitchSnap in under 10 minutes.',
    date: '2024-01-15',
    category: 'Tutorial',
    readTime: '5 min read',
  },
  {
    slug: 'best-practices-test-case-management',
    title: 'Best Practices for Test Case Management',
    excerpt:
      'Discover the strategies top QA teams use to organize and maintain their test suites.',
    date: '2024-01-10',
    category: 'Best Practices',
    readTime: '8 min read',
  },
  {
    slug: 'playwright-integration-guide',
    title: 'Playwright Integration Guide',
    excerpt:
      'A comprehensive guide to generating and running Playwright tests from your GlitchSnap test cases.',
    date: '2024-01-05',
    category: 'Integration',
    readTime: '10 min read',
  },
]

export default function BlogPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            QA Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Insights, tutorials, and best practices for modern QA teams.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="block bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="primary">{post.category}</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center text-primary-600 font-medium">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
