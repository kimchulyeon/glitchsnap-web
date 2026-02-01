'use client'

import { motion } from 'framer-motion'
import { Upload, FolderKanban, Rocket } from 'lucide-react'
import { howItWorks } from '@/lib/constants'

const stepIcons = [Upload, FolderKanban, Rocket]

export function HowItWorks() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get Started in Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No complex setup. Import your existing test cases and start
            improving your QA workflow immediately.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {howItWorks.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-primary-600/25">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="absolute -top-2 -right-2 md:right-auto md:left-1/2 md:translate-x-4 w-8 h-8 rounded-full bg-background border-2 border-primary-600 flex items-center justify-center text-sm font-bold text-primary-600">
                    {step.step}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
