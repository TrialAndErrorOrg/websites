import { getAllCards } from '../server/mixed'
import Image from 'next/image'
import { ClientProvider } from '../utils/trpcClient'
import { InfiniteCards } from './InfiniteCards'
import Link from 'next/link'

export default async function Page() {
  const cards = await getAllCards({ limit: 12 })

  return (
    // <main className="relative">
    <div className="relative">
      <div className="absolute top-[50vh] left-[15vw] mx-auto h-[90%] w-[70vw] bg-orange-500" />

      <div className="relative h-[100vh] w-[100vw] p-[15vw]">
        <h1 className="absolute top-[47vh] -ml-[1vw] text-8xl font-black text-blue-500">
          The Center of Trial <br />& Error
        </h1>
        <div className="absolute left-[5vw] top-[5vh] -z-10 h-[calc(100%-10vh)] w-[calc(100%-10vw)] border-4 border-blue-500" />
      </div>
      <div className="relative flex h-[100vh] w-[100vw] items-start gap-[8vw]">
        <h2
          className="ml-[13vw] rotate-180 text-8xl font-black text-blue-500"
          style={{
            // direction: 'rtl',
            writingMode: 'vertical-rl',
          }}
        >
          What Do We Do?
        </h2>
        <div className="mt-[10vh] grid w-[70vw] grid-cols-3 gap-10 border-4 border-blue-500 bg-white p-20">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-blue-500">Discussion</h3>
            <p className="text-xl text-blue-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>

            <Link href="/research">
              <span className="sleek-underline-blue">Learn More</span>
            </Link>

            <div className="relative h-[50vh] w-[50vw]">
              {/* <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-blue-500">Publication</h3>
            <p className="text-xl text-blue-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>

            <Link href="/education">
              <span className="sleek-underline-blue">Learn More</span>
            </Link>

            <div className="relative h-[50vh] w-[50vw]">
              {/* <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-blue-500">Training</h3>
            <p className="text-xl text-blue-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>

            <Link href="/community">
              <span className="sleek-underline-blue">Learn More</span>
            </Link>

            <div className="relative h-[50vh] w-[50vw]">
              {/* <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[200vh] w-[100vw] p-[15vw]">
        <h2 className="absolute -ml-40 -rotate-90  text-8xl font-black text-blue-500">
          What's New?
        </h2>
        <div className="m-10 ml-[10vw] grid max-w-7xl gap-20 sm:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card) => (
            <article
              key={card.title}
              className="hover:shadow-thick-3 group relative col-span-1 h-80 border border-black shadow-[0px_0px_0_#000] transition-all ease-in-out  hover:-translate-x-2 hover:-translate-y-2"
            >
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
                  <Link className="link-overlay" href={`/news/${card.url?.split('/')?.pop()}`}>
                    {card.title}
                  </Link>
                </h2>
                <h2>{card.category}</h2>
              </div>
            </article>
          ))}
          {/* <ClientProvider>
          <InfiniteCards />
        </ClientProvider> */}
        </div>
      </div>
    </div>
  )
}
