import type { Metadata } from 'next'
import CommunityForm from '@/components/CommunityForm'
import { SITE } from '@/lib/site'
import { PageHeader } from '@/components/Shared'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" intro="Get in touch. We would love to hear from you." />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-pine-900">Send us a message</h2>
            <div className="mt-6">
              <CommunityForm
                formName="Contact"
                fields={[
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'subject', label: 'Subject' },
                  { name: 'message', label: 'Message', type: 'textarea', required: true },
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-pine-900">Contact info</h2>
            <ul className="mt-6 space-y-5 text-lg text-pine-950/80">
              <li>
                <span className="font-semibold text-pine-900">Address:</span> {SITE.address}
              </li>
              <li>
                <span className="font-semibold text-pine-900">Phone/WhatsApp:</span>{' '}
                <a href={SITE.phoneHref} className="text-pine-700 underline underline-offset-2">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="font-semibold text-pine-900">Email:</span>{' '}
                <a href={`mailto:${SITE.email}`} className="break-all text-pine-700 underline underline-offset-2">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <h2 className="mt-10 font-display text-2xl font-semibold text-pine-900">Head office location</h2>
            <div className="mt-4 overflow-hidden rounded-2xl shadow ring-1 ring-pine-100">
              <iframe
                title="Map — 2787 Marwood Court, Columbus, Ohio 43232"
                src="https://www.google.com/maps?q=2787%20Marwood%20Court%20Columbus%2C%20Ohio%2043232&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
            <h2 className="mt-10 font-display text-2xl font-semibold text-pine-900">Connect with us</h2>
            <p className="mt-3 text-pine-950/75">
              Follow us on{' '}
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="font-semibold text-pine-700 underline underline-offset-2">
                Facebook
              </a>{' '}
              and{' '}
              <a href={SITE.youtube} target="_blank" rel="noreferrer" className="font-semibold text-pine-700 underline underline-offset-2">
                YouTube
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
