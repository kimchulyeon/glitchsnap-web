'use client'

import { motion } from 'framer-motion'
import { CTA } from '@/components/sections'
import { useI18n } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <>
      <section className="py-20 md:py-28 bg-gray-950">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              {t.about.title}
            </h1>
            <p className="mt-6 text-lg text-gray-400 text-center">
              {t.about.subtitle}
            </p>

            <div className="mt-16 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{t.about.mission.title}</h2>
                <p className="text-gray-400 leading-relaxed">{t.about.mission.content}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{t.about.story.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-4">{t.about.story.content1}</p>
                <p className="text-gray-400 leading-relaxed">{t.about.story.content2}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t.about.values.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {t.about.values.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-primary-400 mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">{t.about.join.title}</h2>
                <p className="text-gray-400 leading-relaxed">{t.about.join.content}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <CTA />
    </>
  )
}
