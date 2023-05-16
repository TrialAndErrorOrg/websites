import React from 'react'
import { getAllPosts, getCategories, getTags } from '../../utils/blog'
import Link from 'next/link'
import { getUniqueCategoriesAndTags } from '../../utils/getUniqueCategoriesAndTags'
import { Tags } from '../components/blog/Tags'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const posts = (await getAllPosts()) ?? []

  const { categories, tags } = getUniqueCategoriesAndTags(posts)

  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 p-10 md:flex-row">
        <aside className="flex flex-col gap-4 self-start px-4 md:sticky md:top-20 md:mt-44 md:max-w-sm">
          <h2 className="text-lg font-bold">Tags</h2>
          <Tags tags={tags} />

          <h2 className="text-lg font-bold">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/blog/${category.slug}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="mx-auto flex w-[80vw] flex-col items-center gap-6">{children}</main>
      </div>
    </>
  )
}
