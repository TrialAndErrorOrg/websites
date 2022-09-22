import { Hero } from '../components/Hero'
// import Layout from "../components/layout"
import { Seo } from '../components/SEO'
import { BaseLayout } from '../layouts/BaseLayout'
import { trpc } from '../utils/trpc'
import { NextPageWithLayout } from './_app'
// import { fetchAPI } from "../lib/api"

const Home: NextPageWithLayout = () => {
  // const { data, status } = useSession()
  const { data: page, error, isFetching } = trpc.useQuery(['page.homepage'])
  // const { seo, hero,  } = page
  console.log(page, error, isFetching)

  return (
    <>
      <Seo seo={page?.seo} />
      <Hero hero={page?.hero} />

      <div className="uk-section">
        <article
          className="prose prose-slate dark:prose-invert mx-auto text-2xl font-semibold"
          dangerouslySetInnerHTML={{ __html: page?.body ?? '' }}
        />
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
