import { Content } from "apps/frontend/components/Content"
import { Seo } from "apps/frontend/components/SEO"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "../_app"

const BlogPost: NextPageWithLayout = () => {
  const { query: post } = useRouter()

  const { data } = trpc.useQuery(["blog.getBySlug", post.post as string])
  const blogPost = data?.data?.[0]
  const {
    title,
    post: body,
    seo,
    image,
    blog_tags,
    blog_authors,
    publishDate,
  } = blogPost ?? {}

  return (
    <>
      <Seo seo={seo} />
      <article className="prose prose-slate dark:prose-invert">
        <Image
          src={image?.url}
          width={image?.width}
          height={image?.height}
          alt={image?.alt}
        />
        <h1>{title}</h1>
        <div>
          <time dateTime={publishDate}>{publishDate}</time>
          {blog_authors?.map((author) => (
            <Link href={`/team/${author.slug}`} key={author.slug}>
              <a>
                <Image
                  src={author?.image?.url}
                  width={author?.image?.width}
                  height={author?.image?.height}
                  alt={author?.image?.alt}
                />
                <h2>
                  {author.firstName} {author.lastName}
                </h2>
              </a>
            </Link>
          ))}
        </div>
        {JSON.stringify(blogPost)}
        <Content>{body}</Content>
      </article>
    </>
  )
}

export default BlogPost

BlogPost.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
