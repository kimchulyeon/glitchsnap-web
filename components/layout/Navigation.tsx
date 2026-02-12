'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useI18n()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {/* {navigation.main.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive(item.href)
                ? 'text-primary-400 bg-primary-500/10'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {getNavName(item.name)}
          </Link>
        ))} */}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden p-2 rounded-lg text-gray-400 hover:bg-gray-800"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 md:hidden"
          >
            <nav className="container-narrow py-4 flex flex-col gap-1">
              {/* {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {getNavName(item.name)}
                </Link>
              ))} */}
              <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLanguage()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-4 py-3 text-center text-base font-medium rounded-lg border border-gray-700 text-gray-400"
                >
                  {language === 'en' ? '한국어로 보기' : 'View in English'}
                </button>
                <Link
                  href="https://app.glitchsnap.studio/signup"
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.bookDemo}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
