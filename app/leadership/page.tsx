import type { Metadata } from 'next'
import { LEADERSHIP } from '@/lib/site'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Leadership' }

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Our Leadership Team"
        intro="Our team is made up of men and women from diverse walks of life, with the common goal of building a better M'muock home and abroad for a sustainable tomorrow."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LEADERSHIP.map((person) => (
            <article
              key={person.name}
              className="overflow-hidden rounded-2xl bg-white text-center shadow-sm ring-1 ring-pine-100"
            >
              {person.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={person.photo}
                  alt={person.name}
                  className="aspect-square w-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                <div className="flex aspect-square w-full items-center justify-center bg-pine-100 font-display text-5xl font-semibold text-pine-600">
                  {person.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </div>
              )}
              <div className="p-5">
                <h2 className="font-display text-lg font-semibold leading-snug text-pine-900">{person.name}</h2>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-gold-600">{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DonateCTA />
    </>
  )
}
