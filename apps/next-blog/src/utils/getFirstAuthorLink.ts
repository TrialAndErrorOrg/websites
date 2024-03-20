import type { Author } from '@/types'

export const getFirstAuthorLink = (author: Author) =>
  author.personalWebsite || author.orcid || author.twitter || author.github
