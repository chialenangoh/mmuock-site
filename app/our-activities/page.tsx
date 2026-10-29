import type { Metadata } from 'next'
import { ACTIVITIES } from '@/lib/site'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Our Activities' }

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader title="Our Activities" />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="space-y-14">
          {ACTIVITIES.map((a, i) => (
            <article
              key={a.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.title}
                className={`aspect-[16/10] w-full rounded-2xl object-cover shadow-md ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                loading="lazy"
              />
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-display text-3xl font-semibold text-pine-900">{a.title}</h2>
                <p className="mt-4 text-lg leading-[1.8] text-pine-950/75">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateCTA />
    </>
  )
}
