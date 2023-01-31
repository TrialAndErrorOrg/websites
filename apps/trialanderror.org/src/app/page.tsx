import { getFile } from '../server/files'
import { getAllCards } from '../server/mixed'
import { Card } from './Card'
import { WhatDoWeDo } from './components/WhatDoWeDo'
import { Hero } from './Hero'

export const revalidate = 3600 // revalidate at least every hour

export default async function Page() {
  const cardsPromise = await getAllCards({ limit: 12 })
  const filesPromise = Promise.all([573, 571, 572].map(async (file) => await getFile(file)))

  const [cards, files] = await Promise.all([cardsPromise, filesPromise])
  console.log(files)

  return (
    // <main className="relative">
    <div className="relative flex flex-col items-center">
      <div className="absolute top-[30vh] -z-10 mx-auto h-[90%] w-2/3 bg-orange-500 lg:top-[40vh]" />

      <Hero />
      <WhatDoWeDo images={files} />
      <div className="relative my-[20vh] flex w-full flex-col items-center gap-10">
        <h2 className="flex w-full items-center gap-10 whitespace-nowrap pl-[3vw] pr-[6.6vw] text-5xl font-black text-blue-500 before:relative before:flex before:h-[6px] before:bg-blue-500 after:relative after:h-[6px] after:flex-grow after:bg-blue-500 md:pl-[6.6vw] md:before:w-24 md:after:min-w-[4rem] lg:text-7xl">
          What's New?
        </h2>
        <div className="m-10 grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-24 2xl:grid-cols-3 2xl:gap-20 ">
          {cards.map((card, idx) => (
            <Card key={card.id} delay={idx * 0.1} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
