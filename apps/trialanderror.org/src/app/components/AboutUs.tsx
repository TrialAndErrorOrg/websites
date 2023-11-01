'use client'

import { motion } from 'framer-motion'
import { Frame } from './Frame'
import { growFadeIn } from '../../utils/motionPresets'

export function AboutUs() {
  return <div className="relative min-h-screen w-screen">
      <Frame />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delayChildren: 2,
        }}
        className="relative top-[20vh] left-[13vw] -z-10 min-h-screen w-[70vw] bg-blue-50 p-6 md:w-[60vw] md:p-10 lg:top-[25vh] 2xl:w-[40vw]"
      >
        <motion.div
          transition={{
            delayChildren: 1,
            staggerChildren: 0.5,
          }}
          variants={growFadeIn}
          initial="initial"
          animate="animate"
          className="flex w-[45vw] flex-col justify-center  gap-10 md:mb-[30vh] md:ml-[20vw] md:gap-20"
        >
          <motion.h1
            transition={{
              duration: 0.5,
            }}
            variants={growFadeIn}
            className="-mt-10 text-4xl font-black text-blue-500 md:-mt-16 md:text-7xl"
          >
            About Us
          </motion.h1>
          <motion.p
            transition={{
              duration: 0.5,
            }}
            variants={growFadeIn}
            className="relative flex w-[70vw] items-center leading-[1.4] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-1/2 before:w-2 before:bg-blue-500 md:w-auto md:text-lg md:before:-ml-12 md:before:flex md:before:w-3 lg:ml-40 2xl:text-[2rem] 2xl:leading-10"
          >
            The Center of Trial & Error is a virtual platform and sandbox for disruptive initiatives
            that will lead to institutional change.
            <br />
            <br />
            With the Journal of Trial & Error as our flagship, we aim to bridge the gap between what
            researchers do and what researchers can report, to discuss and question what kind of
            knowledge is deemed valuable, to advocate for practices that positively impact the lives
            of researchers and the public, and to advance policies that put openness, transparency
            and compassion above profit, division and bottom lines.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
}
