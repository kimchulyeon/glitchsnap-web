'use client'

import { motion } from 'framer-motion'
import { Table, Play, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

const icons = [Table, Play, FileText, Users]

export function Features() {
  const { t } = useI18n()

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            {t.features.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t.features.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t.features.cta.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {t.features.cta.description}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button href="https://app.glitchsnap.studio/signup">
              {t.features.cta.getStarted}
            </Button>
            <Button variant="outline" href="/demo/">
              {t.features.cta.requestDemo}
            </Button>
          </div>
        </motion.div>

        {/* Bottom Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12"
        >
          {/* Placeholder for screenshot */}
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                Digiwardwards
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Disribution channels two cell-prioritizer
              </div>
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-24 h-16 bg-gray-200 dark:bg-gray-600 rounded mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Image placeholder</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Solit-Oases
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.features.excellence.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              {t.features.excellence.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
