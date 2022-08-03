import Articles from "../components/articles"
// import Layout from "../components/layout"
import Seo from "../components/seo"
// import { fetchAPI } from "../lib/api"

interface HomeProps {
  posts: any
}

const Home = (props: HomeProps) => {
  const { posts } = props
  // <Layout categories={categories}>
  return (
    <>
      {/* <Seo seo={homepage?.attributes?.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{homepage?.attributes?.hero?.title}</h1> */}
          {/* <Articles articles={articles} /> */}
        </div>
      </div>
    </>
  )
  // </Layout>
}

export const getStaticProps = async () => {
  // Run API calls in parallel
  // const [articlesRes, categoriesRes, homepageRes] = await Promise.all([])

  // console.log({ articlesRes, categoriesRes, homepageRes })

  return {
    props: {
      // articles: articlesRes.data,
      // categories: categoriesRes.data,
      // homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
