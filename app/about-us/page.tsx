import type { Metadata } from 'next'
import { ACTIVITIES, MISSION, VISION } from '@/lib/site'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        intro="Building A Better M'muock Home and Abroad for a Sustainable Tomorrow"
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-pine-900">Our Story</h2>
            <p className="mt-5 leading-[1.85] text-pine-950/75">
              M&apos;muock Fosimondi Community Ohio is a vibrant, globally connected organization dedicated to
              empowering and enriching the lives of individuals both within and beyond the M&apos;muock Fosimondi
              community. With a strong presence in Columbus, Ohio, and deep roots in Cameroon, we serve communities
              locally and worldwide.
            </p>
            <p className="mt-4 leading-[1.85] text-pine-950/75">
              Founded on the principles of unity, service, and empowerment, our organization exists to create
              meaningful and lasting impact through initiatives that promote growth, opportunity, and holistic
              well-being.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Mmuock-Fosimondi-Community-Ohio-6.jpg"
            alt="Community members at a gathering"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-pine-50 p-8 ring-1 ring-pine-100">
            <h2 className="font-display text-2xl font-semibold text-pine-800">Our Mission</h2>
            <p className="mt-4 leading-[1.85] text-pine-950/75">{MISSION}</p>
          </article>
          <article className="rounded-2xl bg-pine-50 p-8 ring-1 ring-pine-100">
            <h2 className="font-display text-2xl font-semibold text-pine-800">Our Vision</h2>
            <p className="mt-4 leading-[1.85] text-pine-950/75">{VISION}</p>
          </article>
        </div>

        <div className="mt-14 max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-pine-900">Our Commitment</h2>
          <p className="mt-5 leading-[1.85] text-pine-950/75">
            At M&apos;muock Fosimondi Community Ohio, we are committed to empowering and enriching the lives of
            individuals both within and beyond the M&apos;muock Fosimondi community worldwide, including the Columbus,
            Ohio community. We strive to foster unity, growth, and opportunity through educational development,
            scientific empowerment, community outreach, cultural enrichment, and spiritual guidance.
          </p>
          <p className="mt-4 leading-[1.85] text-pine-950/75">
            We are dedicated to creating lasting impact by providing support, resources, and platforms that enable
            individuals to thrive, innovate, and contribute meaningfully to society. Through our programs and
            initiatives, we aim to strengthen communities, preserve our cultural heritage, and promote holistic
            well-being.
          </p>
          <p className="mt-4 leading-[1.85] text-pine-950/75">
            Join us in our mission to make a difference, build meaningful connections, and create a brighter future
            for communities locally and globally.
          </p>
        </div>

        <h2 className="mt-16 font-display text-3xl font-semibold text-pine-900">Our Activities</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-pine-900">{a.title}</h3>
                <p className="mt-3 leading-[1.75] text-pine-950/70">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateCTA />
    </>
  )
}
