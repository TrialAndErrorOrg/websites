import { BlogPosts } from "apps/frontend/components/blog/Blog"
import { Seo } from "apps/frontend/components/SEO"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import { NextPageWithLayout } from "../_app"

const Blog: NextPageWithLayout = () => {
  const { data: seo } = trpc.useQuery(["seo.get", "blog-home"])
  const { data: blogPosts } = trpc.useQuery(["blog.getAll", {}])
  return (
    <>
      <Seo seo={seo} />
      <main>{<BlogPosts posts={blogPosts?.data ?? []} />}</main>
    </>
  )
}
export default Blog

Blog.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
