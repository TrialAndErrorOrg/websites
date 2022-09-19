import { useRouter } from "next/router"
import { BlogPosts } from "../../../components/blog/Blog"
import { Seo } from "../../../components/SEO"
import { BaseLayout } from "../../../layouts/BaseLayout"
import { trpc } from "../../../utils/trpc"
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
