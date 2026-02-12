'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

export function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t } = useI18n()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '06d21eda-4cfe-407c-a85c-ba73b2c24845',
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
    <section className="py-20 md:py-28 bg-gray-950 dark:bg-gray-950">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 border border-primary-500/20 px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400">{t.cta.description}</p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.cta.placeholder}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50"
              />
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary-500 text-white hover:bg-primary-600 px-6"
              >
                {status === 'loading' ? t.cta.requestDemo + '...' : t.cta.requestDemo}
              </Button>
            </form>

            {status === 'success' && (
              <p className="mt-3 text-sm text-green-400">데모 요청이 접수되었습니다!</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">전송에 실패했습니다. 다시 시도해주세요.</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
