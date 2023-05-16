// const { prevUrl, nextUrl, prevText = 'Newer posts', nextText = 'Older posts' }
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export function Pagination({
  prevUrl,
  nextUrl,
  prevText = 'Newer posts',
  nextText = 'Older posts',
}: {
  prevUrl: string
  nextUrl: string
  prevText?: string
  nextText?: string
}): JSX.Element {
  return (
    <div className="container flex">
      <div className="container mx-auto flex flex-row justify-between">
        <a
          href={prevUrl}
          className={`btn mr-2 px-2 font-medium text-gray-600 shadow-none hover:text-gray-900 dark:text-gray-400 dark:hover:text-white
      ${!prevUrl ? 'invisible' : ''}`}
        >
          <div className="flex flex-row align-middle">
            <ArrowLeftIcon className="h-6 w-6" />
            <p className="ml-2">{prevText}</p>
          </div>
        </a>
        <a
          href={nextUrl}
          className={`btn px-2 font-medium text-gray-600 shadow-none hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${
            !nextUrl ? 'invisible' : ''
          }`}
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2">{nextText}</span>
            <ArrowRightIcon className="h-6 w-6" />
          </div>
        </a>
      </div>
    </div>
  )
}
