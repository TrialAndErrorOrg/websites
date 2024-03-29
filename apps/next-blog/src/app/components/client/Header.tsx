'use client'

import { VscGithubAlt, VscRss } from 'react-icons/vsc'
import { ToggleMenu } from '../ToggleMenu'
import { Logo } from './Logo'
import { Suspense, lazy, useState } from 'react'
import { SearchFacade } from './SearchFacade'

const Search = lazy(() => import('./Search'))

export function Header() {
  const [hidden, setHidden] = useState(true)
  return (
    <div className="flex h-full w-full grid-cols-4 flex-col items-center justify-between py-0 md:flex-row md:justify-between lg:grid-cols-12">
      <div className="col-span-2 col-start-1 flex h-full w-full justify-between border-black dark:border-white lg:col-span-1">
        <a
          className="group flex h-full w-16 items-center justify-center !rounded-none !border-r-2 !border-r-black bg-black p-2 transition-colors hover:bg-orange-500 hover:fill-black dark:border-r-0 dark:border-white dark:!border-r-white md:w-20 md:p-4"
          href={'/'}
        >
          <span className="sr-only">Home</span>
          <span className="h-8 w-8 md:h-14 md:w-14">
            <Logo />
          </span>
        </a>
        <div className="col-start-3 mr-3 flex items-center md:hidden">
          <ToggleMenu setHidden={setHidden} />
        </div>
      </div>

      <nav
        className={`${
          hidden ? 'hidden' : ''
        } h-screen w-full items-center dark:text-slate-200 md:flex md:h-auto md:w-auto md:gap-4 md:text-2xl lg:col-end-10`}
        aria-label="Main navigation"
        id="menu"
      >
        <ul className="collapsed flex h-full w-full flex-col gap-8 px-4 pt-8 text-lg md:w-auto md:flex-row md:gap-4 md:self-center md:px-0 md:pt-0">
          <li>
            <a
              className="sleek-underline flex items-center transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href={'/blog/1'}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="sleek-underline flex items-center transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href={'https://trialanderror.org'}
            >
              Center
            </a>
          </li>
          <li>
            <a
              className="sleek-underline flex items-center transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white"
              href={'https://journal.trialanderror.org'}
            >
              Journal
            </a>
          </li>

          <li className="md:hidden">
            <a
              className="button-sleek flex w-full items-center gap-2 font-medium text-black focus:outline-none dark:focus:ring-white"
              aria-label="RSS Feed"
              href="/rss.xml"
            >
              <VscRss className="h-5 w-5" />
              RSS Feed
            </a>
          </li>
          <li className="md:hidden">
            <a
              href="https://github.com/TrialAndErrorOrg/websites"
              className="button-sleek flex items-center gap-2 rounded-lg font-medium focus:outline-none dark:focus:ring-white"
              aria-label="Center of Trial & Error Github"
            >
              <VscGithubAlt className="h-5 w-5" />
              Source Code
            </a>
          </li>
          {!hidden && (
            <li className="h-12 w-full self-end justify-self-end border-2 border-black md:hidden">
              <Suspense fallback={<SearchFacade />}>
                <Search />
              </Suspense>
            </li>
          )}
        </ul>
        <div className="mx-2 mb-4 ml-2 flex items-center md:mb-0 md:mr-4 md:self-center">
          <div className="hidden items-center md:flex">
            <a
              className="button-sleek inline-flex items-center text-sm text-black focus:outline-none focus:ring-4 focus:ring-black dark:focus:ring-white"
              aria-label="RSS Feed"
              href="/rss.xml"
            >
              <VscRss className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/journaloftrialanderror/centeroftrialanderror.com"
              className="button-sleek inline-block rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-black dark:focus:ring-white"
              aria-label="Center of Trial & Error Github"
            >
              <VscGithubAlt className="h-6 w-6" />
            </a>
          </div>
        </div>
      </nav>
      <div className="col-start-4 ml-2 hidden h-full md:col-span-2 md:col-start-11 md:flex md:w-60">
        {hidden && (
          <Suspense fallback={<SearchFacade />}>
            <Search />
          </Suspense>
        )}
      </div>
    </div>
  )
}
