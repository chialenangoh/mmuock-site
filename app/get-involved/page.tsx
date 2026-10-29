import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Get Involved' }

const WAYS = [
  {
    title: 'Make a donation',
    text: 'Support our work by making a donation online on our website',
    cta: 'Donate Now',
    href: '/donate',
    image: '/images/Donation.jpg',
  },
  {
    title: 'Volunteer',
    text: 'Help us as a field personnel to help us accomplish our vision',
    cta: 'Volunteer Now',
    href: '/volunteer',
    image: '/images/Volunteer-1.jpg',
  },
  {
    title: 'Partner With Us',
    text: 'As a strategic partner, we work together to make a greater impact',
    cta: 'Partner Now',
    href: '/partners',
    image: '/images/Partner-with-us.jpg',
  },
  {
    title: 'Join Us',
    text: 'Become a member of our organization. Together we can',
    cta: 'Become A Member',
    href: '/membership',
    image: '/images/Mmuock-Fosimondi-Community-USA-2-24.jpg',
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader title="Get Involved" intro="You can contribute through any of the following ways" />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WAYS.map((w) => (
            <article key={w.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.image} alt={w.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold text-pine-900">{w.title}</h2>
                <p className="mt-3 flex-1 leading-[1.7] text-pine-950/70">{w.text}</p>
                <Link
                  href={w.href}
                  className="mt-5 inline-block self-start rounded-full bg-pine-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-pine-600"
                >
                  {w.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gold-400/25 p-8 ring-1 ring-gold-400/50 md:p-10">
          <h2 className="font-display text-2xl font-semibold text-pine-950">Meet With Us</h2>
          <p className="mt-3 max-w-3xl leading-[1.8] text-pine-950/80">
            We meet on the first Saturday of every month in Columbus, Ohio. Our next meeting is Saturday, November 7,
            2026. New members and friends of the community are welcome — reach out through our{' '}
            <Link href="/contact-us" className="font-semibold text-pine-800 underline underline-offset-2">
              contact options
            </Link>{' '}
            to join us.
          </p>
        </div>
      </section>
    </>
  )
}
