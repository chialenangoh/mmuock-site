'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV, SITE } from '@/lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pine-100 shadow-[0_1px_12px_rgba(15,31,22,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logo} alt={SITE.name} className="h-11 w-auto max-w-[240px] object-contain sm:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium text-pine-900 transition hover:bg-pine-50"
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-52 rounded-xl border border-pine-100 bg-white p-1.5 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.label + c.href}
                      href={c.href}
                      className="block rounded-lg px-3 py-2 text-sm text-pine-900 transition hover:bg-pine-50"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[15px] font-medium text-pine-900 transition hover:bg-pine-50"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/donate"
            className="ml-2 rounded-full bg-gold-500 px-5 py-2.5 text-[15px] font-bold text-pine-950 shadow-sm transition hover:bg-gold-400"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/donate" className="rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-pine-950">
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pine-200 text-pine-900"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-pine-100 bg-white px-4 pb-5 pt-2 lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-pine-50 last:border-0">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left font-semibold text-pine-900"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className={expanded === item.label ? 'rotate-180 transition' : 'transition'}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </button>
                  {expanded === item.label && (
                    <div className="pb-3 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.label + c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-2 text-[15px] text-pine-800 hover:bg-pine-50"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 font-semibold text-pine-900">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}
