import Link from 'next/link'
import { ACTIVITIES, MISSION, VISION } from '@/lib/site'
import { posts } from '@/lib/posts'
import { DonateCTA, MeetingBanner } from '@/components/Shared'

const HELP_CARDS = [
  { label: 'Donate', href: '/donate', image: '/images/Donate.jpg' },
  { label: 'Join us', href: '/membership', image: '/images/Join-us.jpg' },
  { label: 'Volunteer', href: '/volunteer', image: '/images/Volunteer.jpg' },
  { label: 'Partner', href: '/partners', image: '/images/Partner-with-us.jpg' },
]

function formatDate(p: (typeof posts)[number]) {
  if (p.displayDate) return p.displayDate
  return new Date(p.date + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function HomePage() {
  const latest = posts.slice(0, 3)
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-pine-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Mmuock-Fosimondi-Community-USA-2-36.jpg"
          alt="M'muock Fosimondi community gathering"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pine-950/85 via-pine-950/55 to-pine-950/25" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">Stronger Together</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.12] md:text-[56px]">
            Building A Better M&apos;muock Home and Abroad for a Sustainable Tomorrow
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pine-50">
            Support us in our actions to drive change through education, science, culture, and community outreach
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="rounded-full bg-gold-500 px-7 py-3.5 font-bold uppercase tracking-wide text-pine-950 shadow-lg transition hover:bg-gold-400"
            >
              Donate Today
            </Link>
            <Link
              href="/about-us"
              className="rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Who We Are
            </Link>
          </div>
        </div>
      </section>

      <MeetingBanner />

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-pine-900 md:text-4xl">Who We Are</h2>
            <p className="mt-5 leading-[1.8] text-pine-950/75">
              We are a dynamic and inclusive organization dedicated to serving and uplifting the M&apos;muock community
              in the United States and in Cameroon. Committed to unity, service, and empowerment, we offer a range of
              spiritual, educational, scientific, charitable, and cultural initiatives. Through our activities, we aim
              to empower individuals, foster community spirit, and make a positive impact on society. Join us as we
              work together to build a stronger, more vibrant community, where everyone is supported, valued, and
              inspired to thrive.
            </p>
            <Link href="/about-us" className="mt-6 inline-block font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-600">
              More about us
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Mmuock-Fosimondi-Community-Ohio-19.jpg"
            alt="Community members together"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-pine-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-display text-3xl font-semibold text-pine-900 md:text-4xl">Our Mission / Vision</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-pine-100">
              <h3 className="font-display text-2xl font-semibold text-pine-800">Our Mission</h3>
              <p className="mt-4 leading-[1.8] text-pine-950/75">{MISSION}</p>
            </article>
            <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-pine-100">
              <h3 className="font-display text-2xl font-semibold text-pine-800">Our Vision</h3>
              <p className="mt-4 leading-[1.8] text-pine-950/75">{VISION}</p>
              <h3 className="mt-8 font-display text-2xl font-semibold text-pine-800">Our Community at a Glance</h3>
              <p className="mt-4 leading-[1.8] text-pine-950/75">
                M&apos;muock Fosimondi Community USA–Ohio is a 501(c)(3) nonprofit organization bringing together 250
                members in Columbus, Ohio. Our community has gathered since 2017 and incorporated in 2024 to serve
                better. Through scholarships and education support, food distribution, community cleanups, youth
                mentorship, and cultural celebrations, we serve our neighbors in Ohio and support our home community
                in Cameroon.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Here's how you can help */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-pine-900 md:text-4xl">
          Here&apos;s how you can help!
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HELP_CARDS.map((c) => (
            <Link key={c.label} href={c.href} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100 transition hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.label} className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
              <span className="block px-5 py-4 font-display text-xl font-semibold text-pine-900">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News and Stories */}
      <section className="bg-pine-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-pine-900 md:text-4xl">Latest News and Stories</h2>
            <Link href="/news-stories" className="font-semibold text-pine-700 underline underline-offset-4 hover:text-pine-600">
              View all stories
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latest.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100 transition hover:shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.hero} alt="" className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.03]" loading="lazy" />
                <span className="block p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{formatDate(p)}</span>
                  <span className="mt-2 block font-display text-lg font-semibold leading-snug text-pine-900">{p.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonateCTA />

      {/* Our Activities */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-pine-900 md:text-4xl">Our Activities</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pine-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image} alt={a.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-pine-900">{a.title}</h3>
                <p className="mt-3 leading-[1.75] text-pine-950/70">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/our-activities" className="inline-block rounded-full bg-pine-700 px-7 py-3 font-semibold text-white transition hover:bg-pine-600">
            Explore Our Activities
          </Link>
        </div>
      </section>
    </>
  )
}
