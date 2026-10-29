import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Stronger Together`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "M'muock Fosimondi Community Ohio USA is a 501(c)(3) nonprofit in Columbus, Ohio, empowering the M'muock community through education, science, culture, and community outreach — in Ohio and in Cameroon.",
  icons: {
    icon: SITE.logoIcon,
  },
  openGraph: {
    title: SITE.name,
    description:
      'Stronger Together — education, science, culture, and community outreach for the M\'muock community in Ohio and Cameroon.',
    images: ['/images/Mmuock-Fosimondi-Community-USA-2-36.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
