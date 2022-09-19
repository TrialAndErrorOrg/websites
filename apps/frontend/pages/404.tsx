import Link from "next/link"
import Image from "next/image"
import { BaseLayout } from "../layouts/BaseLayout"

/* This example requires Tailwind CSS v2.0+ */
const Example = () => (
  <>
    {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Link href="/" className="inline-flex">
            <span className="sr-only">Center of Trial and Error</span>
            <Image
              className="h-12 w-auto"
              src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_blue_background_b87382260b.svg"
              width="100"
              height="100"
              alt=""
            />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-base font-medium text-orange-600 hover:text-orange-500"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link
            href="mailto:support@trialanderror.org"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Contact Support
          </Link>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <Link
            href="https://status.trialanderror.org"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Status
          </Link>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <Link
            href="https://twitter.com/jtrialerror"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Twitter
          </Link>
        </nav>
      </footer>
    </div>
  </>
)

export default Example

Example.getLayout = (page: React.ReactElement) => (
  <BaseLayout>{page}</BaseLayout>
)
