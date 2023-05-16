import SearchIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { ControlKeyIcon } from './ControlKeyIcon'

export function SearchFacade() {
  return (
    <div
      aria-label="Search posts"
      className="group flex h-full w-full items-center justify-between rounded-none border-black bg-white  text-black transition-colors hover:bg-orange-500 dark:text-white md:dark:bg-slate-800"
    >
      <span className="flex h-full w-12 items-center justify-center border-l-2 border-r-2 border-black bg-black text-white transition-colors group-hover:border-r-orange-500 group-hover:bg-orange-500 group-hover:text-black">
        <SearchIcon className="w-5" />
      </span>
      {/* <ControlKeyIcon /> */}
      <span className="hidden items-center justify-between gap-0 md:flex">
        <ControlKeyIcon />
        <kbd className="key">K</kbd>
      </span>
    </div>
  )
}
