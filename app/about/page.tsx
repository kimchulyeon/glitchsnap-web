'use client'

import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { CTA } from '@/components/sections'

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
              About GlitchSnap Studio
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 text-center">
              We&apos;re building the future of test case management for modern QA teams.
            </p>

            <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
              <h2>Our Mission</h2>
              <p>
                GlitchSnap Studio was founded with a simple mission: to free QA teams from
                the spreadsheet trap. We believe that quality assurance professionals
                deserve tools that are as modern and powerful as the software they test.
              </p>

              <h2>Our Story</h2>
              <p>
                We&apos;ve been in the trenches. We&apos;ve suffered through the v3_final_final.xlsx
                nightmare. We&apos;ve lost critical test data when someone accidentally deleted
                a row. We&apos;ve waited for colleagues to finish editing so we could make our
                changes.
              </p>
              <p>
                That&apos;s why we built GlitchSnap—a platform that combines the familiarity of
                spreadsheets with the power of modern collaboration and automation tools.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li>
                  <strong>Simplicity First:</strong> Complex problems don&apos;t require complex
                  solutions. We strive for elegant simplicity in everything we build.
                </li>
                <li>
                  <strong>Speed Matters:</strong> Your time is valuable. Our platform is
                  optimized for performance at every level.
                </li>
                <li>
                  <strong>Quality is Non-Negotiable:</strong> We practice what we preach.
                  Our product is rigorously tested to ensure reliability.
                </li>
                <li>
                  <strong>Customer Success:</strong> We succeed when you succeed. Our
                  support team is here to help you get the most out of GlitchSnap.
                </li>
              </ul>

              <h2>Join Us</h2>
              <p>
                We&apos;re always looking for talented individuals who are passionate about
                quality and want to help shape the future of software testing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  )
}
