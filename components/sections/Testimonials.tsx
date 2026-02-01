'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials, companyLogos } from '@/lib/constants'

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by QA Leaders worldwide
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-primary-500" />
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companyLogos.map((company) => (
              <span
                key={company}
                className={`text-lg font-semibold tracking-wide ${
                  company === 'GlobalDev'
                    ? 'italic'
                    : ''
                } text-gray-400 dark:text-gray-500`}
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
