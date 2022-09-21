import { createSSGHelpers } from "@trpc/react/ssg"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import superjson from "superjson"
import { GetAttributesValues } from "@strapi/strapi"
import React from "react"
import { trpc } from "../../utils/trpc"
import { BaseLayout } from "../../layouts/BaseLayout"
import { Seo } from "../../components/SEO"
import { appRouter } from "../../server/router"
import { createContext } from "../../server/router/context"
import { BlogSeo } from "apps/frontend/components/BlogSEO"

export const getStaticProps = async (
  context: GetStaticPropsContext<{ post: string }>
) => {
  const post = context.params!.post as string

  const ssg = createSSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  })

  await ssg.fetchQuery("blog.getBySlug", post)
  await ssg.fetchQuery("nav.get", "footer")
  await ssg.fetchQuery("nav.get", "socials")
  await ssg.fetchQuery("nav.main")
  await ssg.fetchQuery("nav.user")

  // const trpcState = ssg.dehydrate({ dehydrateQueries: true })

  // console.log(trpcState.queries.map((x) => x.state.data))
  return {
    props: {
      trpcState: ssg.dehydrate(),
      post,
    },
    revalidate: 60 * 60 * 24 * 7,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ctx = await createContext()
  const { data: posts } = await ctx.strapi
    .from<GetAttributesValues<"api::blog-post.blog-post">>("blog-posts")
    .select(["slug"])
    .get()

  return {
    paths:
      posts?.reduce((acc, { slug }) => {
        if (!slug) return acc
        acc.push({
          params: {
            post: slug,
          },
        })

        return acc
      }, [] as { params: { post: string } }[]) ?? [],
    // https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
    fallback: "blocking",
  }
}

const BlogPost = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { post } = props

  const { data } = trpc.useQuery(["blog.getBySlug", post as string])
  const blogPost =
    data?.[0] ?? ({} as GetAttributesValues<"api::blog-post.blog-post">)
  const {
    title,
    body,
    image,
    blog_tags: blogTags,
    publishedAt,
    blog_authors: blogAuthors,
    publishDate,
  } = blogPost

  return (
    <>
      <BlogSeo post={blogPost} />
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
                publishDate ?? publishedAt
                  ? // @ts-expect-error for some reason this ternary doesn't work
                    new Date(publishDate ?? publishedAt)
                  : new Date()
              )}`}
            </span>
            <div className="flex gap-2">
              {blogTags?.map((tag) => (
                <Link
                  className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-900"
                  key={tag.title}
                  href={`/blog?tag=${tag.title}`}
                >
                  {tag.title}
                </Link>
              ))}
            </div>
            <div>
              {blogAuthors?.map((author) => (
                <Link href={`/team/${author.slug}`} key={author.slug}>
                  <Image
                    src={author?.image?.url}
                    width={author?.image?.width}
                    height={author?.image?.height}
                    alt={author?.image?.alt}
                  />
                  <h2>
                    {author.firstName} {author.lastName}
                  </h2>
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

BlogPost.getLayout = (page: React.ReactElement) => (
  <BaseLayout>{page}</BaseLayout>
)
