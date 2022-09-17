import { Content } from "apps/frontend/components/Content"
import { Seo } from "apps/frontend/components/SEO"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "apps/frontend/utils/trpc"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { differenceInDays, formatDistanceToNow } from "date-fns"
import { NextPageWithLayout } from "../_app"

const BlogPost: NextPageWithLayout = () => {
  const { query: post } = useRouter()

  const { data } = trpc.useQuery(["blog.getBySlug", post.post as string])
  const blogPost = data?.data?.[0]
  const {
    title,
    body,
    seo,
    image,
    blog_tags,
    publishedAt,
    blog_authors,
    publishDate,
  } = blogPost ?? {}

  return (
    <>
      <Seo seo={seo} />
      <article className="prose prose-slate mx-auto max-w-7xl px-4 dark:prose-invert sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <Image
            src={image?.url}
            width={image?.width}
            height={image?.height}
            alt={image?.alt}
          />
          <h1>{title}</h1>
          <div>
            <span>
              {`Published ${formatDistanceToNow(
                publishDate || publishedAt
                  ? new Date(publishDate ?? publishedAt)
                  : new Date()
              )}`}
            </span>
            <div className="flex gap-2">
              {blog_tags?.map((tag) => (
                <span
                  className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-900"
                  key={tag.title}
                >
                  {tag.title}
                </span>
              ))}
            </div>
            <div>
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
          </div>
        </div>
        <div
          className="prose prose-lg prose-orange mx-auto mt-6 text-gray-500"
          dangerouslySetInnerHTML={{ __html: body ?? "" }}
        />
        {/* <Content>{body}</Content> */}
      </article>
    </>
  )
}

export default BlogPost

BlogPost.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
