import type { Metadata } from 'next'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Video Gallery' }

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader title="Video Gallery" intro="Explore our organization in videos" />
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-pine-100">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/XHOmBV4js_E"
              title="M'muock Fosimondi Community Ohio USA — video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <h2 className="mt-10 text-center font-display text-2xl font-semibold text-pine-900">
          We will upload the videos in a moment
        </h2>
        <p className="mt-3 text-center text-pine-950/70">
          More videos are on the way. You can also watch us on{' '}
          <a
            className="font-semibold text-pine-700 underline underline-offset-2"
            href="https://www.youtube.com/@muockfosimondiohiousa"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          .
        </p>
      </section>
      <DonateCTA />
    </>
  )
}
