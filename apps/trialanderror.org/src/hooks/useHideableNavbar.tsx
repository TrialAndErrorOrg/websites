/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState, useCallback, useRef } from 'react'
// import {useScrollPosition} from '../utils/scrollUtils';
import { useMotionValueEvent, useScroll } from 'framer-motion'

/**
 * Wires the imperative logic of a hideable navbar.
 * @param hideOnScroll If `false`, this hook is basically a no-op.
 */
export function useHideableNavbar(hideOnScroll = true): {
  /** A ref to the navbar component. Plug this into the actual element. */
  readonly navbarRef: (node: HTMLElement | null) => void
  /** If `false`, the navbar component should not be rendered. */
  readonly isNavbarVisible: boolean
} {
  const [isNavbarVisible, setIsNavbarVisible] = useState(hideOnScroll)
  const isFocusedAnchor = useRef(false)
  const navbarHeight = useRef(0)
  const navbarRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      navbarHeight.current = node.getBoundingClientRect().height
    }
  }, [])

  // useScrollPosition(({scrollY: scrollTop}, lastPosition) => {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollTop = scrollY.get()
    const lastScrollTop = scrollY.getPrevious()
    if (!hideOnScroll) {
      return
    }

    // Needed mostly for handling rubber band scrolling.
    // See https://github.com/facebook/docusaurus/pull/5721
    if (scrollTop < navbarHeight.current) {
      setIsNavbarVisible(true)
      return
    }

    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false
      return
    }

    const documentHeight = document.documentElement.scrollHeight - navbarHeight.current
    const windowHeight = window.innerHeight

    if (lastScrollTop && scrollTop >= lastScrollTop) {
      setIsNavbarVisible(false)
    } else if (scrollTop + windowHeight < documentHeight) {
      setIsNavbarVisible(true)
    }
  })

  // useLocationChange((locationChangeEvent) => {
  //   if (!hideOnScroll) {
  //     return;
  //   }

  //   // See https://github.com/facebook/docusaurus/pull/8059#issuecomment-1239639480
  //   const currentHash = locationChangeEvent.location.hash;
  //   const currentHashAnchor = currentHash
  //     ? document.getElementById(currentHash.substring(1))
  //     : undefined;

  //   if (currentHashAnchor) {
  //     isFocusedAnchor.current = true;
  //     setIsNavbarVisible(false);
  //     return;
  //   }

  //   setIsNavbarVisible(true);
  // });

  return { navbarRef, isNavbarVisible }
}
