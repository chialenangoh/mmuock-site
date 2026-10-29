import type { Metadata } from 'next'
import { VISION } from '@/lib/site'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Mission & Vision' }

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader title="Our Vision/Mission" />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-pine-900">Our Mission</h2>
        <p className="mt-5 leading-[1.85] text-pine-950/75">
          To empower and enrich the lives of individuals both within and beyond the M&apos;muock Fosimondi community
          worldwide—including the Columbus, Ohio community—through educational development, scientific empowerment,
          community outreach, cultural enrichment, and spiritual guidance.
        </p>
        <p className="mt-4 leading-[1.85] text-pine-950/75">
          We are committed to organizing seminars, workshops, and webinars that foster networking, career
          development, and job placement opportunities. We promote innovation by encouraging community-driven
          scientific initiatives that address real-world challenges and contribute to the advancement of humanity.
        </p>
        <p className="mt-4 leading-[1.85] text-pine-950/75">
          Through charitable efforts such as community clean-ups, support for vulnerable populations, and the
          distribution of essential resources, we strive to create lasting impact. We also preserve and promote the
          rich cultural heritage of the M&apos;muock community through cultural events and engagement, while
          supporting individuals spiritually by connecting them with trusted leaders and places of worship.
        </p>
        <h2 className="mt-12 font-display text-3xl font-semibold text-pine-900">Our Vision</h2>
        <p className="mt-5 leading-[1.85] text-pine-950/75">{VISION}</p>
      </section>
      <DonateCTA />
    </>
  )
}
