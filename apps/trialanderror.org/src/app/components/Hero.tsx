'use client'
import { Frame } from './Frame'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col justify-center">
      {/* <div className="max-w-screen absolute inset-6 -z-20 min-h-screen border-4 border-blue-500 md:inset-20 md:border-[6px]" /> */}
      <Frame />
      <div className="relative mt-[20vh] grid w-full grid-cols-6 items-center justify-center md:mt-[40vh]">
        <div className="absolute left-0 top-4 -z-20 col-span-4 col-start-2 h-[10000rem] w-full bg-orange-500 md:top-8 2xl:top-10" />
        {/* <Frame /> */}

        <motion.h1
          initial={{ translateX: '-100vw' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          animate={{ translateX: 0 }}
          className="font-overpass col-span-5 col-start-2 -ml-4  max-w-[66.666667%] text-5xl font-black leading-[1] tracking-tight text-blue-500 md:-ml-8 md:text-6xl md:leading-[1.2]  xl:text-7xl  2xl:text-[104px]"
        >
          The Center of Trial <br className="hidden xl:flex" />
          and Error
        </motion.h1>
        <motion.div
          initial={{ translateX: '100vw' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          animate={{ translateX: 0 }}
          className="col-span-4 col-start-2 -ml-3 mt-10 md:col-start-3 md:ml-10 md:max-w-[52vw] lg:max-w-none"
        >
          <h2 className="font-sans font-semibold leading-[1.2] text-blue-500 md:text-2xl lg:text-3xl 2xl:text-4xl">
            Creating transparent and responsible scholarship.
          </h2>
          <p className="relative mt-4 flex  max-w-2xl items-center leading-[1.2] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-2/3 before:w-2 before:bg-blue-500  md:text-xl md:before:-ml-8 md:before:flex md:before:w-3 lg:text-2xl 2xl:max-w-5xl 2xl:text-3xl">
            We are a non-profit organization experimenting with innovative publishing activities.
            The Center provides a space for independent reflection on academic practice and
            stimulates students and early career researchers to disrupt existing scholarly
            infrastructures.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
