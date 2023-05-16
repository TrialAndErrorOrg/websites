import Link from 'next/link'

export const metadata = {
  title: '404 - Page not found',
}

export default function NotFound() {
  return (
    <section className="flex h-full items-center p-16">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-bold">
            <span className="sr-only">Error</span>
            <span className="from-primary-500 to-secondary-500 bg-gradient-to-r bg-clip-text text-transparent">
              404
            </span>
          </h2>
          <p className="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mb-8 mt-4 text-lg text-gray-600 dark:text-slate-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            href={'/'}
            className="btn ml-4 bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
