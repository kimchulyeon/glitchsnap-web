import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui'
import { generatePageMetadata } from '@/lib/metadata'
import { CTA } from '@/components/sections'

export const dynamic = 'force-static'

// Sample blog post data - in production, this would come from MDX/CMS
const blogPosts: Record<
  string,
  {
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
    content: string
  }
> = {
  'getting-started-with-glitchsnap': {
    title: 'Getting Started with GlitchSnap Studio',
    excerpt:
      'Learn how to migrate your test cases from Excel to GlitchSnap in under 10 minutes.',
    date: '2024-01-15',
    category: 'Tutorial',
    readTime: '5 min read',
    content: `
      <h2>Introduction</h2>
      <p>Migrating from Excel to GlitchSnap Studio is easier than you think. In this guide, we'll walk you through the entire process step by step.</p>

      <h2>Step 1: Export Your Excel Data</h2>
      <p>First, open your existing Excel file and save it as a CSV. GlitchSnap supports both .xlsx and .csv formats, but CSV ensures the cleanest import.</p>

      <h2>Step 2: Create a New Project</h2>
      <p>Log into GlitchSnap and click "New Project". Give your project a name and description.</p>

      <h2>Step 3: Import Your Test Cases</h2>
      <p>Click the "Import" button and select your CSV file. GlitchSnap will automatically map your columns to test case fields.</p>

      <h2>Step 4: Review and Confirm</h2>
      <p>Review the imported data in the preview. Make any necessary adjustments to the column mappings, then click "Confirm Import".</p>

      <h2>Conclusion</h2>
      <p>That's it! Your test cases are now in GlitchSnap and ready for collaboration. Start inviting your team members to get the full benefit of real-time editing.</p>
    `,
  },
  'best-practices-test-case-management': {
    title: 'Best Practices for Test Case Management',
    excerpt:
      'Discover the strategies top QA teams use to organize and maintain their test suites.',
    date: '2024-01-10',
    category: 'Best Practices',
    readTime: '8 min read',
    content: `
      <h2>Why Test Case Organization Matters</h2>
      <p>Well-organized test cases are the foundation of efficient QA operations. When your team can quickly find and understand test cases, execution becomes faster and more reliable.</p>

      <h2>Use a Consistent Naming Convention</h2>
      <p>Establish a naming convention early and stick to it. We recommend: [Feature]_[Scenario]_[Expected Result]. For example: "Login_ValidCredentials_Success".</p>

      <h2>Group by Feature, Not by Type</h2>
      <p>Organize test cases by the feature they test rather than by test type (unit, integration, e2e). This makes it easier to ensure complete coverage for each feature.</p>

      <h2>Keep Test Cases Atomic</h2>
      <p>Each test case should test one thing and one thing only. This makes failures easier to diagnose and tests easier to maintain.</p>

      <h2>Regular Maintenance</h2>
      <p>Schedule regular test case reviews. Remove obsolete tests, update outdated ones, and identify gaps in coverage.</p>
    `,
  },
  'playwright-integration-guide': {
    title: 'Playwright Integration Guide',
    excerpt:
      'A comprehensive guide to generating and running Playwright tests from your GlitchSnap test cases.',
    date: '2024-01-05',
    category: 'Integration',
    readTime: '10 min read',
    content: `
      <h2>Overview</h2>
      <p>GlitchSnap's Playwright integration allows you to generate automated test scripts directly from your test cases with a single click.</p>

      <h2>Prerequisites</h2>
      <p>Before you begin, ensure you have Node.js 16+ installed and a Playwright project initialized.</p>

      <h2>Connecting Your Repository</h2>
      <p>In GlitchSnap, go to Settings > Integrations > Playwright. Enter your repository URL and configure the output directory for generated tests.</p>

      <h2>Generating Tests</h2>
      <p>Select the test cases you want to automate, then click "Generate Playwright Tests". GlitchSnap will create .spec.ts files based on your test case steps.</p>

      <h2>Running Tests</h2>
      <p>Use the standard Playwright CLI to run your generated tests: npx playwright test</p>

      <h2>Syncing Results</h2>
      <p>After test execution, results are automatically synced back to GlitchSnap, updating your test case status and providing detailed execution logs.</p>
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = blogPosts[params.slug]
  if (!post) {
    return generatePageMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    })
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
  })
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <section className="py-20 md:py-28">
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Post Not Found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog/"
            className="mt-6 inline-flex items-center text-primary-600 font-medium"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <article className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog/"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to blog
            </Link>

            <Badge variant="primary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-6 text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div
              className="mt-12 prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
