import type { Metadata } from 'next'
import { privacyBlocks } from '@/lib/privacy'
import { Blocks, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Privacy Policy' }

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Blocks blocks={privacyBlocks} />
      </section>
    </>
  )
}
