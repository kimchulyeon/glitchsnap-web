import type { Metadata } from 'next'
import { Features, CTA } from '@/components/sections'
import { generatePageMetadata } from '@/lib/metadata'

export const dynamic = 'force-static'

export const metadata: Metadata = generatePageMetadata({
  title: 'Features',
  description:
    'Discover powerful features for modern QA teams. Session recording, bug capture, spreadsheet-style TC editing, and real-time collaboration.',
})

export default function FeaturesPage() {
  return (
    <>
      <Features />
      <CTA />
    </>
  )
}
