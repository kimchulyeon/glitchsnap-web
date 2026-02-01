import {
  Hero,
  PainPoints,
  Features,
  CTA,
} from '@/components/sections'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Features />
      <CTA />
    </>
  )
}
