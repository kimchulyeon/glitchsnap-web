'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Video, Bug, ClipboardList } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''

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
  const pathname = usePathname()
  const isFeaturePage = pathname.startsWith('/features')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email,
          subject: `[GlitchSnap] 데모 요청 - ${email}`,
          from_name: 'GlitchSnap Landing',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
          {isFeaturePage ? (
            <div className="shrink-0 w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.features.cta.emailPlaceholder}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50"
                />
                <Button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? t.features.cta.sending : t.features.cta.requestDemo}
                </Button>
              </form>
              {status === 'success' && (
                <p className="mt-2 text-sm text-green-400">{t.features.cta.success}</p>
              )}
              {status === 'error' && (
                <p className="mt-2 text-sm text-red-400">{t.features.cta.error}</p>
              )}
            </div>
          ) : (
            <div className="flex gap-3 shrink-0">
              <Button href="/features">
                {t.features.cta.getStarted}
              </Button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  )
}
