import { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles.css'
import { DefaultSeo } from 'next-seo'
import { SITE } from '../config'
import Script from 'next/script'

import { Overpass, Open_Sans } from '@next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  variable: '--font-overpass',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-open-sans: ${open_sans.style.fontFamily}, system-ui, sans-serif;
          --font-overpass: ${overpass.style.fontFamily}, system-ui, sans-serif;
        }
      `}</style>

      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: SITE.origin,
          site_name: SITE.name,
          description: SITE.description,
          images: [
            {
              url: 'https://og.trialanderro.org/api/og/jote?name=Open Positions',
            },
          ],
        }}
        twitter={{
          handle: '@jtrialerror',
          site: '@jtrialerror',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
      {/* <Analytics /> */}
      <Script
        strategy="afterInteractive"
        data-domain="trialanderror.org"
        src="/stats/js/script"
        data-api="/stats/api/event"
      />
    </>
  )
}

export default CustomApp
