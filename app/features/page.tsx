import type { Metadata } from 'next'
import { Features, CTA } from '@/components/sections'
import { generatePageMetadata } from '@/lib/metadata'

export const dynamic = 'force-static'

export const metadata: Metadata = generatePageMetadata({
  title: 'Features',
  description:
    'Discover powerful features for modern QA teams. Spreadsheet-style editing, browser test recorder, templates, and real-time collaboration.',
})

export default function FeaturesPage() {
  return (
    <>
      <Features />
      <CTA />
    </>
  )
}
