import { Metadata } from 'next'
import { env } from '../env/server.mjs'
import { Author } from '@/types'
import { getFirstAuthorLink } from './getFirstAuthorLink'

export const ogURL = `${env.OG_URL}/api/og/jote`

export const createMetadata = (
  {
    description = '',
    image = '',
    canonical = '',
    noindex = false,
    nofollow = false,
    title = '',
    ogTitle = '',
    locale = 'en_US',
    alt = '',
    abstract,
    authors,
  }: {
    description?: string
    image?: string
    canonical?: string
    noindex?: boolean
    nofollow?: boolean
    title?: string
    ogTitle?: string
    locale?: string
    alt?: string
    abstract?: string
    authors?: Author[]
  } = {},
  metadata?: Partial<Metadata>,
): Metadata => {
  const finalTitle =
    ogTitle || (title ? `${title} | Blog of Trial and Error` : 'A Blog of Trial and Error')

  return {
    title: finalTitle,
    description,
    robots: {
      follow: !nofollow,
      index: !noindex,
    },
    openGraph: {
      locale,
      url: `https://blog.trialanderror.org/${canonical}`,
      title: finalTitle,
      description,
      images: [
        {
          url:
            image ||
            `${ogURL}?title=${encodeURIComponent(finalTitle)}&author=${encodeURIComponent(
              description ?? '%20',
            )}&name=${encodeURIComponent(!canonical ? '' : 'A Blog of Trial and Error')}`,
          width: 1200,
          height: 630,
          alt,
        },
      ],
      siteName: 'A Blog of Trial and Error',
    },
    twitter: {
      site: '@jtrialerror',
      creator: '@jtrialerror',
      card: 'summary_large_image',
    },
    authors:
      authors?.map((author) => ({
        name: `${author.firstName ?? ''} ${author.lastName ?? ''}`,
        twitter: author.twitter,
        url: getFirstAuthorLink(author),
      })) ?? [],
    abstract,
    metadataBase: new URL('https://blog.trialanderrror.org'),
    publisher: 'Center of Trial and Error',
    ...metadata,
  }
}
