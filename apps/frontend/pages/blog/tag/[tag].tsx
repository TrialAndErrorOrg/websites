import { BlogPosts } from "apps/frontend/components/blog/Blog"
import { Seo } from "apps/frontend/components/SEO"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "../../_app"

const TagPage: NextPageWithLayout = () => {
  const { query: tag } = useRouter()
  const { data } = trpc.useQuery(["blog.getByTag", { tag: tag.tag as string }])
  return (
    <>
      <Seo
        seo={{
          metaTitle: tag.tag as string,
          metaDescription: `Blog posts with the tag ${tag.tag as string}`,
        }}
      />
      <h1>{tag.tag as string}</h1>
      <BlogPosts posts={data?.data ?? []} />
    </>
  )
}

export default TagPage

TagPage.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
