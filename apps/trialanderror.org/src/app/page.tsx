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

      <div className="relative h-[100vh] w-[100vw]">
        <Frame />
        <div className="relative top-[30vh] grid w-full grid-cols-6 items-center justify-center gap-0 md:top-[40vh]">
          <h1 className="font-overpass col-span-5 col-start-2 -mt-6 -ml-6 max-w-[66.666667%] text-5xl font-black leading-[1.2] tracking-tight text-blue-500 md:-mt-40 md:text-6xl lg:-mt-10 xl:text-[104px]">
            The Center of Trial <br className="hidden lg:flex" />
            and Error
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
      <div className="relative flex w-screen items-start lg:h-screen ">
        <h2
          className="sticky top-[5vh] bottom-[5vh] left-[15vw] mt-[10vh] rotate-180 text-5xl font-black text-blue-500 md:left-[15vw] lg:text-7xl"
          style={{
            // direction: 'rtl',
            writingMode: 'vertical-rl',
          }}
        >
          What Do We Do?
        </h2>
        <div className="right-[6.6vw] left-[20vw] top-[20vh] bottom-[7vh] ml-[15vw]  mr-[7vw] grid grid-cols-1 justify-start gap-10 border-4  border-blue-500 bg-white p-10 md:mx-[20vw] lg:absolute lg:mx-0 lg:grid-cols-3  lg:p-20">
          <div className="flex flex-col items-center justify-start gap-6 lg:gap-20">
            <h3 className="text-4xl font-bold text-blue-500">Discussion</h3>
            <p className="text-center text-lg text-blue-500 2xl:text-2xl">
              We define “trial and error” as methodological flaws and conceptual errors in research.
              <br />
              <br />
              The Center facilitates a reflective discussion on these issues with our blog and by
              encouraging empirical research and cross-disciplinary conceptual work.
            </p>

            {/* <div className="relative h-[50vh] w-[50vw]">
              {/* <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-6 lg:gap-20">
            <h3 className="text-4xl font-bold text-blue-500">Publication</h3>
            <p className="text-center text-lg  text-blue-500 2xl:text-2xl">
              We aim to publicize the lessons of research struggles, publish answers to the question
              “what went wrong?”, and independently host non-profit pre-press services.
              <br />
              <br />
              Two branches of the Center, the Journal of Trial and Error and the Publishers of Trial
              and Error, are dedicated to this mission.
            </p>

            {/*<div className="relative h-[50vh] w-[50vw]">
              <Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-6 lg:gap-20">
            <h3 className="text-4xl font-bold text-blue-500">Training</h3>
            <p className="text-center text-lg text-blue-500 2xl:text-2xl">
              Institutional change results from well-equipped young people, creating a mass from
              below.
              <br />
              <br />
              As such, training is one of our most important activities. We focus efforts to educate
              students on the systemic and organisational structures of science and scholarship to
              make change a practical reality.
            </p>

            {/*   <div className="relative h-[50vh] w-[50vw]">
<Image
                src="/images/placeholder.png"
                alt="Placeholder"
                layout="fill"
                objectFit="cover"
              />
            </div>*/}
          </div>
        </div>
      </div>
      <div className="relative my-[20vh] flex w-full flex-col items-center gap-10">
        <h2 className="flex w-full items-center gap-10 pl-[6.6vw] pr-[6.6vw] text-5xl font-black text-blue-500 before:relative before:flex before:h-[6px] before:w-24 before:bg-blue-500 after:relative after:h-[6px] after:min-w-[4rem] after:flex-grow after:bg-blue-500 lg:text-7xl">
          What's New?
        </h2>
        <div className="m-10 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 ">
          {cards.map((card, idx) => (
            <Card key={card.id} delay={idx * 0.1} card={card} />
          ))}
        </div>
      </div>
      {/* <div className="relative flex h-screen w-screen flex-col items-center justify-center">
        {/* <h2 className="absolute top-[18vw] left-[6.6vw] flex w-full items-center gap-10 text-7xl font-black text-blue-500 before:relative before:flex before:h-[6px] before:w-24 before:bg-blue-500 after:relative after:h-[6px] after:min-w-[4rem] after:flex-grow after:bg-blue-500 lg:top-[6vw]">

        <h2
          className="absolute left-[5vw] rotate-180 bg-white py-4 text-7xl font-black text-blue-500"
          style={{
            writingMode: 'vertical-rl',
          }}
        >
          Collaborators
        </h2>

         <div className="absolute left-[6.6vw] right-[6.6vw] bottom-[18vw] top-[18vw] -z-10 border-4  border-blue-500 md:top-[10vw] md:border-[6px] lg:top-[6vw]  lg:bottom-[6vw]" />

        <div className="w-full">
          <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-lg font-semibold text-gray-600">
              Trusted by over 5 very average small businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-10 md:grid-cols-3 lg:mt-8">
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Tilburg University"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Nieuwe Utrechtse School"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="UMC Utrecht"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                  alt="Utrecht University"
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt=""
                />
              </div>
              <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </div>*/}
    </div>
  )
}
