import { getAllCards } from '../../server/mixed'
import { ClientProvider } from '../../utils/trpcClient'
import { Card } from '../Card'
import { InfiniteCards } from '../InfiniteCards'

export default async function Page() {
  const cards = await getAllCards({ limit: 9 })
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-blue-500">News and Events</h1>
      <p className="text-2xl font-bold text-blue-500">
        Stay up to date with everything going on in and around the Center of Trial and Error
      </p>
      <div className="grid grid-cols-1 gap-20 p-[10vw] md:grid-cols-2 lg:grid-cols-3 ">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <ClientProvider>
          <InfiniteCards />
        </ClientProvider>
      </div>
    </div>
  )
}
