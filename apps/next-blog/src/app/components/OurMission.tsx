'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function OurMission() {
  return (
    <div className="relative mt-[20vh] w-screen md:min-h-screen">
      {/* light blue backdrop  */}
      <div className="absolute top-0 left-[13vw] -z-10 flex h-[60%] w-[70vw] flex-col items-end justify-center bg-blue-50 md:w-[60vw] 2xl:w-[40vw]" />
      <div className="mx-[6vw] mt-[6vw] flex  flex-col items-start gap-[6vw] md:mx-auto md:w-2/3 md:flex-row">
        <h2
          id="mission"
          className="top-[5vh] bottom-[5vh] w-full text-4xl font-black text-blue-500 md:sticky md:-ml-[5vw] md:w-auto md:rotate-180 md:text-7xl md:[writing-mode:vertical-rl]"
        >
          Our Mission
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, translateY: '24px' }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.7, ease: 'easeOut' },
            scale: 1,
            translateY: 0,
          }}
          className="flex flex-col items-center gap-10 border-4 border-solid border-blue-500 bg-white py-10 px-10 md:ml-0 md:w-auto md:gap-20 md:border-[6px] md:px-[6vw] md:py-24"
        >
          <p className="text-lg text-blue-500 md:text-xl 2xl:text-2xl 2xl:leading-10">
            The Center of Trial & Error believes that a more transparent, responsible, honest, and
            reflexive way of doing scholarship requires institutional change. It thereby tries to
            disrupt existing scholarly infrastructures by empowering early career researchers to
            develop and explore the possibilities of non-profit and value-driven platforms for
            academic activities.
            <br />
            <br />
            <span className="hidden md:inline-block"> </span>
            Moreover, the Center aims to provide space for ongoing and independent reflection on
            academic culture, systemic structures, research and academic education and wants to
            connect those who (try to) enforce practical change. To do so, the Center hosts five
            branches around our{' '}
            <Link
              href="https://journal.trialanderror.org"
              target="_blank"
              className="sleek-underline-blue font-bold"
            >
              Journal
            </Link>
            , publishing, training, research, and{' '}
            <Link
              href="https://github.com/TrialAndErrorOrg"
              target="_blank"
              className="sleek-underline-blue font-bold"
            >
              software development.
            </Link>
          </p>
          <div className="h-2 w-40 bg-blue-500 md:h-4 md:w-40" />
        </motion.div>
      </div>
    </div>
  )
}
