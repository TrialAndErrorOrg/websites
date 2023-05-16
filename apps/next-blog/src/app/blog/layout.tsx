import React from 'react'
import { getAllPosts, getCategories, getTags } from '../../utils/blog'
import Link from 'next/link'
import { getUniqueCategoriesAndTags } from '../../utils/getUniqueCategoriesAndTags'
import { Tags } from '../components/blog/Tags'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const posts = (await getAllPosts()) ?? []

  const { categories, tags } = getUniqueCategoriesAndTags(posts)

  return (
    <div className="flex flex-col p-10 md:flex-row">
      <aside className="flex max-w-md flex-col gap-4 p-4">
        <h2 className="text-lg font-bold">Tags</h2>
        <Tags tags={tags} />

        <h2 className="text-lg font-bold">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="mx-auto flex w-[80vw] flex-col items-center gap-6">{children}</main>
    </div>
  )
}
