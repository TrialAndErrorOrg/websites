import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export function AnimatedPath() {
  const ref = useRef<SVGPathElement>(null)
  const isInView = useInView(ref)

  return (
    <svg>
      <motion.path
        ref={ref}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M45.2116 113.844C41.991 97.7723 43.8806 74.0318 54.5835 60.6377C59.4391 54.561 76.8443 44.698 82.3209 55.553C88.3209 67.4466 67.1346 70.6046 64.5162 58.711C62.2011 48.1945 69.8349 39.3482 78.5027 34.5433C93.8215 26.0521 110.121 25.8784 125.958 33.0516"
        stroke="white"
        strokeWidth="0.78976"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
