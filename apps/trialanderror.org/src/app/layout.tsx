import { NextSeo, NextSeoProps } from 'next-seo'
import Link from 'next/link'
import { AnalyticsWrapper } from './components/Analytics'
import { Footer } from './components/Footer'
import { Overpass, Open_Sans } from '@next/font/google'

import '../styles/globals.css'
import { Nav } from './components/Nav'
import Script from 'next/script'
import { env } from '../env/server.mjs'
// If loading a variable font, you don't need to specify the font weight
const overpass = Overpass({
  //weight: ['600', '900'],
  // style: 'normal',
  subsets: ['latin'],
  variable: '--font-overpass',
  // default, can also use "swap" to ensure custom font always shows
  display: 'swap',
})

const open_sans = Open_Sans({
  //weight: ['400', '600'],
  //style: 'normal',
  subsets: ['latin'],
  variable: '--font-open-sans',
  // default, can also use "swap" to ensure custom font always shows
  display: 'swap',
})

export const ogURL = `${env.OG_URL}/api/og/jote`

// next-seo.config.js
export const SEO = (
  {
    description = '',
    image = '',
    canonical = '',
    noindex = false,
    nofollow = false,
    title = 'The Center of Trial and Error',
    ogTitle = '',
    ogType = 'website',
    locale = 'en_US',
    alt = '',
  } = {},
  otherProps?: NextSeoProps,
) => (
  <NextSeo
    {...{
      title: title,
      description: description,
      canonical: `https://trialanderror.org/${canonical}`,
      openGraph: {
        type: ogType,
        locale,
        url: `https://trialanderror.org/${canonical}`,
        title: ogTitle || title,
        description: description,
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
        handle: '@jtrialerror',
        site: '@jtrialerror',
        cardType: 'summary_large_image',
      },
      useAppDir: true,
      ...otherProps,
    }}
  />
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${open_sans.variable} ${overpass.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#002642" />
        <meta name="msapplication-TileColor" content="#002642" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <AnalyticsWrapper />
        <Script
          strategy="afterInteractive"
          data-domain="trialanderror.org"
          src="/stats/js/script"
          data-api="/stats/api/event"
        />
      </body>
    </html>
  )
}
