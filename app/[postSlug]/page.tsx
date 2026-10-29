import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/lib/posts'
import { Blocks, DonateCTA } from '@/components/Shared'
import { formatPostDate } from '@/lib/format'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ postSlug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>
}): Promise<Metadata> {
  const { postSlug } = await params
  const post = posts.find((p) => p.slug === postSlug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.hero], type: 'article' },
  }
}

export default async function PostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params
  const post = posts.find((p) => p.slug === postSlug)
  if (!post) notFound()

  // Render the hero once at the top; skip the first in-body copy of the same image.
  let heroSkipped = false
  const bodyBlocks = post.blocks.filter((b) => {
    if (!heroSkipped && b.t === 'img' && b.src === post.hero) {
      heroSkipped = true
      return false
    }
    return true
  })
  // Consecutive images render as a responsive gallery grid.
  const rendered: React.ReactNode[] = []
  let i = 0
  while (i < bodyBlocks.length) {
    const b = bodyBlocks[i]
    if (b.t === 'img') {
      const group = []
      while (i < bodyBlocks.length && bodyBlocks[i].t === 'img') {
        group.push(bodyBlocks[i])
        i++
      }
      if (group.length > 1) {
        rendered.push(
          <div key={`g${i}`} className="my-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {group.map((g, j) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={j} src={g.src} alt={g.alt || ''} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            ))}
          </div>,
        )
      } else {
        rendered.push(<Blocks key={`g${i}`} blocks={group} />)
      }
    } else {
      rendered.push(<Blocks key={`b${i}`} blocks={[b]} />)
      i++
    }
  }

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Link href="/news-stories" className="text-sm font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-600">
          ← Back to News & Stories
        </Link>
        <p className="mt-6 text-sm font-bold uppercase tracking-wide text-gold-600">{formatPostDate(post)}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-950 md:text-[42px] md:leading-[1.15]">
          {post.title}
        </h1>
        {post.hero && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.hero} alt="" className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-md" />
        )}
        <div className="mt-8">{rendered}</div>
      </article>

      <section className="bg-pine-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-pine-900">More News & Stories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100 transition hover:shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.hero} alt="" className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
                <span className="block p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{formatPostDate(p)}</span>
                  <span className="mt-2 block font-display text-lg font-semibold leading-snug text-pine-900">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <DonateCTA />
    </>
  )
}
