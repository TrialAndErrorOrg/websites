'use client'

import { InstantSearch, useInstantSearch } from 'react-instantsearch-hooks-web'
import { Fragment, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import SearchIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { FaArrowRight } from 'react-icons/fa/index'
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon'
import { cx } from '../../../utils/cx'
import { instantMeiliSearch, MeiliSearchResponse } from '@meilisearch/instant-meilisearch'
import { useSearchBox } from 'react-instantsearch-hooks-web'
import type { MeiliSearchBlogPostResult } from '@/types'
import { ControlKeyIcon } from './ControlKeyIcon'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_URL!,
  process.env.NEXT_PUBLIC_MEILISEARCH_API_SEARCH_KEY!,
)

const getHighlightedParts = (result: string, query?: string) => {
  const thing = /\n/.test(result)
    ? result.split('\n').filter((line, idx) => {
        if (idx === 0 && !query) return true
        return line.includes('ais-highlight')
      })?.[0] ?? result
    : result

  const parts = thing.split(/\/ais-highlight__|__ais-highlight/)?.map((part) => {
    if (/__.*?__/.test(part)) {
      return {
        isHighlighted: true,
        value: part.replace(/__/g, ''),
      }
    }
    return {
      isHighlighted: false,
      value: part,
    }
  })
  return parts ?? []
}

const cleanHTML = (html: string) => {
  return html
    .replace(/<\/(p|h\d|div)>/g, '\n')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
}

function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
}
const ACTION_KEY_DEFAULT = 'Ctrl' as const
const ACTION_KEY_APPLE = '⌘' as const

export function Search() {
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const [key, setKey] = useState<typeof ACTION_KEY_APPLE | typeof ACTION_KEY_DEFAULT | null>(null)

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      isAppleDevice() ? setKey(ACTION_KEY_APPLE) : setKey(ACTION_KEY_DEFAULT)
    }
  }, [])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (event: KeyboardEvent) => {
      setIsOpen(true)
    },
    [setIsOpen],
  )

  useSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  return (
    <>
      <button
        aria-label="Search posts"
        ref={searchButtonRef}
        className="group flex h-full w-full items-center justify-between rounded-none border-black bg-white  text-black transition-colors hover:bg-orange-500 dark:text-white md:dark:bg-slate-800"
        onClick={onOpen}
      >
        <span className="flex h-full w-12 items-center justify-center border-l-2 border-r-2 border-black bg-black text-white transition-colors group-hover:border-r-orange-500 group-hover:bg-orange-500 group-hover:text-black">
          <SearchIcon className="w-5" />
        </span>
        {/* <ControlKeyIcon /> */}
        <span className="hidden items-center justify-between gap-0 md:flex">
          {key !== null && (
            <>
              <kbd className="key">{key === ACTION_KEY_DEFAULT ? <ControlKeyIcon /> : key}</kbd>
              <kbd className="key">K</kbd>
            </>
          )}
        </span>
      </button>
      <InstantSearch searchClient={searchClient} indexName="blog-post">
        {isOpen && <SearchModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </InstantSearch>
    </>
  )
}

export function SearchModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [query, schmetQuery] = useState('')

  const { query: q, refine } = useSearchBox({})

  const setQuery = useCallback(
    (q: string) => {
      schmetQuery(q)
      if (isOpen) {
        refine(q)
      }
    },
    [schmetQuery, refine, isOpen],
  )

  const { results: res } = useInstantSearch()
  const results = res as unknown as MeiliSearchResponse<MeiliSearchBlogPostResult>
  const router = useRouter()

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        id="search-modal"
        className="fixed inset-0 top-20 z-[100] overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-3xl transform divide-y-2 divide-black overflow-hidden  border-2  border-black bg-white text-black shadow-[8px_8px_0_#000] ring-1 ring-black ring-opacity-5 transition-all dark:divide-slate-600 dark:bg-blue-500 dark:text-white"
            onChange={(item: MeiliSearchBlogPostResult) => router.push(`/${item.slug}`)}
          >
            {({ activeOption }) => (
              <>
                <div className="relative">
                  <SearchIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-black placeholder-black focus:ring-0 dark:text-slate-50"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {results?.hits?.length > 0 && (
                  <div className="flex divide-x-2 divide-black dark:divide-slate-600">
                    <div
                      className={cx(
                        'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto p-4 px-6',
                        activeOption && 'sm:h-96',
                      )}
                    >
                      {query === '' && (
                        <h2 className="mb-4 mt-2 text-xs font-semibold text-black dark:text-slate-300">
                          Recent searches
                        </h2>
                      )}
                      <Combobox.Options
                        static
                        hold
                        className="-mx2 text-sm text-black dark:text-slate-200"
                      >
                        {results?.hits?.map((item) => {
                          return (
                            <Combobox.Option
                              key={item.id}
                              value={item}
                              as="a"
                              href={`/${item.slug}`}
                              className={({ active }) =>
                                cx(
                                  'flex cursor-default select-none  p-2 transition-[shadow_translate_border-color] ease-out',
                                  active &&
                                    '-translate-x-1 -translate-y-1 cursor-pointer border-black shadow-[4px_4px_0_#000] ring-2 ring-black focus-visible:border-orange-500 dark:bg-blue-300',
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div
                                    className={cx(
                                      'flex h-10 w-10 flex-none items-center justify-center overflow-clip rounded-full',
                                      active
                                        ? 'bg-orange-500 dark:bg-slate-100'
                                        : 'bg-black dark:bg-slate-500',
                                    )}
                                  >
                                    <Image
                                      src={item.image?.formats?.thumbnail.url ?? item.image?.url}
                                      alt=""
                                      height={
                                        item.image?.formats?.thumbnail.height ?? item.image?.height
                                      }
                                      width={
                                        item.image?.formats?.thumbnail.width ?? item.image?.width
                                      }
                                      className="h-8 w-8 rounded-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-4 flex-auto">
                                    <p
                                      className={cx(
                                        'text-sm font-bold',
                                        active
                                          ? 'text-black dark:text-slate-50'
                                          : 'text-gray-800 dark:text-slate-200',
                                      )}
                                    >
                                      {getHighlightedParts(item._highlightResult.title.value).map(
                                        (part, idx) => {
                                          return part.isHighlighted ? (
                                            <mark
                                              key={part.value + part.isHighlighted + idx}
                                              className="bg-orange-500 text-white"
                                            >
                                              {part.value}
                                            </mark>
                                          ) : (
                                            <span key={part.value + idx}>{part.value}</span>
                                          )
                                        },
                                      )}
                                    </p>
                                    <div className={'flex flex-wrap gap-1 text-xs'}>
                                      {item._highlightResult.blog_tags.map((tag) => (
                                        <span
                                          key={tag.slug.value}
                                          className="rounded-full border border-black px-2 text-xs text-black"
                                        >
                                          {getHighlightedParts(tag.title.value).map((part, idx) =>
                                            part.isHighlighted ? (
                                              <mark
                                                className="bg-orange-500 text-white"
                                                key={part.value + idx}
                                              >
                                                {part.value}
                                              </mark>
                                            ) : (
                                              <span key={part.value + idx}>{part.value}</span>
                                            ),
                                          )}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              )}
                            </Combobox.Option>
                          )
                        })}
                      </Combobox.Options>
                    </div>

                    {activeOption && (
                      <div className="hidden h-96 w-1/2 flex-none flex-col divide-y-2 divide-black overflow-y-auto dark:divide-slate-600 sm:flex">
                        <div className="flex-none p-6 text-center">
                          <img
                            src={
                              activeOption.image?.formats?.thumbnail.url ?? activeOption.image?.url
                            }
                            alt=""
                            height={
                              activeOption.image?.formats?.thumbnail?.height ??
                              activeOption.image.height
                            }
                            width={
                              activeOption.image?.formats?.thumbnail?.width ??
                              activeOption.image.width
                            }
                            className="mx-auto h-16 w-16 rounded-full object-cover"
                          />
                          <h2 className="mt-3 font-semibold text-black dark:text-slate-50">
                            {getHighlightedParts(activeOption._highlightResult.title.value).map(
                              (part, idx) => {
                                return part.isHighlighted ? (
                                  <mark key={part.value + idx} className="bg-orange-500 text-white">
                                    {part.value}
                                  </mark>
                                ) : (
                                  part.value
                                )
                              },
                            )}
                          </h2>
                          <p className="text-sm leading-6 text-black dark:text-slate-400">
                            {getHighlightedParts(activeOption._highlightResult.excerpt.value).map(
                              (part, idx) => {
                                return part.isHighlighted ? (
                                  <mark key={part.value + idx} className="bg-orange-500 text-white">
                                    {part.value}
                                  </mark>
                                ) : (
                                  part.value
                                )
                              },
                            )}
                          </p>
                          <time
                            className="text-xs text-black dark:text-slate-300"
                            dateTime={
                              activeOption.publishDate ??
                              activeOption.publishedAt ??
                              activeOption.createdAt
                            }
                          >
                            {new Date(
                              activeOption.publishDate ??
                                activeOption.publishedAt ??
                                activeOption.createdAt,
                            ).toDateString()}
                          </time>
                        </div>
                        <div className="flex flex-auto flex-col justify-between p-6">
                          <p
                            className={cx(
                              'text-sm',
                              activeOption
                                ? 'text-black dark:text-slate-200'
                                : 'text-gray-700 dark:text-slate-400',
                            )}
                          >
                            {getHighlightedParts(
                              cleanHTML(activeOption._highlightResult.body.value),
                              q,
                            ).map((part, idx) =>
                              part.isHighlighted ? (
                                <mark key={part.value + idx} className="bg-orange-500 text-white">
                                  {part.value}
                                </mark>
                              ) : (
                                <span key={part.value + idx}>{part.value}</span>
                              ),
                            )}
                          </p>
                          <a
                            href={`/${activeOption.slug}`}
                            className="button  mx-auto mt-6 flex w-max items-center justify-center rounded-md !border-2 !bg-orange-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            Read
                            <FaArrowRight className="ml-2" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {query !== '' && results.hits?.length === 0 && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <ExclamationCircleIcon
                      type="outline"
                      name="exclamation-circle"
                      className="mx-auto h-6 w-6 text-black dark:text-slate-300"
                    />
                    <p className="mt-4 font-semibold text-black dark:text-slate-50">
                      No results found
                    </p>
                    <p className="mt-2 text-black dark:text-slate-400">
                      No components found for this search term. Please try again.
                    </p>
                  </div>
                )}
              </>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export interface UseSearchKeyboardEventsProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onInput?: (event: KeyboardEvent) => void
  searchButtonRef?: RefObject<HTMLButtonElement>
}

function isEditingContent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement
  const tagName = element.tagName

  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}

export function useSearchKeyboardEvents({
  isOpen,
  onOpen,
  onClose,
  onInput,
  searchButtonRef,
}: UseSearchKeyboardEventsProps) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        onOpen()
      }
      if (
        (event.keyCode === 27 && isOpen) ||
        // The `Cmd+K` shortcut both opens and closes the modal.
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        // The `/` shortcut opens but doesn't close the modal because it's
        // a character.
        (!isEditingContent(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()

        if (isOpen) {
          onClose()
          // } else if (!document.body.classList.contains('DocSearch--active')) {
          //   open();
        } else {
          open()
        }
      }

      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event)
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose, onInput, searchButtonRef])
}

export default Search
