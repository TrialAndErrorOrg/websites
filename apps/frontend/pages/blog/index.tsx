import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { BlogPosts } from "../../components/blog/Blog"
import { Seo } from "../../components/SEO"
import { BaseLayout } from "../../layouts/BaseLayout"
import { trpc } from "../../utils/trpc"
import { NextPageWithLayout } from "../_app"
import { ssgDefault } from "../../utils/ssgDefault"

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  // const ssg = createSSGHelpers({
  //   router: appRouter,
  //   ctx: await createContext(),
  //   transformer: superjson,
  // })

  // await ssg.fetchQuery("nav.get", "footer")
  // await ssg.fetchQuery("nav.get", "socials")
  const ssg = await ssgDefault()

  const { tag, sort, order, filter } = query ?? {}
  await ssg.fetchQuery("blog.getAll", {
    orderBy: sort as "publishedAt" | "title" | "publishDate" | undefined,
    order: order as "asc" | "desc" | undefined,
    tag: typeof tag === "string" ? [tag] : tag,
    // filter: filter as string,
  })
  await ssg.fetchQuery("seo.get", "blog-home")

  console.log(params, query)
  return {
    props: {
      trpcState: ssg.dehydrate(),
      sort: (sort as string) ?? null,
      order: (order as string) ?? null,
      filter: (filter as string) ?? null,
      tag: typeof tag === "string" ? [tag] : tag ?? null,
    },
  }
}

const Blog: NextPageWithLayout = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  // const {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   query: { sort, order, filter },
  // } = useRouter()
  const { tag, sort, order, filter } = props
  const { data: seo } = trpc.useQuery(["seo.get", "blog-home"])
  const { data: blogPosts } = trpc.useQuery([
    "blog.getAll",
    {
      order: (order as "asc" | "desc") ?? undefined,
      orderBy: (sort as "title" | "publishDate" | undefined) ?? undefined,
      tag: tag ?? undefined,
    },
  ])

  console.log(blogPosts)
  return (
    <>
      <Seo
        seo={
          seo ?? {
            metaTitle: "A Blog of Trial and Error",
            metaDescription: "Blog posts by the greatest an latest",
          }
        }
      />
      <main>
        <BlogPosts posts={blogPosts?.data ?? []} />
      </main>
    </>
  )
}
export default Blog

Blog.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
