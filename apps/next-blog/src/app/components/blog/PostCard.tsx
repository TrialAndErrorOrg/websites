import { cx } from '../../../utils/cx'
import { parseISO, format } from 'date-fns'
import PhotographIcon from '@heroicons/react/24/outline/PhotoIcon'
import Image from 'next/image'
import type { BlogPost } from '@/types'
import { AuthorList } from './AuthorList'
import { Tags } from './Tags'
import { FaArrowRight } from 'react-icons/fa/index'
import Link from 'next/link'

interface Props {
  post: BlogPost
  aspect?: any
  preloadImage?: boolean
  className?: string
  wide?: boolean
}

export function PostCard({
  post,
  aspect,
  preloadImage,
  wide,
  className: className = wide ? 'card grid md:flex group' : 'flex-col flex group card',
}: Props) {
  return (
    <div className={className}>
      <div
        className={cx(
          'overflow-hidden border-black bg-gray-100 transition-all dark:border-white  dark:bg-gray-800',
          wide ? 'md:aspect-square' : 'aspect-video',
          'relative',
          wide ? 'border-b-2 md:w-1/2 md:border-b-0 md:border-r-2' : 'border-b-2',
        )}
      >
        {post.image ? (
          <Image
            src={
              (wide ? post.image?.formats?.large?.url : post.image?.formats?.medium?.url) ??
              post.image.url
            }
            alt={post.image.alt || 'Thumbnail'}
            className={cx('h-full object-cover transition-all', !wide && 'w-full')}
            loading={preloadImage ? 'eager' : 'lazy'}
            height={
              (wide
                ? post.image?.formats?.large?.height ?? post.image?.formats?.medium?.height
                : post.image?.formats?.medium?.height) ?? post.image.height
            }
            width={
              (wide
                ? post.image?.formats?.large?.width ?? post.image?.formats?.medium?.width
                : post.image?.formats?.medium?.width) ?? post.image.width
            }
            // aspectRatio={aspect === 'landscape' ? '16:9' : '16:9'}
            // fit="cover"
          />
        ) : (
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotographIcon />
          </span>
        )}

        <Link
          className={`group/button absolute right-0 top-4 z-10 overflow-clip !rounded-none !border-2 !border-r-0 border-black !bg-orange-500 px-4 py-1  text-lg !font-semibold text-black dark:border-white dark:text-white md:text-xl `}
          href={`/blog/${post?.category?.title?.toLowerCase().replace(/ /g, '-')}`}
        >
          <span className="sleek-underline group-hover/button:after:w-full">
            {post.category?.title}
          </span>
        </Link>
        <Tags
          tags={post.blog_tags ?? []}
          className="absolute bottom-3 right-4 z-10 flex max-w-[80%] flex-wrap justify-end gap-x-1 text-sm"
        />
      </div>
      <div
        className={cx(
          'flex flex-col gap-2 bg-white dark:bg-slate-700 md:gap-6 ',
          wide ? 'p-6 pb-4 pt-6 md:w-1/2' : 'flex-grow p-6',
        )}
      >
        <div className="flex items-center justify-between">
          <time
            className="text-sm font-medium text-black dark:text-slate-300"
            date-time={post?.publishDate ?? post.publishedAt ?? post.createdAt}
          >
            {format(
              parseISO(
                (post?.publishDate ?? post?.publishedAt ?? post.createdAt)?.toString() ??
                  new Date().toISOString(),
              ),
              'MMMM dd, yyyy',
            )}
          </time>
        </div>
        <h2 className="text-brand-primary font-sans text-xl font-semibold leading-tight tracking-tighter dark:text-white md:text-2xl">
          {post.title}
        </h2>

        <div className="flex flex-col justify-end gap-y-4 md:flex-row md:items-center md:justify-between">
          <AuthorList authors={[...(post.team_members ?? []), ...(post.blog_authors ?? [])]} />
        </div>

        <div>
          {post.excerpt && (
            <p className="line-clamp-4 max-w-[50ch] font-medium leading-relaxed text-black dark:text-white">
              <Link href={`/${post.slug}`}>{post.excerpt}</Link>
            </p>
          )}
        </div>

        <Link href={`/${post.slug}`} className="link-overlay mt-auto">
          <span className="sleek-underline text-brand-primary dark:text-brand-primary relative z-10 ml-auto flex h-min w-max items-center gap-2 py-1 text-xl font-medium text-black dark:text-white">
            Read
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  )
}
