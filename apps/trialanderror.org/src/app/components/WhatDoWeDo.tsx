'use client'
import { animate, AnimatePresence, delay, motion, Variant } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

const WhatWeDoSection = ({
  children,
  hover,
  title,
  setHover,
  isSmall = false,
}: {
  children: React.ReactNode
  hover: { tab: number; show: boolean }
  title: string
  isSmall?: boolean
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

  const initial = useMemo(
    () =>
      isSmall
        ? {
            height: '10%',
            minHeight: '10%',
            width: '100%',
            minWidth: '100%',
          }
        : { width: '10%', minWidth: '10%' },
    [isSmall],
  )

  const animate: Variant = useMemo(
    () =>
      isSmall
        ? {
            height: hover.show ? '80%' : '10%',
            minHeight: hover.show ? '80%' : '10%',
            width: '100%',
            minWidth: '100%',
          }
        : {
            width: hover.show ? '80%' : '10%',
            minWidth: hover.show ? '80%' : '10%',
          },
    [hover.show, isSmall],
  )

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        ease: 'easeInOut',
        duration: globalDuration,
      }}
      style={{
        flexGrow: hover.show ? 20 : 1,
        flexBasis: 1,
        flexShrink: 1,
      }}
      className={`relative flex flex-col items-center bg-white ${
        hover.tab === 2
          ? ''
          : isSmall
          ? 'border-b-4 md:border-b-[6px]'
          : 'border-r-4 md:border-r-[6px]'
      } border-blue-500 lg:gap-8`}
      onHoverStart={handleHover}
    >
      <motion.h3
        initial={
          isSmall
            ? { translateX: '-100%', top: '25%' }
            : {
                top: '50%',
              }
        }
        transition={{
          ease: 'easeInOut',
          duration: globalDuration,
        }}
        animate={
          isSmall
            ? {
                translateX: hover.show ? '-200%' : 0,
                top: '25%',
              }
            : {
                top: hover.show ? '-50%' : '50%',
              }
        }
        className={`absolute flex ${
          isSmall ? '' : 'rotate-90'
        } text-3xl font-bold text-blue-500 2xl:text-4xl`}
      >
        {title}
      </motion.h3>

      <motion.div
        className={`relative flex h-[60vh] min-h-[60vh] w-full flex-col items-center  justify-center gap-6 overflow-hidden p-6  md:h-full md:min-h-0 md:w-[48vw] md:min-w-[48vw] 2xl:gap-10 2xl:p-10 `}
        initial={
          isSmall
            ? {
                translateX: '100%',
                translateY: 0,
              }
            : { translateY: '100%' }
        }
        animate={
          isSmall
            ? {
                translateX: hover.show ? 0 : '100%',
                translateY: 0,
              }
            : {
                translateY: hover.show ? 0 : '100%',
              }
        }
        transition={{
          ease: 'easeInOut',
          duration: globalDuration,
        }}
      >
        <div className="h-20 w-20 bg-orange-500" />

        <h3 className="relative flex w-1 flex-col items-center text-3xl font-bold text-blue-500 2xl:text-4xl">
          {title}
        </h3>
        <div className="h-2 w-1/4 bg-blue-500" />
        <div className="flex flex-col items-center  md:text-xl xl:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hover.show ? 1 : 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: hover.show ? globalDuration / 2 : globalDuration / 4,
              delay: hover.show ? globalDuration : 0,
            }}
          >
            {children}
          </motion.div>
        </div>
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

  const isSmall = useMediaQuery('(max-width: 768px)')

  return (
    <div className="relative mt-[30vh] mb-[20vh] flex w-screen items-start">
      <motion.h2
        className="sticky top-[5vh] bottom-[5vh] left-[12vw] rotate-180 text-5xl font-black text-blue-500 md:left-[15vw] 2xl:text-7xl"
        style={{
          // direction: 'rtl',
          writingMode: 'vertical-rl',
        }}
      >
        What Do We Do?
      </motion.h2>
      <motion.div
        initial={{ translateX: '100%', opacity: 0 }}
        whileInView={{
          translateX: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' },
        }}
        className="relative ml-[15vw] mr-[5vw]  flex h-[80vh] w-[70vb] flex-col justify-start overflow-hidden border-4 border-blue-500 bg-white md:ml-[25vw] md:h-auto md:w-[60vw] md:max-w-[60vw] md:flex-row  md:border-[6px]"
      >
        <WhatWeDoSection hover={hover[0]} setHover={setHover} title="Discussing" isSmall={isSmall}>
          {/* Little blue bar */}

          <p className="text-center text-blue-500">
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

        <WhatWeDoSection hover={hover[1]} setHover={setHover} title="Publishing" isSmall={isSmall}>
          <p className="text-center text-blue-500">
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

        <WhatWeDoSection hover={hover[2]} setHover={setHover} title="Training" isSmall={isSmall}>
          <p className="text-center text-blue-500">
            Institutional change results from well-equipped young people, creating a mass from
            below.
            <br />
            <br />
            As such, training is one of our most important activities. We focus efforts to educate
            students on the systemic and organisational structures of science and scholarship to
            make change a practical reality.
          </p>
        </WhatWeDoSection>
      </motion.div>
    </div>
  )
}
