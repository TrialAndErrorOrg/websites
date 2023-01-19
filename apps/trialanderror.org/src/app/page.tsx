import { getAllCards } from '../server/mixed'
import Link from 'next/link'
import { Card } from './Card'

export const revalidate = 3600 // revalidate every hour

export default async function Page() {
  const cards = await getAllCards({ limit: 12 })

  return (
    // <main className="relative">
    <div className="relative flex flex-col items-center">
      <div className="absolute top-[40vh] -z-10 mx-auto h-[90%] w-2/3 bg-orange-500" />

      <div className="relative grid h-[100vh] w-[100vw] grid-cols-6 items-center justify-center gap-0">
        <h1 className="col-span-4 col-start-2 -ml-4 -mt-20 font-black leading-[1.2] tracking-tight text-blue-500 xl:text-[104px]">
          The Center of Trial <br />& Error
        </h1>
        <div className="absolute inset-[7vw] -z-20 border-[6px] border-blue-500" />
      </div>
      <div className="relative flex h-[100vh] w-[100vw] snap-center items-start gap-[8vw]">
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
      <div className="relative left-[12vw] flex w-[83vw] snap-center items-start border border-red-500 lg:h-[200vh]">
        <h2
          className="sticky top-60 w-1 rotate-180  text-8xl font-black text-blue-500"
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          What's New?
        </h2>
        <div className="m-10 ml-[10vw] grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, idx) => (
            <Card key={card.id} delay={idx * 0.1} card={card} />
          ))}
          {/* <ClientProvider>
          <InfiniteCards />
        </ClientProvider> */}
        </div>
      </div>
    </div>
  )
}
