import { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles.css'
import { DefaultSeo } from 'next-seo'
import { SITE } from '../config'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Analytics />
    </>
  )
}

export default CustomApp
