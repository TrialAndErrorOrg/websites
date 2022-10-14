import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to positionss!</title>
      </Head>
      <main className="app motion-safe:scroll-smooth 2xl:text-[20px]">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
