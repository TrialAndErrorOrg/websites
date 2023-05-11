import { FaCreativeCommons, FaCreativeCommonsBy } from 'react-icons/fa/index'
import type { BlogPost } from '../../../utils/types'
import Link from 'next/link'

interface Props {
  post: BlogPost
}
export function License(props: Props) {
  const { post } = props
  const authors = [...(post.team_members || []), ...(post.blog_authors ?? [])]

  return (
    <div className="">
      <div className="flex max-w-xl flex-col gap-4">
        <h2 className="text-4xl font-bold">License</h2>
        <span className="license">
          <a
            rel="license"
            className="flex gap-2 text-lg text-black dark:text-white"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            <FaCreativeCommons className="h-8 w-8 text-black dark:text-white" />
            <FaCreativeCommonsBy className="h-8 w-8 text-black dark:text-white" />
          </a>
        </span>
        <p>
          <a
            // xmlnsDct="http://purl.org/dc/terms/"
            href="http://purl.org/dc/dcmitype/Text"
            property="dct:title"
            rel="dct:type"
          >
            <em>{post.title}</em>
          </a>{' '}
          by{' '}
          {authors.map((author, idx) => (
            <span>
              <Link
                // xmlnsCc="http://creativecommons.org/ns#"
                property="cc:attributionName"
                rel="cc:attributionURL"
                href={`/author/${author.slug}`}
                className="sleek-underline font-bold"
              >
                {`${author.firstName} ${author.lastName}`}
              </Link>
              {
                // idx < authors.length - 1 ? ',' : authors.length > 1 ? ' and ' : ''
                // comma separated list of authors, the last one is separated by 'and'
                idx < authors.length - 2 ? ',' : idx === authors.length - 2 ? ' and ' : ' '
              }
            </span>
          ))}
          is licensed under a{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution 4.0 International License.
          </a>
        </p>
      </div>
    </div>
  )
}
