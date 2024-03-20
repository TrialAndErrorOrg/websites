import { BLOG } from '../../../config.mjs'

import { cleanSlug } from '../../../utils/permalinks'
import { getPosts } from '../../../utils/blog'
import { PostCard } from '../../components/blog/PostCard'
import type { Author, BlogPost } from '@/types'
import Image from 'next/image'
import { FaGithub, FaLink, FaLinkedin, FaOrcid, FaTwitter } from 'react-icons/fa/index'
import { EmailRevealButton } from '../../components/client/EmailRevealButton'
import { createMetadata } from 'apps/next-blog/src/utils/createMetadata'
import { getPerson } from 'apps/next-blog/src/utils/person'
import { Metadata } from 'next'

export async function generateStaticParams() {
  if (BLOG?.disabled || BLOG?.author?.disabled) return []

  const posts = await getPosts()

  const authors: Record<string, Author> = Object.fromEntries(
    posts
      .flatMap((post) => [...(post.blog_authors ?? []), ...(post.team_members ?? [])])
      .map((author) => [author.lastName, author]),
  )

  return Object.entries(authors).map(([lastName, author]) =>
    posts
      .filter((post) =>
        [...(post.blog_authors ?? []), ...(post.team_members ?? [])].some(
          (a: Author) => a.lastName === lastName,
        ),
      )
      .map((author) => ({
        slug: author.slug ?? cleanSlug(lastName ?? ''),
      })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const author = await getPerson(params.slug)
  if (!author) {
    return createMetadata()
  }

  return createMetadata({
    title: `${author.firstName} ${author.lastName}`,
    description: author.summary?.replace(/<[^>]*?>/gm, '') ?? '',
    canonical: `/author/${params.slug}`,
    image: `${process.env.OG_URL}/api/og/person?author=${author.slug}${
      'azureId' in author ? '' : `&guest=true`
    }`,
  })
}

export default async function AuthorPage({ params }: { params: { slug: string } }) {
  const author = await getPerson(params.slug)
  if (!author) {
    return <div>Author not found</div>
  }

  return (
    <article className="mx-auto scroll-m-14 px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          <span>
            {author.firstName} {author.lastName}
          </span>
        </h1>
      </header>
      {'show_pronouns' in author && author.show_pronouns && (
        <p className="text-center text-3xl text-orange-500 dark:text-gray-400 md:text-4xl">
          {author.pronouns}
        </p>
      )}
      <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center">
        {author.image?.url && (
          <Image
            src={author.image?.url}
            alt={author.image?.alt}
            width={author.image?.width}
            height={author.image?.height}
            className="mx-auto h-40 w-40 rounded-full border-2 border-black object-cover md:h-60 md:w-60"
          />
        )}

        <div className="my-6 flex flex-col items-center justify-center">
          {'position' in author && author.position && (
            <p className="md:text-2x text-center text-xl text-black dark:text-gray-400">
              {author.position}
            </p>
          )}

          <div className="col-span-4 row-span-1 flex flex-wrap items-center justify-center gap-1 leading-none">
            {author.orcid && (
              <a href={author.orcid} className="button-sleek flex items-center  text-black">
                <FaOrcid className="h-5 w-5" />
                <span className="sr-only">ORCID</span>
              </a>
            )}
            {author.twitter && (
              <a href={author.twitter} className="button-sleek z-10 flex items-center">
                <FaTwitter className="h-5 w-5" />
                <span className=" sr-only absolute">Twitter</span>
              </a>
            )}
            {author.github && (
              <a href={author.github} className="button-sleek z-10 flex items-center gap-1">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
            )}
            {'linkedIn' in author && author.linkedIn && (
              <a href={author.linkedIn} className="button-sleek z-10 flex items-center gap-1">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {author.personalWebsite && (
              <a
                href={author.personalWebsite}
                className="button-sleek z-10 flex items-center gap-1"
              >
                <FaLink className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </a>
            )}
            {author.email && (
              <div className="button-sleek z-10 flex items-center gap-1">
                <EmailRevealButton
                  classNameIcon="h-5 w-5"
                  classNameRevealed="underline font-semibold"
                  email={author.email}
                />
              </div>
            )}
          </div>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: author.summary || author.bio || '' }}
        />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <h2 className="md:text-4x text-2xl font-bold">
          Posts by {author.firstName} {author.lastName}
        </h2>
        {author?.blog_posts?.map((post) => (
          <PostCard wide post={post as BlogPost} key={(post as BlogPost).id} />
        ))}
      </div>
    </article>
  )
}
