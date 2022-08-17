import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "../_app"

const BlogPost: NextPageWithLayout = () => {
  const { query: post } = useRouter()

  const { data } = trpc.useQuery(["blog.getBySlug", post.post as string])

  return <article>{JSON.stringify(data)}</article>
}

export default BlogPost

BlogPost.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
