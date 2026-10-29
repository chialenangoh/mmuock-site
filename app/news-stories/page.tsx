import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'
import { formatPostDate } from '@/lib/format'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'News & Stories' }

export default function NewsStoriesPage() {
  return (
    <>
      <PageHeader title="Our Blog" intro="Discover the latest news and stories" />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100 transition hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.hero}
                alt=""
                className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.03]"
                loading="lazy"
              />
              <span className="block p-6">
                <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{formatPostDate(p)}</span>
                <span className="mt-2 block font-display text-xl font-semibold leading-snug text-pine-900">
                  {p.title}
                </span>
                <span className="mt-3 line-clamp-3 block leading-relaxed text-pine-950/65">{p.excerpt}…</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
