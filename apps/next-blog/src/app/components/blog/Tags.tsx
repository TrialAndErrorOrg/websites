import Link from 'next/link'
import type { BlogTag } from '../../../utils/types'

interface Props {
  tags: BlogTag[]
  className?: string
}

export function Tags(props: Props) {
  const { tags, className: className = 'flex flex-wrap gap-x-1 text-sm' } = props

  return Array.isArray(tags) ? (
    <ul className={className}>
      {tags.map((tag) => (
        <li>
          <Link
            className="button mb-2 flex items-center px-2 py-1 text-xs font-medium  leading-none "
            href={`/tag/${tag.slug}`}
          >
            {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : null
}
