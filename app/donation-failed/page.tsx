import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Donation Failed' }

export default function DonationFailedPage() {
  return (
    <>
      <PageHeader title="Donation Failed" />
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
        <p className="text-lg leading-relaxed text-pine-950/75">
          We&apos;re sorry, your donation failed to process. Please try again or contact site support.
        </p>
        <Link
          href="/donate"
          className="mt-8 inline-block rounded-full bg-pine-700 px-7 py-3 font-semibold text-white transition hover:bg-pine-600"
        >
          Try Again
        </Link>
      </section>
    </>
  )
}
