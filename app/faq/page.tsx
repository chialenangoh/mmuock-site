import type { Metadata } from 'next'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'FAQ' }

// NOTE: The WordPress FAQ page shipped with placeholder questions and lorem
// ipsum answers that were never filled in. Reproduced as-is from the export;
// see REBUILD-INVENTORY.md.
const FAQS = [
  {
    q: 'Question 1 here',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    q: 'Question 2 here',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions (FAQs)" />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pine-100" open={i === 0}>
              <summary className="cursor-pointer list-none font-display text-xl font-semibold text-pine-900 marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 leading-[1.8] text-pine-950/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
