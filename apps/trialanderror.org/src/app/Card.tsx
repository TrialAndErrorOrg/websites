import { Card } from '../server/mixed'
import Image from 'next/image'
import Link from 'next/link'

export function Card({ card }: { card: Card }) {
  return (
    <article
      key={card.title}
      className="hover:shadow-thick-3 group relative col-span-1 flex flex-col shadow-[0px_0px_0_#000] transition-all ease-in-out  hover:-translate-x-2 hover:-translate-y-2"
    >
      {card?.image?.url ? (
        <div className="h-80 w-full">
          <Image
            src={card.image.url}
            alt={card.image.alt ?? ''}
            width={320}
            height={320}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center bg-orange-500">
          <span className="text-2xl text-black">{card.title[0]}</span>
        </div>
      )}
      <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-black bg-white font-bold">
        {card.type === 'article' ? 'J' : 'B'}
      </span>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="my-2 text-xl font-bold leading-tight  tracking-tight text-blue-500">
            <Link className="link-overlay" href={`/news/${card.url?.split('/')?.pop()}`}>
              {card.title}
            </Link>
          </h2>
          <h2>{card.category}</h2>
        </div>
      </div>
    </article>
  )
}
