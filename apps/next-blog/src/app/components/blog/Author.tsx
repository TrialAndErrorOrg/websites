import { cx } from '../../../utils/cx'
import type { Author } from '../../../utils/types'
import { Image } from '@astrojs/image/components'
import { FaOrcid, FaTwitter, FaGithub, FaLink, FaLinkedin } from 'react-icons/fa/index'

interface Props {
  author: Author
  className?: string
}
export function Author(props: Props) {
  const { author, className: className } = props
  const firstLink = author.personalWebsite || author.orcid || author.twitter || author.github

  return (
    <div className={cx(className, 'card ')}>
      <div className="group z-50 grid w-full grid-cols-4 gap-x-4 !bg-white p-4 py-4 dark:!bg-slate-700 md:gap-x-0 md:px-2">
        <div className="col-span-4 mb-3 flex h-20 w-20 items-center justify-center self-center justify-self-center rounded-full border-2 border-black bg-orange-500 text-xl font-black capitalize text-black md:col-span-1 md:row-span-2 md:mb-0 md:h-20 md:w-20">
          {author.image?.url ? (
            <Image
              src={author?.image?.formats?.thumbnail?.url || author?.image?.url}
              alt={author?.image?.alt ?? author?.lastName}
              height={author?.image?.formats?.thumbnail?.height || author?.image?.height}
              width={author?.image?.formats?.thumbnail?.width || author?.image?.width}
              className="col-span-1 row-span-2 h-20  w-20 self-center justify-self-center rounded-full border-2 border-black object-cover dark:border-white"
            />
          ) : (
            <span>{author.lastName?.[0] ?? author?.firstName?.[0]}</span>
          )}
        </div>
        <a
          className="link-overlay col-span-3 row-span-1 text-xl font-bold md:text-2xl"
          href={`/author/${author.slug}`}
        >
          {author.firstName} {author.lastName}
        </a>
        {'position' in author && author.position && (
          <div className="col-span-3 row-span-1">{author.position}</div>
        )}
        {author.summary && (
          <div
            style={{ hyphens: 'auto' }}
            className="col-span-4 row-span-2 my-2 text-sm md:col-span-3 md:col-start-2 md:pr-8 "
            dangerouslySetInnerHTML={{ __html: author.summary }}
          />
        )}
        {firstLink && (
          <div className="z-10 col-span-4 row-span-1 -ml-1 mb-3  flex h-5 flex-wrap gap-1 leading-none md:col-span-3 md:col-start-2">
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
          </div>
        )}
      </div>
    </div>
  )
}
