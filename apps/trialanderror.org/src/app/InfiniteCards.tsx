'use client'
import Image from 'next/image'
import React from 'react'
import { trpc } from '../utils/trpcClient'

export function useIsIntersecting<TElement extends HTMLElement>() {
  // to prevents runtime crash in IE, let's mark it true right away
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  const ref = React.useRef<TElement>(null)

  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [])
  return [isIntersecting, ref] as const
}

export function InfiniteCards() {
  const query = trpc.cards.infiniteCards.useInfiniteQuery(
    {},
    {
      getNextPageParam(lastPage) {
        console.log(lastPage)
        return lastPage.nextCursor
      },
    },
  )
  const [isLoadMoreVisible, ref] = useIsIntersecting<HTMLDivElement>()

  const fetchNextPageRef = React.useRef(query.fetchNextPage)
  fetchNextPageRef.current = query.fetchNextPage

  React.useEffect(() => {
    if (isLoadMoreVisible && query.hasNextPage && !query.isFetching) {
      fetchNextPageRef.current()
    }
  }, [isLoadMoreVisible, query.hasNextPage, query.isFetching])

  console.log(query.data)
  return (
    <>
      {query.data?.pages.map((page) => {
        return page.cards.map((card) => {
          return (
            <article key={card.id} className="relative col-span-1 h-80 border border-black">
              <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-black bg-white font-bold">
                {card.type === 'article' ? 'J' : 'B'}
              </span>
              {card?.image?.url ? (
                <Image
                  src={card.image.url}
                  alt={card.image.alt ?? ''}
                  width={card.image.width}
                  height={card.image.height}
                  className="h-full max-h-40 object-cover"
                />
              ) : (
                <div className="flex h-40 items-center justify-center bg-orange-500">
                  <span className="text-2xl text-black">{card.title[0]}</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="my-2 text-xl font-bold leading-tight tracking-tighter">
                  {card.title}
                </h2>
                <h2>{card.category}</h2>
              </div>
            </article>
          )
        })
      })}

      <div ref={ref}>
        {query.isFetchingNextPage ? (
          <span>Loading</span>
        ) : (
          <button
            disabled={!query.hasNextPage}
            onClick={() => {
              query.fetchNextPage()
            }}
            className={'w-full cursor-pointer p-4' + (!query.hasNextPage ? ' opacity-50' : '')}
          >
            {query.hasNextPage ? 'Load more' : 'You loaded everything'}
          </button>
        )}
      </div>
    </>
  )
}
