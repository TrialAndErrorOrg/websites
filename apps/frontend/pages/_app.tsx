/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { withTRPC } from "@trpc/next"
import superjson from "superjson"
import { AppProps as NextAppProps } from "next/app"
// import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import { SessionProvider } from "next-auth/react"
// import { fetchAPI } from "../lib/api"
// import { getStrapiMedia } from "../lib/media"
import { GetAttributesValues } from "@strapi/strapi"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import { Session } from "next-auth"
import { AppRouter } from "../server/router"
// import { strapi } from "../server/db/client"

// modified version - allows for custom pageProps type, falling back to 'any'
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, "pageProps">

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type SEO = GetAttributesValues<"api::global.global">

// type AppPropsWithEverything = AppProps<{
//   global: SEO
//   session: Session
// }>

// type AppPropsWithLayoutAndAuthAndGlobalSEO = AppPropsWithEverything & {
//   Component: NextPageWithLayout
// }
type AppPropsWithLayoutAndAuth = AppProps<{
  session: Session
}> & {
  Component: NextPageWithLayout
}

export const GlobalContext = createContext<SEO>({
  defaultSeo: {
    metaDescription: "",
    metaTitle: "",
    shareImage: "",
    metaSocial: [],
  },
  siteName: "",
})

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayoutAndAuth) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      {/* <Head>
        <title>{global?.defaultSeo?.metaTitle}</title>
        <meta
          name="description"
          content={global?.defaultSeo?.metaDescription}
        />
        <meta property="og:title" content={global?.defaultSeo?.metaTitle} />
        <link rel="shortcut icon" href={global?.favicon?.url} />
      </Head> */}
      {/* <GlobalContext.Provider value={global}> */}
      <SessionProvider session={session}>
        {getLayout(<Component {...{ ...pageProps }} />)}
      </SessionProvider>
      {/* </GlobalContext.Provider> */}
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx)
//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       favicon: "*",
//       defaultSeo: {
//         populate: "*",
//       },
//     },
//   })
//   console.log(globalRes)
//   // Pass the data to our page via props
//   return { ...appProps, pageProps: { global: globalRes.data } }
// }
const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return ""
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 4200}` // dev SSR should use localhost
}

// MyApp.getInitialProps = async (ctx): Promise<AppPropsWithEverything> => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const { pageProps, ...appProps } = await App.getInitialProps(ctx)
//   // Fetch global site settings from Strapi

//   // const globalRes = await strapi
//   //   ?.from<GetAttributesValues<"api::global.global">>("global")
//   //   .select()
//   //   .populate()
//   //   .get()

//   const {
//     data: { attributes },
//   } = await (
//     await fetch(`${process.env.STRAPI_ENDPOINT}/global?populate=%2A`, {
//       headers: {
//         Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//       },
//     })
//   ).json()

//   // console.log(globalRes)
//   // Pass the data to our page via props
//   return {
//     ...appProps,
//     pageProps: { ...pageProps, global: attributes ?? {} },
//   }
// }

const AppWithTRPC = withTRPC<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      // during client requests
      return {
        transformer: superjson, // optional - adds superjson serialization
        url: "/api/trpc",
      }
    }
    // during SSR below

    // optional: use SSG-caching for each rendered page (see caching section for more details)
    const ONE_DAY_SECONDS = 60 * 60 * 24
    ctx?.res?.setHeader(
      "Cache-Control",
      `s-maxage=1, stale-while-revalidate=${ONE_DAY_SECONDS}`
    )

    // The server needs to know your app's full url
    // On render.com you can use `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}/api/trpc`
    const url = `${getBaseUrl()}/api/trpc`

    return {
      transformer: superjson, // optional - adds superjson serialization
      url,
      headers: {
        // optional - inform server that it's an ssr request
        "x-ssr": "1",
      },
    }
  },
  ssr: true,
})(MyApp)

export default AppWithTRPC
