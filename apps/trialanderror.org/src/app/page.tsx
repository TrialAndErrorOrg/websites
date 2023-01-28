import { getAllCards } from '../server/mixed'
import Link from 'next/link'
import { Card } from './Card'
import { Frame } from './components/Frame'
import { WhatDoWeDo } from './components/WhatDoWeDo'

export const revalidate = 3600 // revalidate every hour

export default async function Page() {
  const cards = await getAllCards({ limit: 12 })
  console.log(cards[0])

  return (
    // <main className="relative">
    <div className="relative flex flex-col items-center">
      <div className="absolute top-[30vh] -z-10 mx-auto h-[90%] w-2/3 bg-orange-500 lg:top-[40vh]" />

      <div className="relative h-[100vh] w-[100vw]">
        <Frame />
        <div className="relative top-[30vh] grid w-full grid-cols-6 items-center justify-center gap-0 md:top-[40vh]">
          <h1 className="font-overpass col-span-5 col-start-2 -mt-6 -ml-6 max-w-[66.666667%] text-5xl font-black leading-[1.2] tracking-tight text-blue-500 md:-mt-40 md:text-6xl lg:-mt-10 xl:text-7xl 2xl:text-[104px]">
            The Center of Trial <br className="hidden lg:flex" />
            and Error
          </h1>
          <div className="col-span-4 col-start-2 mt-10 -ml-3 md:col-start-3 md:ml-10 md:max-w-[52vw] lg:max-w-none">
            <h2 className="font-sans font-semibold leading-[1.2] text-blue-500 md:text-2xl lg:text-3xl 2xl:text-4xl">
              Creating transparent and responsible scholarship.
            </h2>
            <p className="relative mt-4 flex max-w-3xl items-center leading-[1.2] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-2/3 before:w-2 before:bg-blue-500  md:text-2xl md:before:-ml-8 md:before:flex md:before:w-3 lg:text-2xl 2xl:max-w-5xl 2xl:text-3xl">
              We are a non-profit organization experimenting with innovative publishing activities.
              The Center provides a space for independent reflection on academic practice and
              stimulates students and early career researchers to disrupt existing scholarly
              infrastructures.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-screen items-start lg:h-screen ">
        <h2
          className="sticky top-[5vh] bottom-[5vh]  left-[12vw] mt-[10vh] rotate-180 text-5xl font-black text-blue-500 md:left-[15vw] lg:text-7xl"
          style={{
            // direction: 'rtl',
            writingMode: 'vertical-rl',
          }}
        >
          What Do We Do?
        </h2>
        <WhatDoWeDo />
      </div>
      <div className="relative my-[20vh] flex w-full flex-col items-center gap-10">
        <h2 className="flex w-full items-center gap-10 whitespace-nowrap pl-[3vw] pr-[6.6vw] text-5xl font-black text-blue-500 before:relative before:flex before:h-[6px] before:bg-blue-500 after:relative after:h-[6px] after:flex-grow after:bg-blue-500 md:pl-[6.6vw] md:before:w-24 md:after:min-w-[4rem] lg:text-7xl">
          What's New?
        </h2>
        <div className="m-10 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, idx) => (
            <Card key={card.id} delay={idx * 0.1} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
