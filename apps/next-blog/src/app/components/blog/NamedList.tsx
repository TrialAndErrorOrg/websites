import { BlogPost } from '../../../utils/types'
import { PostCard } from './PostCard'

interface NamedListProps {
  title: string
  posts: BlogPost[]
}

export function NamedList({ title, posts }: NamedListProps) {
  return (
    <div className="relative mx-auto grid max-w-[100rem] grid-cols-12 bg-white py-8 dark:bg-slate-700 dark:text-gray-50">
      <h2 className="col-span-10 col-start-2 my-4 text-4xl font-bold md:col-span-7 md:col-start-3">
        {title}
      </h2>
      <div className="col-span-10 col-start-2 flex max-w-5xl flex-col gap-4 md:col-span-9 md:col-start-3">
        {posts
          ?.sort((a, b) => {
            const aDate = a.publishDate ?? a.publishedAt
            const bDate = b.publishDate ?? b.publishedAt
            const aDateObj = aDate ? new Date(aDate) : new Date()
            const bDateObj = bDate ? new Date(bDate) : new Date()
            return bDateObj.valueOf() - aDateObj.valueOf()
          })
          .map((post) => (
            <PostCard post={post} wide />
          ))}
      </div>
    </div>
  )
}
