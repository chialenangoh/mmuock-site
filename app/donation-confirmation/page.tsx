import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Donation Confirmation' }

export default function DonationConfirmationPage() {
  return (
    <>
      <PageHeader title="Thank You" />
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <p className="text-lg leading-relaxed text-pine-950/75">
          Thank you for your generous donation to M&apos;muock Fosimondi Community Ohio USA. Your support helps us
          promote development and sustain M&apos;muock heritage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-pine-700 px-7 py-3 font-semibold text-white transition hover:bg-pine-600"
        >
          Return Home
        </Link>
      </section>
    </>
  )
}
