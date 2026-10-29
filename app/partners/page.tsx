import type { Metadata } from 'next'
import CommunityForm from '@/components/CommunityForm'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Partners' }

const NEWSLETTER = 'Check this box if you would like to receive latest news and updates from us (spam free)'

export default function PartnersPage() {
  return (
    <>
      <PageHeader title="Partnership" intro="Let's complement our efforts to create a bigger impact." />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="text-lg leading-relaxed text-pine-950/75">
          To apply for partnership, please fill and submit the form below and we will get back in touch with you
        </p>
        <h2 className="mb-6 mt-10 font-display text-2xl font-semibold text-pine-900">Partnership Application Form</h2>
        <CommunityForm
          formName="Partnership Application"
          newsletterLabel={NEWSLETTER}
          fields={[
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'phone', label: 'Phone', type: 'tel', required: true },
            { name: 'state', label: 'State/Province/Region', required: true, half: true },
            { name: 'country', label: 'Country', required: true, half: true },
            { name: 'organization', label: 'Name of your organization or business', required: true },
            { name: 'comment', label: 'Comment', type: 'textarea' },
          ]}
        />
      </section>
    </>
  )
}
