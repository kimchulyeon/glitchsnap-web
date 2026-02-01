'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button, Badge } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              NEW: Automated Case Synchronization
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Stop QAing in Excel.{' '}
              <br className="hidden sm:block" />
              Start Scaling with{' '}
              <span className="text-primary-600">GlitchSnap.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              The test case management platform built for modern QA teams.
              Organize, execute, and track results in a familiar interface
              without the spreadsheet headache.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" href="https://app.glitchsnap.studio/demo">
                Book Demo
              </Button>
              <Button size="lg" variant="outline" href="#demo">
                <Play className="mr-2 w-4 h-4" />
                Watch Video
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by <span className="font-medium">500+</span> QA teams worldwide
              </p>
            </div>
          </motion.div>

          {/* Right Content - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    app.glitchsnap.studio/project-a/test-cases
                  </span>
                </div>
              </div>
              {/* App content placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">San</p>
                      <p className="text-gray-500 dark:text-gray-400">Natural</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-600 rounded-lg p-6" />
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
