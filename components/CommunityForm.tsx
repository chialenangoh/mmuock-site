'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

export type FormField = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  required?: boolean
  half?: boolean
}

// Static-site equivalent of the old WPForms forms: submitting composes an
// email to the community inbox with the visitor's mail app.
export default function CommunityForm({
  formName,
  fields,
  newsletterLabel,
}: {
  formName: string
  fields: FormField[]
  newsletterLabel?: string
}) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [news, setNews] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const lines = [
      `Name: ${(values.__first || '') + ' ' + (values.__last || '')}`.trimEnd(),
      ...fields.map((f) => `${f.label}: ${values[f.name] || ''}`),
    ]
    if (newsletterLabel) lines.push(`${newsletterLabel}: ${news ? 'Yes' : 'No'}`)
    const subject = encodeURIComponent(`${formName} — website submission`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  const inputCls =
    'w-full rounded-lg border border-pine-200 bg-white px-3.5 py-2.5 text-[15px] text-pine-950 outline-none transition focus:border-pine-500 focus:ring-2 focus:ring-pine-200'

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-pine-50 p-6 ring-1 ring-pine-100 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="mb-1.5 block text-sm font-semibold text-pine-900">
            Name <span className="text-clay-500">*</span>
          </label>
          <input
            id="first-name"
            required
            placeholder="First"
            className={inputCls}
            value={values.__first || ''}
            onChange={(e) => setValues({ ...values, __first: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="last-name" className="mb-1.5 block text-sm font-semibold text-pine-900 sm:invisible">
            Last
          </label>
          <input
            id="last-name"
            placeholder="Last"
            className={inputCls}
            value={values.__last || ''}
            onChange={(e) => setValues({ ...values, __last: e.target.value })}
          />
        </div>
        {fields.map((f) => (
          <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
            <label htmlFor={f.name} className="mb-1.5 block text-sm font-semibold text-pine-900">
              {f.label} {f.required && <span className="text-clay-500">*</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea
                id={f.name}
                required={f.required}
                rows={4}
                className={inputCls}
                value={values[f.name] || ''}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              />
            ) : (
              <input
                id={f.name}
                type={f.type || 'text'}
                required={f.required}
                className={inputCls}
                value={values[f.name] || ''}
                onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              />
            )}
          </div>
        ))}
      </div>
      {newsletterLabel && (
        <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-sm text-pine-900">
          <input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} className="mt-0.5 h-4 w-4 accent-pine-700" />
          {newsletterLabel}
        </label>
      )}
      <button
        type="submit"
        className="mt-6 rounded-full bg-pine-700 px-8 py-3 font-bold text-white shadow transition hover:bg-pine-600"
      >
        Submit
      </button>
      <p className="mt-4 text-[13px] text-pine-950/55">
        Submitting opens your email app addressed to {SITE.email}. You can also reach us directly at that address or
        by phone at {SITE.phoneDisplay}.
      </p>
    </form>
  )
}
