'use client'

import { useEffect } from 'react'

export function ShittyScrollHack() {
  useEffect(() => {
    const { hash } = window.location
    if (hash.length > 0) {
      window.location.hash = ''
      window.location.hash = hash
    }
  })

  return null
}
