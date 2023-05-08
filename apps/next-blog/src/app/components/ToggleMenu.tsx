'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'

export function ToggleMenu() {
  return (
    <button
      type="button"
      className="button-sleek px-2 py-1"
      aria-label="Toggle Menu"
      data-aw-toggle-menu
    >
      <Bars3Icon className="h-6 w-6" />
    </button>
  )
}
