import { useSession } from "next-auth/react"
import { Hero } from "../components/Hero"
// import Layout from "../components/layout"
import { Seo } from "../components/SEO"
import { BaseLayout } from "../Layouts/BaseLayout"
import { trpc } from "../utils/trpc"
import { NextPageWithLayout } from "./_app"
// import { fetchAPI } from "../lib/api"

const Home: NextPageWithLayout = () => {
  // const { data, status } = useSession()
  const { data: page } = trpc.useQuery(["page.get", "homepage"])
  const { seo, hero } = page ?? { seo: {}, hero: {} }

  return (
    <>
      <Seo seo={seo} />
      <Hero hero={hero} />

      <div className="uk-section">
        <p>Some text</p>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
