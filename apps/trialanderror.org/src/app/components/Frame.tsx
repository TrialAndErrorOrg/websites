'use client'

import { motion } from 'framer-motion'

export function Frame() {
  return (
    // <div className="absolute left-[3.6vw] right-[3.6vw] bottom-[18vw] top-[18vw] -z-20 border-4 border-blue-500 md:top-[10vw] md:border-[6px] lg:top-[3vw]  lg:bottom-[3vw]" />
    // </div>
    <svg
      className="absolute inset-6 -z-20 flex h-full w-[calc(100vw-3rem)] md:inset-20 md:w-[calc(100vw-10rem)]"
      preserveAspectRatio="none"
      pointerEvents="none"
    >
      <motion.rect
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        vectorEffect="non-scaling-stroke"
        className="fill-none stroke-blue-500 stroke-[4px] md:stroke-[6px] "
        x="1%"
        y="1%"
        height="98%"
        width="98%"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
