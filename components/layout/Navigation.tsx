'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useI18n()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Map navigation items to translated names
  const getNavName = (name: string) => {
    const navMap: Record<string, string> = {
      Features: t.nav.features,
      Pricing: t.nav.pricing,
      Resources: t.nav.resources,
    }
    return navMap[name] || name
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navigation.main.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive(item.href)
                ? 'text-primary-600 bg-primary-50 dark:bg-primary-950'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
            }`}
          >
            {getNavName(item.name)}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
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
            className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
          >
            <nav className="container-narrow py-4 flex flex-col gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-950'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                  }`}
                >
                  {getNavName(item.name)}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLanguage()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-4 py-3 text-center text-base font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {language === 'en' ? '한국어로 보기' : 'View in English'}
                </button>
                <Link
                  href="https://app.glitchsnap.studio/signup"
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
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
