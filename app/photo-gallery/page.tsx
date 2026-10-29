import type { Metadata } from 'next'
import { galleryBlacklick, galleryCommunity, galleryDublin, gallerySchools } from '@/lib/gallery'
import { DonateCTA, PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Photo Gallery' }

function GallerySection({ title, images }: { title: string; images: string[] }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="font-display text-2xl font-semibold text-pine-900 md:text-3xl">{title}</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src + i}
            src={src}
            alt={`${title} — photo ${i + 1}`}
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}

export default function PhotoGalleryPage() {
  return (
    <>
      <PageHeader title="Photo Gallery" intro="Moments from our community life in Ohio and our work back home." />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <GallerySection title="Our Community in Ohio" images={galleryCommunity} />
        <GallerySection title="Blacklick Woods Metro Park Cleanup — July 4, 2026" images={galleryBlacklick} />
        <GallerySection title="Supporting All 7 Schools in Our Homeland" images={gallerySchools} />
        <GallerySection title="Clean-Up Campaign — East Dublin Granville Road, Columbus" images={galleryDublin} />
      </div>
      <DonateCTA />
    </>
  )
}
