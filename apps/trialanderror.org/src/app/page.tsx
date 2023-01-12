import { getAllCards } from '../server/mixed'
import Image from 'next/image'

export default async function Page() {
  const cards = await getAllCards()
  return (
    <div className="grid gap-6  p-10 sm:grid-cols-2 lg:grid-cols-3 ">
      {cards.map((card) => (
        <article key={card.title} className="relative col-span-1 h-80 border border-black">
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
            <h2 className="my-2 text-xl font-bold leading-tight tracking-tighter">{card.title}</h2>
            <h2>{card.category}</h2>
          </div>
        </article>
      ))}
    </div>
  )
}
