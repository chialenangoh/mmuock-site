import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { PageHeader, StripeButton } from '@/components/Shared'

export const metadata: Metadata = { title: 'Donate' }

const IMPACT_POINTS = [
  'Your donation funds programs and workshops that empower community members.',
  'Contributions support cultural events and heritage preservation projects in our community.',
  'Your support fuels community outreach, including charitable activities and assistance programs',
]

export default function DonatePage() {
  return (
    <>
      <PageHeader title="Donate" />
      <section className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE.logo} alt={SITE.name} className="mx-auto h-16 w-auto object-contain" />
        <h2 className="mx-auto mt-8 max-w-3xl font-display text-3xl font-semibold leading-snug text-pine-950 md:text-4xl">
          Donate to help promote development and sustain M&apos;muock heritage
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-pine-950/70">
          Help our organization by donating today! All donations go directly to making a difference for our cause.
        </p>

        <div className="mt-10 rounded-3xl bg-pine-50 px-6 py-10 ring-1 ring-pine-100">
          <StripeButton />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-pine-950/65">
            Prefer another way to give? Reach us at{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-pine-700 underline underline-offset-2">
              {SITE.email}
            </a>{' '}
            or {SITE.phoneDisplay} (call/WhatsApp) and we will gladly help.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 text-left lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-pine-900">
              Your Generous Contribution will Help us to:
            </h2>
            <ul className="mt-5 space-y-4">
              {IMPACT_POINTS.map((point) => (
                <li key={point} className="flex gap-3 leading-[1.7] text-pine-950/75">
                  <svg className="mt-1 shrink-0 text-pine-600" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                    <path d="M8 12.5l2.6 2.6L16 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-pine-950/55">
              See our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link> and{' '}
              <Link href="/terms-and-conditions" className="underline underline-offset-2">Terms and Conditions</Link>.
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
      </section>
    </>
  )
}
