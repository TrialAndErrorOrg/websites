'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Fragment, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  // CursorClickIcon,
  HandRaisedIcon,
  // DocumentReportIcon,
  DocumentCheckIcon,
  Bars3Icon,
  ArrowUpCircleIcon,
  // RefreshIcon,
  ShieldCheckIcon,
  // Eye
  XMarkIcon,
  ViewColumnsIcon,
  // ViewGridIcon,
  // XIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

// export function Navigation() {
//   const pathname = usePathname()

//   return (
//     <nav className="sticky top-0 z-10 flex w-full justify-end gap-8 bg-white p-6 pr-[8vw] text-xl font-semibold text-blue-500 backdrop-blur-sm">
//       <motion.div
//         initial={{ y: '-100%' }}
//         animate={{ y: 0 }}
//         transition={{
//           type: 'spring',
//           stiffness: 100,
//           bounce: 0.5,
//         }}
//         id="ribbon"
//         className="w-30 absolute -top-10 left-[8vw] z-10 hidden h-[15vh] flex-col items-center justify-end bg-blue-500 md:flex"
//       >
//         <span className="p-2 text-7xl text-white">TE</span>
//       </motion.div>
//       /* This example requires Tailwind CSS v2.0+ */

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: HandRaisedIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewColumnsIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowUpCircleIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentCheckIcon,
  },
]
const resources = [
  {
    name: 'Journal of Trial & Error',
    description: 'An independent, diamond open-access journal redefining failure.',
    href: 'https://journal.trialanderror.org',
  },
  {
    name: 'Blog of Trial & Error',
    description: 'A Blog',
    href: 'https://blog.trialanderror.org',
  },
  {
    name: 'Publishers of Trial & Error',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

const abouts = [
  {
    name: 'Our vision',
    description: 'An independent, diamond open-access journal redefining failure.',
    href: 'https://journal.trialanderror.org',
  },
  {
    name: 'The Team',
    description: 'A Blog',
    href: 'https://blog.trialanderror.org',
  },
  {
    name: 'Publishers of Trial & Error',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const useOnHover = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: NodeJS.Timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )
  }

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open: boolean) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return { buttonRef, onMouseEnter, onMouseLeave }
}

const HoverPopover = ({
  pathname,
  subItems,
  title,
  titleHref,
}: {
  pathname?: string
  subItems: { name: string; href: string; description?: string }[]
  title: string
  titleHref?: string
}) => {
  const { buttonRef, onMouseEnter, onMouseLeave } = useOnHover()
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={buttonRef}
            className={classNames(
              // open ? 'text-blue-500' : 'text-gray-500',
              'sleek-underline-blue text-blue-500 ',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
            )}
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
          >
            {titleHref ? (
              <Link
                href={titleHref}
                className={`text-blue-500 ${pathname?.startsWith('/about') ? 'after:!w-full' : ''}`}
              >
                {title}
              </Link>
            ) : (
              <span>{title}</span>
            )}
            <ChevronDownIcon
              className={classNames(
                // open ? 'text-gray-600' : 'text-gray-400',
                'text-blue-500',
                'ml-2 h-5 w-5', // group-hover:text-gray-500',
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <div className="overflow-hidden border-2 border-blue-500 ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {subItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export function Navigation() {
  const pathname = usePathname()
  return (
    <Popover className="fixed top-0 z-10 w-full bg-white">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 ">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          {/* <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a> */}

          <motion.a
            href="/"
            initial={{ translateY: '-100%' }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              bounce: 0.5,
            }}
            id="ribbon"
            className="absolute left-[calc(16.6667%-5vw)] -top-10 z-10 hidden h-[20vh] w-[5vw] flex-col items-center justify-end bg-blue-500 md:flex"
          >
            <Image
              src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
              alt="TE logo"
              width={100}
              height={100}
            />
          </motion.a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Link
            href="/"
            className={`sleek-underline-blue font-semibold text-blue-500 ${
              pathname === '/' ? 'after:!w-full' : ''
            }`}
          >
            Home
          </Link>
          <HoverPopover
            title="About"
            titleHref="/about"
            subItems={abouts}
            pathname={pathname ?? undefined}
          />

          <Link
            href="/news"
            className={`sleek-underline-blue text-blue-500 ${
              pathname?.startsWith('/news') ? 'after:!w-full' : ''
            }`}
          >
            News & Events
          </Link>
          <HoverPopover title="Projects" subItems={resources} />

          <Link
            href="/contact"
            className={`sleek-underline-blue ${
              pathname?.startsWith('/contact') ? 'after:!w-full' : ''
            }`}
          >
            Contact
          </Link>
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

/* <Link href="/" className={`sleek-underline-blue ${pathname === '/' ? 'after:!w-full' : ''}`}>
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
    </nav> */
// )
// }
