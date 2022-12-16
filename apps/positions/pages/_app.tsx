import { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Join the Center of Trial and Error!</title>
      </Head>
      <main className="app motion-safe:scroll-smooth 2xl:text-[20px]">
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  )
}

export default CustomApp
