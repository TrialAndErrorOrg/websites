'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
export function Frame() {
  const ref = useRef<SVGSVGElement>(null);

  const isInView = useInView(ref, {
    // once: true,
  });
  console.log(isInView);

  return (
    // <div className="absolute h-screen w-screen">

    // <div className="max-w-screen absolute inset-6 -z-20 min-h-screen border-4 border-blue-500 md:inset-20 md:border-[6px]" />
    // <svg className="absolute -z-20 min-h-screen w-screen p-6 md:p-20">
    <svg
      className="absolute inset-6 -z-20 flex h-full w-[calc(100vw-3rem)] md:inset-20 md:w-[calc(100vw-10rem)]"
      preserveAspectRatio="none"
      ref={ref}
      pointerEvents={'none'}
      // vectorEffect="non-scaling-stroke"
    >
      <motion.rect
        initial={{ pathLength: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        animate={{
          pathLength: isInView ? 1 : 0,
        }}
        vectorEffect="non-scaling-stroke"
        className="fill-none stroke-blue-500 stroke-[4px] md:stroke-[6px] "
        x="1%"
        y="1%"
        height="98%"
        width="98%"
        // width={900}
        // height={1900}

        strokeLinecap="square"
        strokeLinejoin="miter"
        // x={10}
        // y={10}
      />
    </svg>
    // <div className="absolute left-[3.6vw] right-[3.6vw] bottom-[18vw] top-[18vw] -z-20 border-4 border-blue-500 md:top-[10vw] md:border-[6px] lg:top-[3vw]  lg:bottom-[3vw]" />
    // </div>
  );
}
