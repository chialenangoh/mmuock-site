import Link from 'next/link'
import type { Block } from '@/lib/posts'
import { SITE } from '@/lib/site'

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="bg-pine-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16">
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-pine-100">{intro}</p>}
      </div>
      <div className="h-1.5 bg-gold-500" />
    </section>
  )
}

export function DonateCTA() {
  return (
    <section className="bg-pine-800">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-3xl font-display text-2xl font-semibold leading-snug text-white md:text-[28px]">
          Join us in making a difference! Your donation fuels our efforts to preserve our rich cultural heritage,
          empower our community through education and support, and drive positive change locally and globally.
        </h2>
        <Link
          href="/donate"
          className="shrink-0 rounded-full bg-gold-500 px-7 py-3 font-bold text-pine-950 shadow transition hover:bg-gold-400"
        >
          Donate
        </Link>
      </div>
    </section>
  )
}

export function MeetingBanner() {
  return (
    <section aria-label="Next meeting" className="bg-gold-400">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <p className="text-center text-[15px] font-semibold text-pine-950 md:text-base">
          <span className="mr-2 inline-block rounded-full bg-pine-950 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-gold-300">
            Next meeting
          </span>
          Saturday, November 7, 2026 — the community meets the first Saturday of the month in rotating member homes.
          All members welcome.
        </p>
      </div>
    </section>
  )
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="content-body">
      {blocks.map((b, i) => {
        if (b.t === 'h') {
          const Tag = (`h${Math.min(Math.max(b.level || 2, 2), 4)}`) as 'h2' | 'h3' | 'h4'
          return <Tag key={i} dangerouslySetInnerHTML={{ __html: b.html || '' }} />
        }
        if (b.t === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: b.html || '' }} />
        if (b.t === 'list')
          return (
            <ul key={i}>
              {(b.items || []).map((it, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
              ))}
            </ul>
          )
        if (b.t === 'img')
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={b.src} alt={b.alt || ''} loading="lazy" />
          )
        return null
      })}
    </div>
  )
}

export function StripeButton({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={SITE.stripeDonate}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[#635bff] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:brightness-110"
      >
        Donate with Card — Give Any Amount
      </a>
      <p className="mt-3 text-sm text-pine-800">
        Secure card giving through Stripe — choose any amount. {SITE.legalName} is a 501(c)(3) nonprofit; gifts are
        tax-deductible.
      </p>
    </div>
  )
}
