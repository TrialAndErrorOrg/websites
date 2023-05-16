import type { BlogPost } from '../../../utils/types'
import { PostCard } from './PostCard'

export function BlogList(props: { posts: BlogPost[] }) {
  const { posts } = props

  return (
    <ul>
      {posts.map((post: BlogPost) => (
        <li className="card mb-10 md:mb-16" key={post.id}>
          <PostCard post={post} wide />
        </li>
      ))}
    </ul>
  )
}
