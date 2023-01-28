'use client'
import { AnimatePresence, delay, motion } from 'framer-motion'
import { useState } from 'react'

const WhatWeDoSection = ({
  children,
  hover,
  title,
  setHover,
}: {
  children: React.ReactNode
  hover: { tab: number; show: boolean }
  title: string
  setHover: (arg: React.SetStateAction<{ tab: number; show: boolean }[]>) => void
}) => {
  const handleHover = () => {
    setHover((prev) => {
      const newHover = [
        { tab: 0, show: false },
        { tab: 1, show: false },
        { tab: 2, show: false },
      ]
      newHover[hover.tab].show = true
      return newHover
    })
  }

  const globalDuration = 0.4

  return (
    <motion.div
      initial={{ flexGrow: 1 }}
      animate={{
        flexGrow: hover.show ? 20 : 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: globalDuration,
      }}
      style={{
        // flexGrow: hover.show ? 20 : 1,

        flexBasis: 1,
        flexShrink: 1,
      }}
      onHoverStart={handleHover}
      className={`flex h-full flex-col items-center  ${
        hover.tab === 2 ? '' : 'border-r-[6px]'
      } relative border-r-blue-500 lg:gap-10`}
    >
      <motion.h3
        initial={{
          // opacity: 1,
          top: '50%',
        }}
        transition={{
          ease: 'easeInOut',
          duration: globalDuration,
        }}
        animate={{
          top: hover.show ? '-50%' : '50%',
          // opacity: hover.show ? 0 : 1,
        }}
        className="absolute flex rotate-90 text-4xl font-bold text-blue-500"
      >
        {title}
      </motion.h3>
      <motion.div
        className="relative flex h-full w-full flex-auto flex-col items-center justify-start gap-20 p-10"
        initial={{ opacity: 1, translateY: '100%' }}
        animate={{
          translateY: hover.show ? 0 : '100%',
          // opacity: hover.show ? 1 : 0,
        }}
        transition={{
          ease: 'easeInOut',
          // delay: hover.show ? globalDuration : 0,
          duration: globalDuration,
        }}
      >
        <motion.div
          className="h-20 w-20 bg-orange-500"
          initial={{ opacity: 0 }}
          animate={{
            opacity: hover.show ? 1 : 0,
          }}
          transition={{
            ease: 'easeInOut',
            duration: globalDuration,
          }}
        />

        <motion.h3 className="relative text-4xl font-bold text-blue-500">{title}</motion.h3>
        <div className="h-2 w-1/4 bg-blue-500" />
        <motion.div className="flex flex-col items-center text-xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hover.show ? 1 : 0,
              // transition: { duration: globalDuration, delay: globalDuration },
            }}
            transition={{
              ease: 'easeInOut',
              duration: hover.show ? globalDuration / 2 : globalDuration / 4,
              delay: hover.show ? globalDuration : 0,
            }}
            className="absolute w-full p-10"
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const WhatDoWeDo = () => {
  const [hover, setHover] = useState([
    { tab: 0, show: true },
    { tab: 1, show: false },
    { tab: 2, show: false },
  ])
  return (
    <motion.div
      initial={{ translateX: '100%', opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5, type: 'spring' },
      }}
      className="left-[25vw] top-[20vh] bottom-[7vh] ml-[15vw] mr-[7vw] flex w-[60vw] flex-auto justify-start overflow-hidden  border-[6px]  border-blue-500 bg-white md:mx-[20vw] lg:absolute lg:mx-0 "
    >
      <WhatWeDoSection hover={hover[0]} setHover={setHover} title="Discussing">
        {/* Little blue bar */}

        <p className="text-center">
          We define “trial and error” as methodological flaws and conceptual errors in research.
          <br />
          <br />
          The Center facilitates a reflective discussion on these issues with{' '}
          <a className="sleek-underline-blue font-bold" href="https://blog.trialanderror.org">
            our blog
          </a>{' '}
          and by encouraging empirical research and cross-disciplinary conceptual work.
        </p>
      </WhatWeDoSection>

      <WhatWeDoSection hover={hover[1]} setHover={setHover} title="Publishing">
        <p className="text-center">
          We aim to publicize the lessons of research struggles, publish answers to the question
          “what went wrong?”, and independently host non-profit pre-press services.
          <br />
          <br />
          Two branches of the Center, the{' '}
          <a href="https://journal.trialanderror.org" className="sleek-underline-blue font-bold">
            Journal of Trial and Error
          </a>{' '}
          and the Publishers of Trial and Error, are dedicated to this mission.
        </p>
      </WhatWeDoSection>

      <WhatWeDoSection hover={hover[2]} setHover={setHover} title="Training">
        <p className="text-center">
          Institutional change results from well-equipped young people, creating a mass from below.
          <br />
          <br />
          As such, training is one of our most important activities. We focus efforts to educate
          students on the systemic and organisational structures of science and scholarship to make
          change a practical reality.
        </p>
      </WhatWeDoSection>
    </motion.div>
  )
}
