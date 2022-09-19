import { BlogPosts } from "apps/frontend/components/blog/Blog"
import { Seo } from "apps/frontend/components/SEO"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "../_app"

const Blog: NextPageWithLayout = () => {
  const {
    query: { sort, order, filter },
  } = useRouter()
  const { data: seo } = trpc.useQuery(["seo.get", "blog-home"])
  const { data: blogPosts } = trpc.useQuery([
    "blog.getAll",
    {
      order: order as "asc" | "desc",
      orderBy: sort as "title" | "publishDate" | undefined,
    },
  ])
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
      <main>{<BlogPosts posts={blogPosts?.data ?? []} />}</main>
    </>
  )
}
export default Blog

Blog.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
