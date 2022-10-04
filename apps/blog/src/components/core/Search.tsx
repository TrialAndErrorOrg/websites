import {
  InstantSearch,
  SearchBox,
  Hits,
  Snippet,
  Highlight,
  useInstantSearch,
} from 'react-instantsearch-hooks-web'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { Combobox, Dialog, Portal, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon } from '@heroicons/react/outline'
import { cx } from '../../utils/cx'
import { instantMeiliSearch, MeiliSearchResponse } from '@meilisearch/instant-meilisearch'
import type { SearchResults } from 'algoliasearch-helper'
import { format } from 'date-fns'
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

function Hit({ hit }) {
  return (
    <div>
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <Snippet key={hit} hit={hit} attribute="body" className="truncate" />
    </div>
  )
}

export const SearchBad = () => {
  const [focus, setFocus] = React.useState(false)
  return !focus ? (
    <button onClick={() => setFocus(true)}>Search</button>
  ) : (
    <InstantSearch searchClient={searchClient} indexName="blog-post">
      <SearchBox searchAsYouType={true} placeholder="Search"></SearchBox>
      <Hits hitComponent={Hit} />
      {/* <Autocomplete /> */}
    </InstantSearch>
  )
}

import { useConnector } from 'react-instantsearch-hooks-web'
import connectAutocomplete from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete'

import type {
  AutocompleteConnectorParams,
  AutocompleteWidgetDescription,
} from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete'

export type UseAutocompleteProps = AutocompleteConnectorParams

export function useAutocomplete(props?: UseAutocompleteProps) {
  return useConnector<AutocompleteConnectorParams, AutocompleteWidgetDescription>(
    connectAutocomplete,
    props
  )
}

export function Autocomplete(props: UseAutocompleteProps) {
  const { indices, currentRefinement, refine } = useAutocomplete(props)

  return <>{/* Your JSX */}</>
}

import { useSearchBox } from 'react-instantsearch-hooks-web'
import type { SearchBoxConnectorParams } from 'instantsearch.js/es/connectors/search-box/connectSearchBox'
import React from 'react'
import { RefinementList } from 'react-instantsearch-hooks-web/dist/es/ui/RefinementList'
import type { MeiliSearchBlogPostResult } from './DocSearch'
import { ControlKeyIcon } from '../atoms/ControlKeyIcon'

export function CustomSearchBox(props: SearchBoxConnectorParams) {
  const { query, refine, clear, isSearchStalled } = useSearchBox(props)

  return <div>{query}</div>
}

/*
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const items = [
  {
    id: 1,
    name: 'Sliders',
    description: 'A collection of sliders for selecting a range of values.',
    url: '#',
    imageUrl: 'https://tailwindui.com/img/component-images/icon-sliders.png',
  },
  // More items...
]
function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
}

export function Search() {
  const [open, setOpen] = useState(false)
  const apple = typeof navigator !== 'undefined' && isAppleDevice()
  return (
    <>
      <button
        className="mx-2 flex min-w-[6rem] items-center justify-between rounded-full bg-slate-100 p-2 text-slate-800 dark:bg-slate-700 dark:text-white"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-5 w-5" />
        {/* <ControlKeyIcon /> */}
        <span className="flex items-center justify-between gap-1">
          <span className="key">{apple ? '⌘' : <ControlKeyIcon />} </span>
          <span className="key">K</span>
        </span>
      </button>
      <InstantSearch searchClient={searchClient} indexName="blog-post">
        <SearchModal open={open} setOpen={setOpen} search={searchClient.search} />
      </InstantSearch>
    </>
  )
}
const queryHook = (query: string) => searchClient.search(query)

export function SearchModal({
  open,
  setOpen,
  search,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  search: (params: any) => Promise<any>
}) {
  const [query, schmetQuery] = useState('')

  // const queryHook = useCallback((query: string) => search(query), [search])

  const { query: q, refine } = useSearchBox({
    // queryHook,
  })

  const setQuery = (q: string) => {
    schmetQuery(q)
    refine(q)
  }
  // const [open, setOpen] = useState(true)
  // const { query: q } = useSearchBox({
  //   queryHook: () => search(query),
  // })

  const { results: res, uiState, use } = useInstantSearch()
  const results = res as unknown as MeiliSearchResponse<MeiliSearchBlogPostResult>
  console.log(results)

  // const filteredItems =
  //   query === ''
  //     ? []
  //     : items.filter((item) => {
  //         return item.name.toLowerCase().includes(query.toLowerCase())
  //       })

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        className="fixed inset-0 top-20 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setOpen}
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
            className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
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
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {results?.hits?.length > 0 && (
                  <div className="flex divide-x divide-gray-100">
                    <div
                      className={cx(
                        'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto p-4 px-6',
                        activeOption && 'sm:h-96'
                      )}
                    >
                      {query === '' && (
                        <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                          Recent searches
                        </h2>
                      )}
                      <Combobox.Options static hold className="-mx2 text-sm text-gray-700">
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
                                  active && 'bg-gray-100'
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div
                                    className={cx(
                                      'flex h-10 w-10 flex-none items-center justify-center rounded-full',
                                      active ? 'bg-gray-700' : 'bg-gray-500'
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
                                        active ? 'text-gray-900' : 'text-gray-700'
                                      )}
                                    >
                                      {getHighlightedParts(item._highlightResult.title.value).map(
                                        (part) => {
                                          return part.isHighlighted ? (
                                            <mark className="bg-orange-500 text-white">
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
                                        <span className="text-xs text-slate-400">
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
                      <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                        <div className="flex-none p-6 text-center">
                          <img
                            src={activeOption.image.url}
                            alt=""
                            height={activeOption.image.height}
                            width={activeOption.image.width}
                            className="mx-auto h-16 w-16 rounded-full object-cover"
                          />
                          <h2 className="mt-3 font-semibold text-gray-900">
                            {getHighlightedParts(activeOption._highlightResult.title.value).map(
                              (part) => {
                                return part.isHighlighted ? (
                                  <mark className="bg-orange-500 text-white">{part.value}</mark>
                                ) : (
                                  part.value
                                )
                              }
                            )}
                          </h2>
                          <p className="text-sm leading-6 text-gray-500">
                            {getHighlightedParts(activeOption._highlightResult.excerpt.value).map(
                              (part) => {
                                return part.isHighlighted ? (
                                  <mark className="bg-orange-500 text-white">{part.value}</mark>
                                ) : (
                                  part.value
                                )
                              }
                            )}
                          </p>
                          <time
                            className="text-xs text-gray-400"
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
                              activeOption ? 'text-gray-700' : 'text-gray-500'
                            )}
                          >
                            {getHighlightedParts(
                              cleanHTML(activeOption._highlightResult.body.value),
                              q
                            ).map((part) =>
                              part.isHighlighted ? (
                                <mark className="bg-orange-500 text-white">{part.value}</mark>
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
                      className="mx-auto h-6 w-6 text-gray-400"
                    />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">
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
