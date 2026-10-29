import type { Metadata } from 'next'
import { termsBlocks } from '@/lib/terms'
import { Blocks, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Terms and Conditions' }

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms and Conditions" />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Blocks blocks={termsBlocks} />
      </section>
    </>
  )
}
