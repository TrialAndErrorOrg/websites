// import Picture from '../../components/core/Picture.astro'
import Image from 'next/image'
import { Tags } from './Tags'
import { Author } from './Author'
import { addBigLetterToBody } from '../../../utils/addBigLetterToBody'
import { cx } from '../../../utils/cx'

import { getFormattedDate } from '../../../utils/utils'
import type { BlogPost } from '../../../utils/types'
import readingTime from 'reading-time'
import { PostCard } from './PostCard'
import { FaOrcid } from 'react-icons/fa/index'
import GithubSlugger from 'github-slugger'
import { Section, TableOfContents } from '../client/TableOfContents'
import { License } from './License'
import { getTweet } from '../../../utils/getTweetData'
import { NamedList } from './NamedList'

interface Props {
  post: BlogPost
  prev?: BlogPost
  next?: BlogPost
  latest: BlogPost[]
}

export async function SinglePost(
  props: Props,
): // @ts-expect-error TODO: [BLOG] Remove ts-expect-error once Typescript 5.1 is stable
JSX.Element {
  const { post, prev, next, latest } = props
  const slugger = new GithubSlugger()
  const headingRegex = /<(h(2|3))(.*?)>(.*?)<\/\1>/gms

  const filteredBody = post.body
    .replace(/<\!--.*?-->/g, '')
    .replace(/<p>&nbsp;<\/p>/g, '')
    .replace(/&nbsp;/g, ' ')
    // only one h1
    .replace(/(<\/)?h1/g, '$1h2')
    // give h2 and h3 tags ids so the table of contents can link to them
    .replace(headingRegex, (_, tag, number, properties, content) => {
      return `<${tag} id="${slugger.slug(content)}"${properties}>${content}</${tag}>`
    })

  slugger.reset()

  const getHeadings = (body: string) =>
    (body?.match(headingRegex)?.map((heading) => {
      const [, tag, number, properties, content] = heading.match(headingRegex) ?? []
      return {
        title: content,
        children: [] as Section[],
        slug: slugger.slug(content),
      }
    }) ?? []) as Section[]

  const getTableOfContents = (body: string) => {
    const h2s = body.match(/<h2.*?>(.*?)<\/h2>/gms)

    if (!h2s) {
      return []
    }

    const sections: Section[] = []

    h2s.forEach((h2, i) => {
      const h2Text = h2.replace(/<.*?>/g, '')
      const h2Id = slugger.slug(h2Text)
      const nextH2 = h2s[i + 1]
      const nextH2Index = nextH2 ? body.indexOf(nextH2) : body.length
      const textBetweenH2s = body.slice(body.indexOf(h2) + h2.length, nextH2Index)
      sections.push({
        title: h2Text,
        slug: h2Id,
        children: getHeadings(textBetweenH2s),
      } as Section)
    })
    return sections
  }

  const tableOfContents = getTableOfContents(filteredBody)

  const bod = addBigLetterToBody(filteredBody)

  const authors = [...(post.team_members ?? []), ...(post.blog_authors ?? [])]

  const sleekUnderline =
    'prose-a:relative prose-a:after:absolute prose-a:after:bottom-0 prose-a:after:left-0 prose-a:after:flex prose-a:after:h-[2px] prose-a:after:w-0 prose-a:after:bg-black prose-a:after:transition-all prose-a:after:duration-200 hover:prose-a:after:w-full prose-a:no-underline prose-a:text-black dark:prose-a:text-white dark:prose-a:after:!w-0 dark:prose-a:after:bg-white'

  const bodySplitByEmbeddedTweetFigure = bod.split(/<\/?figure.*?>/gms)

  const bodySplitByEmbeddedTweet = await Promise.all(
    bodySplitByEmbeddedTweetFigure.map(async (body) => {
      const tweet = body.match(
        /<oembed url="(https?:\/\/twitter\.com\/.*?\/status\/\d+)"><\/oembed>/,
      )
      if (!tweet) return body
      const tweetId = tweet[0].match(/https?:\/\/twitter\.com\/.*?\/status\/(\d+)/)?.[1]
      if (!tweetId) return body
      return await getTweet(tweet[1])
    }),
  )

  const bodyWithEmbeddedTweets = bodySplitByEmbeddedTweet.join('')

  return (
    <section className="relative mx-auto flex flex-col bg-white dark:bg-slate-700">
      {post.image?.width && post.image?.height && (
        <Image
          src={post.image.formats?.large?.url ?? post.image.url}
          className="sticky top-12 max-h-[45vh] w-full border-b border-black object-cover dark:bg-slate-700 md:max-h-[60vh]"
          height={post.image?.formats?.large?.height ?? post.image.height}
          width={post.image?.formats?.large?.width ?? post.image.width}
          // format="webp"
          // fit="cover"
          loading="eager"
          // aspectRatio="21:9"
          alt={post.image.alt ?? post.seo?.metaDescription ?? ''}
        />
      )}
      <div className="relative w-full border-t-2 border-black bg-white">
        <article className="relative mx-auto grid w-full max-w-[100rem] grid-cols-12 border-black bg-white py-10 dark:border-white dark:bg-slate-700">
          <p className="col-span-8 col-start-2 max-w-3xl md:col-start-3">
            <time dateTime={post.publishDate ?? post.publishedAt}>
              {getFormattedDate(post.publishDate ?? post.publishedAt)}
            </time>{' '}
            ~ {Math.ceil(readingTime(post.body).minutes)} min read
          </p>

          {post.doi && (
            <p className="col-span-8 col-start-2 md:col-start-3">
              DOI:{' '}
              <a className="sleek-underline font-semibold" href={`https://doi.org/${post.doi}`}>
                https://doi.org/{post.doi}
              </a>
            </p>
          )}
          <header className="col-span-10 col-start-2 my-1 md:col-span-8 md:col-start-3 md:my-2">
            <h1 className="leading-tighter font-heading max-w-3xl text-3xl font-bold tracking-tighter text-black dark:text-white md:text-6xl">
              {post.title}
            </h1>
          </header>
          <div className="container col-span-10 col-start-2 mx-auto my-4 max-w-3xl md:col-span-5 md:col-start-3 md:mt-8">
            <Tags tags={post.blog_tags ?? []} />
          </div>

          <p className="col-span-9 col-start-2 flex flex-wrap gap-x-1 text-lg md:col-start-3 md:mt-8">
            By
            {authors.map((author, idx) => (
              <span className="flex items-center gap-1 ">
                <a
                  href={`/author/${author.slug}`}
                  className="sleek-underline font-semibold text-black dark:text-white"
                >
                  {author.firstName} {author.lastName}
                </a>
                {author.orcid && (
                  <a className="button-sleek !p-0 !text-[#a6ce39]" href={author.orcid}>
                    <FaOrcid />
                    <span className="sr-only">OrcID</span>
                  </a>
                )}
                {idx === authors.length - 1 ? '' : idx === authors.length - 2 ? ' & ' : ', '}
              </span>
            ))}
          </p>
          <div className="col-span-11 col-start-2 my-8 ml-4 flex h-4 items-center justify-start gap-2 p-1 md:sticky md:top-40 md:col-span-1 md:col-start-1 md:flex-col md:gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${post.title}&url=https%3A%2F%2Fblog.trialanderror.orgs%2F${post.slug}`}
            >
              <svg
                className="button-sleek h-10 w-10 text-black dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href={`http://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.trialanderror.org%2F${post.slug}`}
            >
              <svg
                className="button-sleek h-10 w-10 text-black dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href={`mailto:?subject=${post.title}&body=https%3A%2F%2Fblog.trialanderror.org%2F${post.slug}`}
            >
              <svg
                className="button-sleek h-10 w-10 text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
          <div
            className={cx(
              sleekUnderline,
              'prose-a:font-semibold prose md:prose-lg prose-h2:text-3xl prose-h3:text-2xl prose-p:mb-4 dark:prose-p:text-gray-50 dark:prose-a:underline dark:prose-invert prose-headings:mb-2 prose-p:font-medium prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter md:prose-h1:text-6xl md:prose-h2:text-5xl md:prose-h3:text-4xl dark:prose-a:text-orange-400 prose-ol:font-medium prose-ol:text-black prose-ol:list-decimal prose-img:rounded-none prose-img:border-2 prose-img:border-black-2 xl:prose-base dark:prose-blockquote:border-slate-200 prose-blockquote:border-black relative col-start-2 col-end-12 my-8 max-w-3xl dark:text-white md:col-start-3  md:col-end-10',
            )}
          >
            <div
              className="prose-headings:scroll-m-20 first-of-type:prose-p:mt-0 prose-a:scroll-m-20"
              dangerouslySetInnerHTML={{ __html: bodyWithEmbeddedTweets }}
            />
            <hr className="border border-black dark:border-white" />
          </div>

          {tableOfContents.length > 0 && (
            <div className="sticky right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 col-span-2 col-start-11 hidden h-max overflow-y-auto py-10  lg:block lg:w-64 xl:w-[19.5rem]">
              <TableOfContents tableOfContents={tableOfContents} />
            </div>
          )}
          <div className="col-span-10 col-start-2 grid gap-3 md:col-span-5 md:col-start-3">
            {authors.map((author) => (
              <Author className="" author={author} />
            ))}
            <div className="mt-16">
              <License post={post} />
            </div>
          </div>
        </article>
        <div className="relative mx-auto grid max-w-[100rem] grid-cols-12 bg-white py-8 dark:bg-slate-700">
          <div
            className={`col-span-10 col-start-2 grid md:col-span-7 md:col-start-3 ${
              prev && next ? 'grid-cols-2' : 'grid-cols-1'
            } mt-10 gap-4 text-lg font-medium`}
          >
            {prev && (
              <div className="group relative flex items-baseline gap-2 font-medium text-black dark:text-white">
                <span className="group-hover:underline">←</span>
                <a href={`/${prev.slug}`} className="link-overlay">
                  <span className="group-hover:underline">{prev.title}</span>
                </a>
              </div>
            )}
            {next && (
              <div className="group relative flex items-baseline gap-2 font-medium text-black dark:text-white">
                <a href={`/${next.slug}`} className="link-overlay ">
                  <span className="group-hover:underline">{next.title}</span>
                </a>
                <span className="group-hover:underline">→</span>
              </div>
            )}
          </div>
        </div>
        {post.related && <NamedList title="Related" posts={post.related} />}
        <NamedList title="Latest" posts={latest} />
      </div>
    </section>
  )
}
