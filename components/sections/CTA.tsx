'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload } from 'lucide-react'
import { Button } from '@/components/ui'

export function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission - redirect to signup with email
    window.location.href = `https://app.glitchsnap.studio/signup?email=${encodeURIComponent(email)}`
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to modernize your QA workflow?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join 500+ QA teams moving faster with GlitchSnap. No credit card
              required. Start your 14-day trial today.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                type="submit"
                className="bg-gray-900 text-white hover:bg-gray-800 px-6"
              >
                Get Started
              </Button>
            </form>

            {/* Import Excel link */}
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span className="text-sm">Or import from Excel</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
