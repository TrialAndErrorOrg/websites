import { GetAttributesValues } from "@strapi/strapi"
import Image from "next/future/image"
import Link from "next/link"

type BlogPost = GetAttributesValues<"api::blog-post.blog-post">

export const BlogPosts = ({ posts }: { posts: BlogPost[] }) => (
  <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4" />
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <Image
                className="h-96 w-full object-cover"
                src={post.image.url}
                alt={post.image.altText}
                width={post.image.width}
                height={post.image.height}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <div className="flex flex-wrap gap-x-3">
                  {post.blog_tags?.map(({ slug, title }) => (
                    <Link
                      key={slug}
                      href={`/blog/${slug ?? title}`}
                      className="text-xs font-normal text-slate-400 hover:underline"
                    >
                      #{title}
                    </Link>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-sm font-normal text-slate-400">
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 capitalize text-white dark:bg-blue-500">
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
                        author?.firstName?.toLowerCase()
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 capitalize text-white dark:bg-blue-500">
                          {author?.lastName?.[0] ?? author?.firstName?.[0]}
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <Link
                      href={
                        post?.team_members?.[0]?.slug ??
                        post?.team_members?.[0]?.lastName?.toLowerCase() ??
                        post.blog_authors?.[0]?.slug ??
                        post?.blog_authors?.[0]?.lastName?.toLowerCase() ??
                        "/"
                      }
                      className="hover:underline"
                    >
                      <a>
                        {post.team_members?.[0]?.firstName ??
                          post.blog_authors?.[0]?.firstName}{" "}
                        {post.team_members?.[0]?.lastName ??
                          post.blog_authors?.[0]?.lastName}
                      </a>
                    </Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.publishDate ?? post.publishedAt}>
                      {(post.publishDate || post.publishedAt
                        ? new Date(post.publishDate || post.publishedAt)
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
