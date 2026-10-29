import type { Metadata } from 'next'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Our Impact' }

// NOTE: The WordPress "Our Impact" page shipped with placeholder ("lorem ipsum")
// impact cards that were never filled in. They are reproduced as-is from the
// export so nothing is invented; see REBUILD-INVENTORY.md.
const PLACEHOLDER =
  'Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad. Eos erant indoctum an, dictas invidunt est ex, et sea consulatu torquatos. Nostro aperiam petentium eu nam, mel debet urbanitas ad, idque complectitur eu quo. An sea autem dolore dolores.'

export default function ImpactPage() {
  return (
    <>
      <PageHeader title="Our Impact" />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <p className="text-lg leading-[1.85] text-pine-950/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rural-children.jpg"
            alt="Children in a rural community"
            className="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <article key={n} className="rounded-2xl bg-pine-50 p-7 ring-1 ring-pine-100">
              <h2 className="font-display text-xl font-semibold text-pine-900">Impact title 1</h2>
              <p className="mt-3 leading-[1.75] text-pine-950/70">{PLACEHOLDER}</p>
            </article>
          ))}
        </div>
      </section>
      <DonateCTA />
    </>
  )
}
