import { Metadata } from 'next'
import { env } from '../env/server.mjs'

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
  } = {},
  metadata?: Partial<Metadata>,
): Metadata => ({
  title: title ? `${title} | Center of Trial and Error` : 'Center of Trial and Error',
  description,
  robots: {
    follow: !nofollow,
    index: !noindex,
  },
  openGraph: {
    locale,
    url: `https://trialanderror.org/${canonical}`,
    title:
      ogTitle ?? (title ? `${title} | Center of Trial and Error` : 'Center of Trial and Error'),
    description,
    images: [
      {
        url:
          image ||
          `${ogURL}?title=${encodeURIComponent(ogTitle || title)}&author=${encodeURIComponent(
            description ?? '%20',
          )}&name=${encodeURIComponent(!canonical ? '' : 'Center of Trial and Error')}`,
        width: 1200,
        height: 630,
        alt,
      },
    ],
    siteName: 'Center of Trial and Error',
  },
  twitter: {
    site: '@jtrialerror',
    creator: '@jtrialerror',
    card: 'summary_large_image',
  },
  ...metadata,
})
