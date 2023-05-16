import { Bars3Icon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

export function ToggleMenu({ setHidden }: { setHidden: Dispatch<SetStateAction<boolean>> }) {
  return (
    <button
      type="button"
      className="button-sleek px-2 py-1"
      aria-label="Toggle Menu"
      data-aw-toggle-menu
      onClick={() => setHidden((hidden) => !hidden)}
    >
      <Bars3Icon className="h-6 w-6" />
    </button>
  )
}
