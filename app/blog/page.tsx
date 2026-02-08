'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui'

const blogPosts = [
  {
    slug: 'getting-started-with-glitchsnap',
    title: 'Getting Started with GlitchSnap Studio',
    excerpt:
      'Install the desktop app, connect to your web application, and start recording your first Playwright test in under 5 minutes.',
    date: '2024-03-15',
    category: 'Tutorial',
    readTime: '5 min read',
  },
  {
    slug: 'bug-reporting-best-practices',
    title: 'Bug Reporting Best Practices with rrweb',
    excerpt:
      'How GlitchSnap uses rrweb to capture the last 3 minutes of user activity, creating bug reports that developers actually love.',
    date: '2024-03-10',
    category: 'Best Practices',
    readTime: '8 min read',
  },
  {
    slug: 'playwright-test-generation',
    title: 'Auto-Generating Playwright Tests from User Actions',
    excerpt:
      'Deep dive into how GlitchSnap converts browser interactions into production-ready Playwright test code with smart selectors.',
    date: '2024-03-05',
    category: 'Technical',
    readTime: '10 min read',
  },
]

export default function BlogPage() {
  return (
    <section className="py-20 md:py-28 bg-gray-950">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            QA Blog
          </h1>
          <p className="mt-4 text-lg text-gray-400">
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
                className="block bg-gray-900/80 rounded-2xl border border-gray-800 p-8 hover:border-primary-500/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="primary">{post.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center text-primary-400 font-medium">
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
