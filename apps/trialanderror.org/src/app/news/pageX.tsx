import { getAllCards } from '../../server/mixed'
import { createMetadata } from '../../utils/createMetadata'
import { ClientProvider } from '../../utils/trpcClient'
import { Card } from '../components/Card'
import { InfiniteCards } from '../components/InfiniteCards'

export const revalidate = 3600 // revalidate every hour

export const metadata = createMetadata({
  title: 'News & Events',
  description: 'News and Events Updates from the Center of Trial and Error',
})

export default async function Page() {
  const cards = await getAllCards({ limit: 6 })
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-blue-500">News and Events</h1>
      <p className="text-2xl font-bold text-blue-500">
        Stay up to date with everything going on in and around the Center of Trial and Error
      </p>
      <div className="grid grid-cols-1 gap-20 p-[10vw] md:grid-cols-2 lg:grid-cols-3 ">
        {cards.map((card, idx) => (
          <Card key={card.id} delay={idx * 0.1} card={card} />
        ))}
        <ClientProvider>
          <InfiniteCards />
        </ClientProvider>
      </div>
    </div>
  )
}
