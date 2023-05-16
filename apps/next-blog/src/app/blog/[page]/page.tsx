import { BlogPost } from '../../../utils/types'
import { getAllPosts } from '../../../utils/blog'
import { Pagination } from '../../components/blog/Pagination'
import { PostCard } from '../../components/blog/PostCard'
import { notFound } from 'next/navigation'
import { getUniqueCategoriesAndTags } from '../../../utils/getUniqueCategoriesAndTags'

export async function generateStaticParams() {
  const posts = (await getAllPosts()) ?? []

  const postsPerPage = 10

  const totalPages = Math.ceil(posts.length / postsPerPage)

  const blogPages = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))
  console.log(blogPages)

  return blogPages
}

export default async function BlogPage({
  params: { page, final },
}: {
  params: { page: string; final: string }
}) {
  console.log(page, typeof page)
  const posts: BlogPost[] = (await getAllPosts()) ?? []
  let actualPosts = []
  console.log(posts.length)

  const { categories, tags } = getUniqueCategoriesAndTags(posts)

  let intPage = 0
  let nextUrl = ''
  let prevUrl = ''

  let isBasicBlog = false

  try {
    intPage = parseInt(page)
  } catch (e) {}
  console.log('intPage', intPage)

  const pageType =
    intPage && !isNaN(intPage)
      ? 'blog'
      : tags.some((tag) => tag.slug === page)
      ? 'tag'
      : categories.some((cat) => cat.slug === page)
      ? 'category'
      : ''

  if (!pageType) {
    console.log('404')
    return notFound()
  }

  let title = 'Blog'

  if (pageType === 'blog') {
    if (intPage < 1 || intPage > posts.length / 10 + 1) {
      return notFound()
    }
    isBasicBlog = true

    actualPosts = posts.slice((intPage - 1) * 10, intPage * 10)
    const hasNext = intPage < posts.length / 10 + 1
    const hasPrev = intPage > 1

    nextUrl = hasNext ? `/blog/${intPage + 1}` : ''
    prevUrl = hasPrev ? `/blog/${intPage - 1}` : ''
  }

  if (pageType === 'category') {
    actualPosts = posts.filter((post) => {
      if (post.category?.slug === page) {
        title = post.category?.title
        return true
      }
      return false
    })
  }

  if (pageType === 'tag') {
    actualPosts = posts.filter((post) =>
      post.blog_tags?.some((tag) => {
        if (tag.slug === page) {
          title = tag.title
          return true
        }
        return false
      }),
    )
  }

  const Title =
    pageType === 'blog' ? (
      <h1 className="inline text-center font-sans text-8xl font-black">Blog</h1>
    ) : pageType === 'tag' ? (
      <h1 className="button px-4 py-1 text-xl">{title}</h1>
    ) : (
      <h1 className="border-2 border-black bg-orange-500 px-4 py-1  text-2xl font-bold">{title}</h1>
    )

  return (
    <>
      {Title}
      {posts.map((post) => (
        <PostCard post={post} wide key={post.id} />
      ))}
      {isBasicBlog && <Pagination prevUrl={prevUrl} nextUrl={nextUrl} />}
    </>
  )
}
