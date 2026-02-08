import type { Metadata } from 'next'
import { Pricing, CTA } from '@/components/sections'
import { generatePageMetadata } from '@/lib/metadata'

export const dynamic = 'force-static'

export const metadata: Metadata = generatePageMetadata({
  title: 'Pricing',
  description:
    'Simple, transparent pricing for teams of all sizes. Start free, scale as you grow with GlitchSnap Studio.',
})

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <CTA />
    </>
  )
}
