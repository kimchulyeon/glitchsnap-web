'use client'

import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'
import { Button, Badge } from '@/components/ui'
import { useI18n } from '@/lib/i18n'

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-gray-950 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 py-16 md:py-24 cyber-grid">
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6 border border-primary-500/30">
              {t.hero.badge}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1]">
              {t.hero.title}{' '}
              <br className="hidden sm:block" />
              {t.hero.titleHighlight && (
                <>
                  <span className="text-gray-300">{t.hero.titleHighlight}</span>{' '}
                </>
              )}
              <span className="gradient-text glitch-text">{t.hero.titleBrand}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" href="https://app.glitchsnap.studio/download">
                <Download className="mr-2 w-4 h-4" />
                {t.nav.bookDemo}
              </Button>
              <Button size="lg" variant="outline" href="#demo">
                <Play className="mr-2 w-4 h-4" />
                {t.hero.watchVideo}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-3">
              {/* <div className="flex -space-x-2">
                {[
                  'from-primary-400 to-primary-600',
                  'from-accent-400 to-accent-600',
                  'from-primary-300 to-accent-500',
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-linear-to-br ${gradient} border-2 border-gray-900`}
                  />
                ))}
              </div> */}
              <p className="text-sm text-gray-500">
                {t.hero.trustedBy} <span className="font-medium text-gray-300">{t.hero.teamsWorldwide}</span>
              </p>
            </div>
          </motion.div>

          {/* Right Content - App Screenshot Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden neon-glow-cyan border border-primary-500/20 bg-gray-900">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-primary-400/60 font-mono">
                    GlitchSnap Studio v2.0
                  </span>
                </div>
              </div>
              {/* App content - simulated QA dashboard */}
              <div className="aspect-4/3 bg-linear-to-br from-gray-900 to-gray-950 p-6">
                <div className="space-y-4">
                  {/* Toolbar */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-md text-xs text-primary-400 font-mono">REC</div>
                    <div className="px-3 py-1.5 bg-accent-500/20 border border-accent-500/30 rounded-md text-xs text-accent-400 font-mono">BUG</div>
                    <div className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-md text-xs text-gray-400 font-mono">TC</div>
                    <div className="flex-1" />
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-neon" />
                    <span className="text-xs text-green-400 font-mono">Recording</span>
                  </div>
                  {/* Bug capture preview */}
                  <div className="bg-gray-950/80 rounded-lg p-4 border border-gray-800 text-xs leading-relaxed space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-accent-400 font-mono font-medium">Bug #142</span>
                      <span className="text-yellow-400 font-mono">High</span>
                    </div>
                    <p className="text-gray-300">Login button unresponsive on Safari</p>
                    <div className="flex gap-3 text-gray-500 font-mono">
                      <span>macOS 14.2</span>
                      <span>Safari 17.1</span>
                      <span>1920×1080</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                      <span className="text-primary-400 font-mono">Session replay attached</span>
                    </div>
                  </div>
                  {/* Status bar */}
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="text-primary-400">Session: 2m 34s</span>
                    <span className="text-gray-600">|</span>
                    <span className="text-accent-400">3 bugs captured</span>
                    <span className="text-gray-600">|</span>
                    <span className="text-gray-500">24 TCs managed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
