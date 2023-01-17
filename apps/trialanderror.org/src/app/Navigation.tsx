'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-10 flex w-full justify-end gap-8 p-6 pr-[8vw] text-xl font-semibold text-blue-500 backdrop-blur-sm">
      <div
        id="ribbon"
        className="w-30 absolute left-[8vw] top-0 flex h-[15vh] flex-col items-center justify-end bg-blue-500"
      >
        <span className="p-2 text-7xl text-white">TE</span>
      </div>
      <Link href="/" className={`sleek-underline-blue ${pathname === '/' ? 'after:!w-full' : ''}`}>
        Home
      </Link>
      <Link
        href="/about"
        className={`sleek-underline-blue ${pathname?.startsWith('/about') ? 'after:!w-full' : ''}`}
      >
        About
      </Link>
      <Link
        href="/news"
        className={`sleek-underline-blue ${pathname?.startsWith('/news') ? 'after:!w-full' : ''}`}
      >
        News & Events
      </Link>
      <Link
        href="/projects"
        className={`sleek-underline-blue ${
          pathname?.startsWith('/projects') ? 'after:!w-full' : ''
        }`}
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={`sleek-underline-blue ${
          pathname?.startsWith('/contact') ? 'after:!w-full' : ''
        }`}
      >
        Contact
      </Link>
    </nav>
  )
}
