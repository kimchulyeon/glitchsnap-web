'use client'

import { motion } from 'framer-motion'
import { Monitor, FileWarning, FileSpreadsheet } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const icons = [Monitor, FileWarning, FileSpreadsheet]
const accents = [
  'border-primary-500/20 hover:border-primary-500/40',
  'border-accent-500/20 hover:border-accent-500/40',
  'border-primary-500/20 hover:border-primary-500/40',
]
const iconBgs = [
  'bg-primary-500/10 text-primary-400',
  'bg-accent-500/10 text-accent-400',
  'bg-primary-500/10 text-primary-400',
]

export function PainPoints() {
  const { t } = useI18n()

  return (
    <section className="py-20 md:py-28 bg-gray-950 dark:bg-gray-950">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3">
            {t.painPoints.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {t.painPoints.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
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
                className={`bg-gray-900/80 rounded-2xl border ${accents[index]} p-8 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${iconBgs[index]} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
