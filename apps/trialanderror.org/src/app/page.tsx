import { getAllCards } from '../server/mixed'
import Link from 'next/link'
import { Card } from './Card'
import { Frame } from './components/Frame'

export const revalidate = 3600 // revalidate every hour

export default async function Page() {
  const cards = await getAllCards({ limit: 12 })

  return (
    // <main className="relative">
    <div className="relative flex flex-col items-center">
      <div className="absolute top-[30vh] -z-10 mx-auto h-[90%] w-2/3 bg-orange-500 lg:top-[40vh]" />
      <Frame />

      <div className="relative h-[100vh] w-[100vw]">
        <div className="relative top-[30vh] grid w-full grid-cols-6 items-center justify-center gap-0 md:top-[40vh]">
          <h1 className="font-overpass col-span-5 col-start-2 -mt-6 -ml-4 max-w-[66.666667%] text-5xl font-black leading-[1.2] tracking-tight text-blue-500 md:-mt-40 md:text-6xl lg:-mt-10 xl:text-[104px]">
            The Center of Trial <br className="hidden lg:flex" />& Error
          </h1>
          <div className="col-span-4 col-start-2 mt-10 -ml-3 md:col-start-3 md:ml-10 md:max-w-[52vw] lg:max-w-none">
            <h2 className="font-sans font-semibold leading-[1.2] text-blue-500 md:text-2xl lg:text-4xl">
              Committed to transparent and responsible scholarship.
            </h2>
            <p className="relative mt-4 flex max-w-5xl items-center leading-[1.2] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-2/3 before:w-2  before:bg-blue-500 md:text-2xl md:before:-ml-8 md:before:flex md:before:w-3 lg:text-3xl">
              Creating a space for independent reflection on academic practice and experiment with
              innovative publishing activities. We empower students and early early career
              researchers to disrupt existing scholarly infrastructures.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex h-screen w-screen items-start ">
        <h2
          className="sticky top-[5vh] bottom-[5vh] left-[15vw] mt-[10vh] rotate-180 text-5xl font-black text-blue-500 lg:text-7xl"
          style={{
            // direction: 'rtl',
            writingMode: 'vertical-rl',
          }}
        >
          What Do We Do?
        </h2>
        <div className="absolute right-[6.6vw] left-[20vw] top-[20vh] bottom-[7vh] grid grid-cols-1 gap-10 border-4 border-blue-500 bg-white p-20 md:grid-cols-2 lg:grid-cols-3">
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
