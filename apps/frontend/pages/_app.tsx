import { withTRPC } from "@trpc/next"
import superjson from "superjson"
import App, { AppProps } from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import { SessionProvider } from "next-auth/react"
// import { fetchAPI } from "../lib/api"
// import { getStrapiMedia } from "../lib/media"
import { AppRouter } from "../server/router"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <>
    {/* <GlobalContext.Provider value={global?.attributes}> */}
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    {/* </GlobalContext.Provider> */}
  </>
)

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

export default withTRPC<AppRouter>({
  config: ({ ctx }) => {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp)
