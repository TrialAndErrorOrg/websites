import { SITE } from '../config.mjs'
import { getAllPosts } from '../utils/blog'
import { createMetadata } from '../utils/createMetadata'
import { PostCard } from './components/blog/PostCard'
import Link from 'next/link'
import { SignUpWrapper } from './components/client/SignUpWrapper'
import { draftMode } from 'next/headers'

export const metadata = createMetadata({
  description: SITE.description,
})

export const dynamic = 'force-static'

export default async function Index() {
  const { isEnabled } = await draftMode()

  const posts = (await getAllPosts(isEnabled)) ?? []

  return (
    <main>
      <div className="cols mx-6 grid max-w-[100rem] grid-cols-12 px-5 py-10 md:mx-auto md:px-0">
        <div className="col-span-full flex justify-center pb-10 pt-20 md:col-span-11 md:col-start-2">
          <h1 className="group relative -ml-24 mr-0 inline-flex w-min text-center text-4xl font-semibold leading-none tracking-tighter text-black md:text-left lg:text-6xl">
            <Link
              href="https://trialanderror.org"
              className="font-overpass !absolute -top-10 z-20 flex transform-gpu flex-col pl-20 text-black transition-all duration-500 ease-out will-change-transform hover:translate-x-72 hover:underline"
            >
              <span className="relative z-30 w-max border-4 border-b-0 border-black bg-orange-500 p-2 pb-0 pr-4 md:px-4 lg:border-4 lg:border-b-0 lg:pb-0 lg:pl-8 lg:pr-14 lg:pt-6">
                Center of
              </span>
              <span className="relative -mt-1 w-max border-4 border-black bg-orange-500 p-2 md:px-4 lg:-mt-1 lg:border-4 lg:px-8">
                Trial & Error.
              </span>
            </Link>
            <a
              href="https://journal.trialanderror.org"
              className="font-overpass !absolute -top-5 z-30 flex transform-gpu flex-col pl-10 text-white transition-all duration-500 ease-out will-change-transform hover:translate-x-64 hover:underline"
            >
              <span className="relative z-30 w-max border-4 border-b-0 border-black bg-blue-500 p-2 pb-0 pr-4 md:px-4 lg:border-4 lg:border-b-0 lg:px-8 lg:pb-0 lg:pt-6">
                Journal of
              </span>
              <span className="relative -mt-1 w-max border-4 border-black bg-blue-500 p-2 md:px-4 lg:-mt-1 lg:border-4 lg:px-8">
                Trial & Error.
              </span>
            </a>

            <span className="group pointer-events-none relative z-40 flex flex-col bg-none">
              <span className="pointer-events-auto relative z-40 w-max rounded-b-none border-4 border-b-0 border-black bg-white p-2 pb-0 pr-4 transition-all md:px-8 md:pr-12 lg:border-4 lg:border-b-0 lg:pb-0 lg:pt-6">
                A Blog of
              </span>
              <span className="pointer-events-auto relative -mt-1 w-max rounded-tl-none border-4 border-black bg-white p-2 md:px-4 lg:border-t-4 lg:px-8">
                Trial & Error.
              </span>
            </span>
          </h1>
        </div>
        <div className="col-span-full md:col-span-10 md:col-start-2">
          <PostCard post={posts[0]} className="card group my-10 grid md:flex" preloadImage wide />
        </div>

        <div className="col-span-full md:col-span-10 md:col-start-2">
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.slice(1, 7).map((post) => (
              <PostCard key={post.title} post={post} aspect="square" />
            ))}
          </div>
        </div>
        <div className="col-span-full my-32 flex items-center justify-center md:col-span-10 md:col-start-2">
          <div className="mx-auto grid items-center justify-between gap-10 p-10 md:grid-cols-3">
            <div className="flex flex-col gap-10 md:col-span-2">
              <h2 className="text-center font-sans text-6xl font-black tracking-tighter text-black dark:text-white md:text-left xl:text-7xl">
                Subscribe to our <br className="hidden md:block" />
                <span className="text-orange-500">newsletter!</span>
              </h2>
              <SignUpWrapper mailId={'email'} />
            </div>

            <p className="mx-auto text-center font-sans text-2xl font-medium tracking-tighter text-black dark:text-white md:text-3xl">
              Keep up to date with the Blog,{' '}
              <a href="https://trialanderror.org" className="sleek-underline font-bold">
                Center
              </a>
              , and <br />
              <a href="https://journal.trialanderror.org" className="sleek-underline font-bold">
                Journal of Trial & Error
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-full md:col-span-10 md:col-start-2">
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.slice(7).map((post) => (
              <PostCard key={post.title} post={post} aspect="square" />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
