'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from './Navigation'
import { Button } from '@/components/ui'
import { siteConfig } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/app-icon.png"
              alt="GlitchSnap Logo"
              width={28}
              height={28}
              className="dark:invert"
            />
            <span className="font-semibold text-lg text-gray-900 dark:text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button href="https://app.glitchsnap.studio/signup">
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
