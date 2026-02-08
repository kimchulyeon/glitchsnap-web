'use client'

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/constants'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t, language, toggleLanguage } = useI18n()

  const footerLinks = {
    product: [
      { name: t.footer.links.features, href: '/features/' },
      { name: t.footer.links.pricing, href: '/pricing/' },
      { name: t.footer.links.integrations, href: '#' },
      { name: t.footer.links.changelog, href: '#' },
    ],
    resources: [
      { name: t.footer.links.documentation, href: '#' },
      { name: t.footer.links.apiReference, href: '#' },
      { name: t.footer.links.qaBlog, href: '/blog/' },
      { name: t.footer.links.community, href: '#' },
    ],
    company: [
      { name: t.footer.links.aboutUs, href: '/about/' },
      { name: t.footer.links.careers, href: '#' },
      { name: t.footer.links.contact, href: '#' },
      { name: t.footer.links.partners, href: '#' },
    ],
    legal: [
      { name: t.footer.links.privacyPolicy, href: '#' },
      { name: t.footer.links.termsOfService, href: '#' },
      { name: t.footer.links.security, href: '#' },
      { name: t.footer.links.cookieSettings, href: '#' },
    ],
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4 font-mono">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4 font-mono">
              {t.footer.resources}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4 font-mono">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4 font-mono">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/app-icon.png"
              alt="GlitchSnap Logo"
              width={20}
              height={20}
              className="dark:invert"
            />
            <span className="font-medium text-white">
              {siteConfig.name}
            </span>
            <span className="text-gray-700 mx-2">|</span>
            <span className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            {/* Language selector */}
            <button
              onClick={toggleLanguage}
              className="hover:text-primary-400 transition-colors text-sm font-medium"
              aria-label={language === 'en' ? 'Switch to Korean' : 'Switch to English'}
            >
              {language === 'en' ? '한국어' : 'EN'}
            </button>
            {/* GitHub */}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
