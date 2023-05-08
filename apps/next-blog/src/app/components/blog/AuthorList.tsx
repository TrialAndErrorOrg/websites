import { cx } from '../../../utils/cx'
import type { Author } from '../../../utils/types'
import { getFirstAuthorLink } from '../../../utils/getFirstAuthorLink'

interface Props {
  authors: Author[]
}

export function AuthorList(props: Props) {
  const { authors } = props

  return (
    <div className="relative flex items-center gap-x-4">
      <div
        className={`relative flex w-full items-center justify-center `}
        style={{
          height: `${32 + (authors.length - 1) * 6}px`,
        }}
      >
        {authors.map((author, idx) => (
          <a
            href={`/author/${author.slug}`}
            className={cx(
              `group/one absolute h-8 min-w-[2rem] !rounded-none border-2  border-black px-2 `,
              idx === 0 && 'bg-white',
              idx === 1 && 'bg-orange-500 text-black',
              idx === 2 && 'bg-blue-500 text-white',
            )}
            style={{
              // '--size': '40px',
              left: `${idx * 24}px`,
              top: `${(authors.length - (idx + 1)) * 6}px`,
              zIndex: `${10 - idx}`,
            }}
          >
            <div
              className={cx(
                'relative flex h-full w-full items-center justify-center font-semibold uppercase ',
              )}
            >
              <span aria-hidden>{author.lastName?.charAt(0)}</span>
              <span
                className="line-clamp-1 hidden max-w-0  overflow-clip whitespace-nowrap transition-all duration-500 group-hover/one:block group-hover/one:max-w-xs md:block"
                aria-hidden
              >
                {author.lastName?.slice(1)}
              </span>
              <span className="sr-only">{author.lastName}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
