import Link from 'next/link'
import { SITE } from '@/lib/site'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Activities', href: '/our-activities' },
  { label: 'Our Impact', href: '/our-impact' },
  { label: 'Photo Gallery', href: '/photo-gallery' },
  { label: 'News & Stories', href: '/news-stories' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Membership', href: '/membership' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-pine-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">About Us</h3>
          <p className="mt-3 text-sm leading-relaxed text-pine-200">
            We are a community-driven organization empowering the M&apos;muock Fosimondi community through education,
            science, culture, and community outreach, fostering unity and positive change globally and locally.
          </p>
          <p className="mt-3 text-sm text-pine-300">
            {SITE.legalName} is a 501(c)(3) nonprofit organization.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="text-pine-200 transition hover:text-gold-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Contacts</h3>
          <ul className="mt-3 space-y-3 text-sm text-pine-200">
            <li>
              <span className="font-semibold text-white">Address:</span> {SITE.address}
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span>{' '}
              <a href={SITE.phoneHref} className="hover:text-gold-300">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{' '}
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold-300">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Connect with us</h3>
          <div className="mt-3 flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 text-white transition hover:bg-gold-500 hover:text-pine-950"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" />
              </svg>
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 text-white transition hover:bg-gold-500 hover:text-pine-950"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z" />
              </svg>
            </a>
          </div>
          <Link
            href="/donate"
            className="mt-5 inline-block rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-pine-950 transition hover:bg-gold-400"
          >
            Donate Today
          </Link>
        </div>
      </div>
      <div className="border-t border-pine-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-[13px] text-pine-300 sm:px-6 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold-300">
              Terms and Conditions
            </Link>
            <a href="https://afritechglobal.com/" target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Website by Afritech Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
