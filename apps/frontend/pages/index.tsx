import { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/future/image"
import Link from "next/link"
import { Hero } from "../components/Hero"
// import Layout from "../components/layout"
import { Seo } from "../components/SEO"
import { BaseLayout } from "../layouts/BaseLayout"
import { ssgDefault } from "../utils/ssgDefault"
import { trpc } from "../utils/trpc"
import { NextPageWithLayout } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await ssgDefault()

  await ssg.fetchQuery("blog.getAll", {})
  await ssg.fetchQuery("page.homepage")

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60 * 10,
  }
}

const Home: NextPageWithLayout = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  // const { data, status } = useSession()
  const { data: page, error, isFetching } = trpc.useQuery(["page.homepage"])
  const {
    data: blogPosts,
    error: blogError,
    isFetching: blogFetching,
  } = trpc.useQuery(["blog.getAll", {}])

  // const { seo, hero,  } = page

  return (
    <>
      <Seo seo={page?.seo} />
      <Hero hero={page?.hero} />

      <div className="uk-section">
        <article
          className="prose prose-slate mx-auto text-2xl font-semibold"
          dangerouslySetInnerHTML={{ __html: page?.body ?? "" }}
        />
        <div className="grid grid-cols-12 gap-1 md:grid-cols-12">
          <div className="col-span-3" />
          {blogPosts?.data?.map((post, idx) => (
            <div
              key={post.slug}
              className={`${
                idx === 0
                  ? "col-span-9 h-[48rem]"
                  : (idx + 1) % 4 === 0
                  ? (idx + 1) % 8 === 0
                    ? "col-span-4 row-span-2 h-[48rem]"
                    : "col-span-8 h-96"
                  : "col-span-4 row-start-auto h-96"
              } card-shadow group relative flex flex-col justify-end overflow-clip text-white`}
            >
              <Image
                src={post.image?.url}
                width={post.image?.width}
                height={post.image?.height}
                alt={post.image?.alt}
                className="absolute h-full bg-white object-cover"
              />
              <Link href={`/blog/${post.slug}`} className="link-overlay">
                <div className="relative flex flex-col p-2 backdrop-blur-sm">
                  <h2 className="relative">
                    <span className="cia box-border inline bg-black box-decoration-clone py-1 px-4 text-xl font-bold text-white">
                      {post.title}
                    </span>
                  </h2>
                  <span className="relative px-4 py-2 text-white">
                    {post.excerpt}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
