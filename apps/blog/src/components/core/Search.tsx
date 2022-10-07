import { InstantSearch, useInstantSearch } from 'react-instantsearch-hooks-web'
import { Fragment, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import SearchIcon from '@heroicons/react/solid/SearchIcon.js'
import ExclamationCircleIcon from '@heroicons/react/outline/ExclamationCircleIcon.js'
import { cx } from '../../utils/cx'
import { instantMeiliSearch, MeiliSearchResponse } from '@meilisearch/instant-meilisearch'
import { useSearchBox } from 'react-instantsearch-hooks-web'
import type { MeiliSearchBlogPostResult } from '../../utils/types'
import { ControlKeyIcon } from '../atoms/ControlKeyIcon'
// import { getHighlightedParts } from 'instantsearch.js/es/lib/utils'

const searchClient = instantMeiliSearch(
  'https://app-meilisearchcote-prod-001.azurewebsites.net',
  'aa45f3a7-48d5-4a41-bf8a-503a0cbc6ad7'
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
  const apple = typeof navigator !== 'undefined' && isAppleDevice()
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
    [setIsOpen]
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
        ref={searchButtonRef}
        className="group mx-2 flex items-center justify-between rounded-full p-2 text-slate-800 transition-all hover:ring-2 hover:ring-inset hover:ring-orange-50 dark:text-white md:min-w-[8rem] md:bg-slate-100 md:dark:bg-slate-800"
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 font-bold text-slate-400 transition-colors group-hover:text-orange-50" />
        {/* <ControlKeyIcon /> */}
        <span className="hidden items-center justify-between gap-1 md:flex">
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

  // const queryHook = useCallback((query: string) => search(query), [search])

  const { query: q, refine } = useSearchBox({
    // queryHook,
  })

  const setQuery = useCallback(
    (q: string) => {
      schmetQuery(q)
      if (isOpen) {
        refine(q)
      }
    },
    [schmetQuery, refine, isOpen]
  )
  // const [open, setOpen] = useState(true)
  // const { query: q } = useSearchBox({
  //   queryHook: () => search(query),
  // })

  const { results: res } = useInstantSearch()
  const results = res as unknown as MeiliSearchResponse<MeiliSearchBlogPostResult>

  // const filteredItems =
  //   query === ''
  //     ? []
  //     : items.filter((item) => {
  //         return item.name.toLowerCase().includes(query.toLowerCase())
  //       })

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        id="search-modal"
        className="fixed inset-0 top-20 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
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
            className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:divide-slate-600 dark:bg-blue-500 dark:text-white"
            onChange={(item: MeiliSearchBlogPostResult) => (window.location = `/${item.slug}`)}
          >
            {({ activeOption }) => (
              <>
                <div className="relative">
                  <SearchIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0 dark:text-slate-50"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {results?.hits?.length > 0 && (
                  <div className="flex divide-x divide-gray-100 dark:divide-slate-600">
                    <div
                      className={cx(
                        'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto p-4 px-6',
                        activeOption && 'sm:h-96'
                      )}
                    >
                      {query === '' && (
                        <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500 dark:text-slate-300">
                          Recent searches
                        </h2>
                      )}
                      <Combobox.Options
                        static
                        hold
                        className="-mx2 text-sm text-gray-700 dark:text-slate-200"
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
                                  'flex cursor-default select-none rounded-xl p-2',
                                  active && 'bg-gray-100 dark:bg-blue-300'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div
                                    className={cx(
                                      'flex h-10 w-10 flex-none items-center justify-center rounded-full',
                                      active
                                        ? 'bg-gray-700 dark:bg-slate-100'
                                        : 'bg-gray-500 dark:bg-slate-500'
                                    )}
                                  >
                                    <img
                                      src={item.image.url}
                                      alt=""
                                      className="h-8 w-8 rounded-full"
                                    />
                                  </div>
                                  <div className="ml-4 flex-auto">
                                    <p
                                      className={cx(
                                        'text-sm font-bold',
                                        active
                                          ? 'text-gray-900 dark:text-slate-50'
                                          : 'text-gray-700 dark:text-slate-200'
                                      )}
                                    >
                                      {getHighlightedParts(item._highlightResult.title.value).map(
                                        (part) => {
                                          return part.isHighlighted ? (
                                            <mark
                                              key={part.value}
                                              className="bg-orange-500 text-white"
                                            >
                                              {part.value}
                                            </mark>
                                          ) : (
                                            part.value
                                          )
                                        }
                                      )}
                                      {/* {item.title} */}
                                    </p>
                                    <div className={'flex flex-wrap gap-3 gap-y-0 text-xs'}>
                                      {item._highlightResult.blog_tags.map((tag) => (
                                        <span
                                          key={tag.slug.value}
                                          className="text-xs text-slate-400"
                                        >
                                          #
                                          {getHighlightedParts(tag.title.value).map((part) =>
                                            part.isHighlighted ? (
                                              <mark className="bg-orange-500 text-white">
                                                {part.value}
                                              </mark>
                                            ) : (
                                              part.value
                                            )
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
                      <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto dark:divide-slate-600 sm:flex">
                        <div className="flex-none p-6 text-center">
                          <img
                            src={activeOption.image.url}
                            alt=""
                            height={activeOption.image.height}
                            width={activeOption.image.width}
                            className="mx-auto h-16 w-16 rounded-full object-cover"
                          />
                          <h2 className="mt-3 font-semibold text-gray-900 dark:text-slate-50">
                            {getHighlightedParts(activeOption._highlightResult.title.value).map(
                              (part) => {
                                return part.isHighlighted ? (
                                  <mark key={part.value} className="bg-orange-500 text-white">
                                    {part.value}
                                  </mark>
                                ) : (
                                  part.value
                                )
                              }
                            )}
                          </h2>
                          <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
                            {getHighlightedParts(activeOption._highlightResult.excerpt.value).map(
                              (part) => {
                                return part.isHighlighted ? (
                                  <mark key={part.value} className="bg-orange-500 text-white">
                                    {part.value}
                                  </mark>
                                ) : (
                                  part.value
                                )
                              }
                            )}
                          </p>
                          <time
                            className="text-xs text-gray-400 dark:text-slate-300"
                            dateTime={
                              activeOption.publishDate ??
                              activeOption.publishedAt ??
                              activeOption.createdAt
                            }
                          >
                            {new Date(
                              activeOption.publishDate ??
                                activeOption.publishedAt ??
                                activeOption.createdAt
                            ).toDateString()}
                          </time>
                        </div>
                        <div className="flex flex-auto flex-col justify-between p-6">
                          <p
                            className={cx(
                              'text-sm',
                              activeOption
                                ? 'text-gray-700 dark:text-slate-200'
                                : 'text-gray-500 dark:text-slate-400'
                            )}
                          >
                            {getHighlightedParts(
                              cleanHTML(activeOption._highlightResult.body.value),
                              q
                            ).map((part) =>
                              part.isHighlighted ? (
                                <mark key={part.value} className="bg-orange-500 text-white">
                                  {part.value}
                                </mark>
                              ) : (
                                part.value
                              )
                            )}
                          </p>
                          <a
                            href={`/${activeOption.slug}`}
                            className="mt-6 w-full rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            Read
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {query !== '' && results.hits?.length === 0 && (
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ExclamationCircleIcon
                      type="outline"
                      name="exclamation-circle"
                      className="mx-auto h-6 w-6 text-gray-400 dark:text-slate-300"
                    />
                    <p className="mt-4 font-semibold text-gray-900 dark:text-slate-50">
                      No results found
                    </p>
                    <p className="mt-2 text-gray-500 dark:text-slate-400">
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
        // if (!document.body.classList.contains('DocSearch--active')) {
        onOpen()
        // }
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
