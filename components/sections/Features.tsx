'use client'

import { motion } from 'framer-motion'
import { Video, Bug, ClipboardList } from 'lucide-react'
import { Button } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

const icons = [Video, Bug, ClipboardList]
const gradients = [
  'from-primary-500/20 to-primary-500/5',
  'from-accent-500/20 to-accent-500/5',
  'from-primary-500/20 to-primary-500/5',
]
const iconColors = [
  'text-primary-400',
  'text-accent-400',
  'text-primary-400',
]
const borderColors = [
  'border-primary-500/20 hover:border-primary-500/40',
  'border-accent-500/20 hover:border-accent-500/40',
  'border-primary-500/20 hover:border-primary-500/40',
]

export function Features() {
  const { t } = useI18n()

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-900 dark:bg-gray-900 cyber-grid">
      {/* Ambient glow */}
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
            {t.features.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {t.features.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-linear-to-b ${gradients[index]} rounded-2xl border ${borderColors[index]} p-8 transition-all duration-300 backdrop-blur-sm`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center mb-5 border border-gray-700/50`}>
                  <Icon className={`w-6 h-6 ${iconColors[index]}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
          className="mt-12 bg-linear-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">
              {t.features.cta.title}
            </h3>
            <p className="mt-1 text-gray-400">
              {t.features.cta.description}
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button href="https://app.glitchsnap.studio/download">
              {t.features.cta.getStarted}
            </Button>
            <Button variant="outline" href="/demo/">
              {t.features.cta.requestDemo}
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
