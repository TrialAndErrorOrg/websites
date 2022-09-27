import { GetAttributesValues } from "@strapi/strapi"
import { GetStaticProps } from "next"
import Image from "next/future/image"
import Link from "next/link"

type BlogPost = GetAttributesValues<"api::blog-post.blog-post">

export const BlogPosts = ({
  posts,
  title,
}: {
  posts: BlogPost[]
  title?: string
}) => (
  <div className="relative bg-gray-50 px-4 pt-16 pb-20 dark:bg-blue-700 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-white dark:bg-blue-700 sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="dark:white text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
          {title ?? "From the blog"}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-slate-500 dark:text-slate-300 sm:mt-4" />
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col overflow-hidden shadow-lg"
          >
            <div className="flex-shrink-0">
              <Image
                // @ts-expect-error Strapi types media as any, which makes primary not work
                primary
                className="h-96 w-full object-cover"
                src={post?.image?.url}
                alt={post?.image?.altText}
                width={post?.image?.width}
                height={post?.image?.height}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-blue-500">
              <div className="flex-1">
                <div className="flex flex-wrap gap-x-3">
                  {post.blog_tags?.map(({ slug, title: postTitle }) => (
                    <Link
                      key={slug}
                      href={`/blog?tag=${slug ?? postTitle}`}
                      className="text-xs font-normal text-slate-400 hover:underline dark:text-slate-200"
                    >
                      #{postTitle}
                    </Link>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="group mt-2 block">
                  <h2 className="cia group-hover:cia-active box-border inline break-words border-none text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm font-normal text-slate-400 dark:text-slate-200">
                    {post.excerpt}
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                {post?.team_members?.map((author, idx) => (
                  <div
                    key={author.firstName}
                    className={`flex-shrink-0 shadow-sm -z-[${idx}] relative left-[${
                      idx * 2
                    }rem]`}
                  >
                    <Link
                      href={
                        author.slug ??
                        author?.lastName?.toLowerCase() ??
                        author?.firstName?.toLowerCase()
                      }
                    >
                      <span className="sr-only">{`${author.firstName}${author.lastName}`}</span>
                      {author?.image?.url ? (
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={author?.image?.url}
                          alt=""
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 capitalize text-white ">
                          {author?.lastName?.[0] ?? author?.firstName?.[0]}
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
                {post?.blog_authors?.map((author) => (
                  <div key={author.firstName} className="flex-shrink-0">
                    <Link
                      href={
                        author.slug ??
                        author?.lastName?.toLowerCase() ??
                        author?.firstName?.toLowerCase() ??
                        "/"
                      }
                    >
                      <span className="sr-only">{`${author.firstName}${author.lastName}`}</span>
                      {author.image?.url ? (
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={author?.image?.url}
                          alt=""
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 capitalize text-white">
                          {author?.lastName?.[0] ?? author?.firstName?.[0]}
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    <Link
                      href={
                        post?.team_members?.[0]?.slug ??
                        post?.team_members?.[0]?.lastName?.toLowerCase() ??
                        post.blog_authors?.[0]?.slug ??
                        post?.blog_authors?.[0]?.lastName?.toLowerCase() ??
                        "/"
                      }
                      className="text-slate-900 hover:underline dark:text-slate-50"
                    >
                      {post.team_members?.[0]?.firstName ??
                        post.blog_authors?.[0]?.firstName}{" "}
                      {post.team_members?.[0]?.lastName ??
                        post.blog_authors?.[0]?.lastName}
                    </Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-300">
                    <time dateTime={post.publishDate ?? post.publishedAt}>
                      {(post.publishDate ?? post.publishedAt
                        ? // @ts-expect-error for some reason this ternary doesn't work
                          new Date(post.publishDate || post.publishedAt)
                        : new Date()
                      ).toLocaleDateString("en-US", { dateStyle: "medium" })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    {/* <span>{post.readingTime} read</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
