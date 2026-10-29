import type { Post } from './posts'

export function formatPostDate(p: Post) {
  if (p.displayDate) return p.displayDate
  return new Date(p.date + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
