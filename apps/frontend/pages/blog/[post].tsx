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
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa"

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

const addBigLetterToBody = (body: string) =>
  body?.replace(/<p>\s*([A-Z])/, '<p><span class="lettrine">$1</span>')

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
    team_members: teamMembers,
  } = blogPost

  const bodyWithBigLetter = React.useMemo(
    () => addBigLetterToBody(body),
    [body]
  )

  const authors = React.useMemo(
    () => [...(blogAuthors ?? []), ...(teamMembers ?? [])],
    [blogAuthors, teamMembers]
  )
  return (
    <>
      <BlogSeo post={blogPost} />
      <article className="prose prose-slate mx-auto max-w-7xl py-10 px-4 prose-h2:font-black dark:prose-invert sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-prose flex-col gap-4 text-lg">
          <h1 className="tracking-tight">{title}</h1>
          <Image
            priority
            src={image?.url}
            width={image?.width}
            height={image?.height}
            alt={image?.alt}
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {blogTags?.map((tag) => (
                <Link
                  className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white no-underline transition-colors hover:bg-orange-600 hover:text-white"
                  key={tag.title}
                  href={`/blog?tag=${tag.title}`}
                >
                  {tag.title}
                </Link>
              ))}
            </div>
            <span className="text-sm">
              {`Published ${formatDistanceToNow(
                publishDate ?? publishedAt
                  ? // @ts-expect-error for some reason this ternary doesn't work
                    new Date(publishDate ?? publishedAt)
                  : new Date()
              )} ago`}
            </span>
            <span className="flex gap-4">
              {authors?.map((author, idx) => (
                <Link
                  href={`/team/${author.slug}`}
                  key={author.slug}
                  className="text-lg no-underline"
                >
                  {/* <Image
                      src={author?.image?.url}
                      width={author?.image?.width}
                      height={author?.image?.height}
                      alt={author?.image?.alt}
                    /> */}
                  {/* <span> */}
                  {author.firstName} {author.lastName}
                  {idx === authors.length - 1 ? "" : ", "}
                  {/* </span> */}
                </Link>
              ))}
            </span>
            <span className="flex gap-4 text-3xl">
              <a
                href={`https://twitter.com/intent/tweet?text=${title}&url=https%3A%2F%2Fblog.trialanderror.orgs%2F${post}`}
              >
                <FaTwitterSquare />
              </a>
              <a
                href={`http://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.trialanderror.org%2F${post}`}
              >
                <FaFacebookSquare />
              </a>
              <a
                href={`mailto:?subject=${title}&body=https%3A%2F%2Fblog.trialanderror.org%2F${post}`}
              >
                <FaEnvelopeSquare />
              </a>
            </span>
          </div>
        </div>
        <div
          className="prose prose-lg prose-slate mx-auto mt-6 dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: bodyWithBigLetter ?? "" }}
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
