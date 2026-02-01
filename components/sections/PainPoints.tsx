'use client'

import { motion } from 'framer-motion'
import { History, FileWarning, Users } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const icons = [History, FileWarning, Users]

export function PainPoints() {
  const { t } = useI18n()

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
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            {t.painPoints.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.painPoints.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t.painPoints.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.painPoints.items.map((item, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
