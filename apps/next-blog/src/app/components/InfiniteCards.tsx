'use client'
import Image from 'next/image'
import React from 'react'
import { trpc } from '../../utils/trpcClient'
import { Card } from './Card'

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

export function InfiniteCards({ limit, cursor }: { limit?: number; cursor?: string }) {
  const query = trpc.cards.infiniteCards.useInfiniteQuery(
    { limit },
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
        return page.cards.map((card, idx) => {
          return <Card key={card.id} delay={(idx % (limit || 9)) * 0.1 + 0.5} card={card} />
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
