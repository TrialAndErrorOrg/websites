'use client'

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-bind */

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Fragment, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Menu, MenuItem } from '@/types'
import { useHideableNavbar } from '../../hooks/useHideableNavbar'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const useOnHover = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const timeoutDuration = 200
  let timeout: NodeJS.Timeout

  const closePopover = () =>
    buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    )

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout)
    if (open) return
    buttonRef.current?.click()
  }

  const onMouseLeave = (open: boolean) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return { buttonRef, onMouseEnter, onMouseLeave }
}

function HoverPopover({
  pathname,
  item: { children, title, url, target },
}: {
  item: MenuItem
  pathname?: string | null
  // subItems: { name: string; href: string; description?: string; scroll?: boolean }[]
  // title: string
  // titleHref?: string
}) {
  const { buttonRef, onMouseEnter, onMouseLeave } = useOnHover()
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            type="button"
            ref={buttonRef}
            className={classNames(
              // open ? 'text-blue-500' : 'text-gray-500',
              'sleek-underline-blue text-xl text-blue-500',
              'group inline-flex items-center text-base font-medium hover:text-gray-900 hover:ring-[rgba(0,0,0,0)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2',
              pathname &&
                url &&
                (pathname === url && pathname === '/' ? 'after:!w-full' : pathname?.startsWith(url))
                ? 'after:!w-full'
                : '',
            )}
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
          >
            {url ? (
              <Link
                href={url}
                target={target ?? url?.startsWith('http') ? '_blank' : undefined}
                className="text-lg text-blue-500"
              >
                {title}
              </Link>
            ) : (
              <span className="text-lg text-blue-500">{title}</span>
            )}
            <ChevronDownIcon
              className={classNames('text-blue-500', 'ml-2 h-5 w-5')}
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
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-[250px] -translate-x-1/2 transform px-2 sm:px-0"
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <div className="overflow-hidden border-2 border-blue-500 ring-opacity-5">
                <div className="relative  grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {children?.map(({ title, url, target, description }) => (
                    <Link
                      key={title}
                      target={target ?? url?.startsWith('http') ? '_blank' : undefined}
                      href={url ?? ''}
                      scroll={false}
                      className="sleek-underline-blue -m-3 block rounded-md p-3 hover:bg-blue-50/50"
                    >
                      <p className="text-base font-medium text-gray-900">{title}</p>
                      <p className="mt-1 text-sm text-gray-500">{description}</p>
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

export function Navigation({ nav }: { nav: Menu }) {
  const pathname = usePathname()

  const { isNavbarVisible, navbarRef } = useHideableNavbar()
  const [hover, setHover] = useState(false)
  return (
    <Popover
      as="nav"
      className={`fixed top-0 z-10 md:bg-white ${
        isNavbarVisible || hover ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-500 ease-out`}
      ref={navbarRef}
    >
      <motion.a
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        href="/"
        initial={{ translateY: '-21vh' }}
        animate={{ translateY: '-4rem' }}
        transition={{
          type: 'spring',
          stiffness: 100,
          bounce: 0.5,
        }}
        id="ribbon"
        className="absolute left-4 z-20 hidden h-[calc(21vh+5rem)] w-20 flex-col items-center justify-end bg-blue-500 md:flex lg:left-[calc(16.6667%-8vw)]"
      >
        <Image
          src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
          alt="TE logo"
          width={90}
          height={90}
        />
      </motion.a>
      <div className="flex w-screen items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 md:pr-[9vw]">
        <div className="flex justify-start md:w-0 md:flex-1" />
        <div className="-my-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md border-4 border-blue-500 bg-white p-2  text-blue-500  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          {nav.items?.map((item) => {
            if (item.children?.length === 0) {
              const shouldOpenInNewTab =
                item.target ?? item.url?.startsWith('http') ? '_blank' : undefined

              // eslint-disable-next-line no-nested-ternary
              const underlineMaybe = !pathname
                ? ''
                : pathname.replace(/^\//, '') === item.url?.replace(/^\//, '')
                ? 'after:!w-full'
                : ''
              // const underlineMaybe =
              //   pathname &&
              //   ((pathname === item.url && pathname === '/') || item.url?.startsWith(pathname))
              //     ? 'after:!w-full'
              //     : ''
              return (
                <Link
                  key={item.title}
                  href={item.url ?? '/'}
                  target={shouldOpenInNewTab}
                  className={`sleek-underline-blue text-lg font-semibold text-blue-500 ${underlineMaybe}`}
                >
                  {item.title}
                </Link>
              )
            }
            return <HoverPopover pathname={pathname} key={item.title} item={item} />
          })}
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
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="bg-blue-500"
                    src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
                    alt="Workflow"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1">
                  {nav.items?.map((item) => {
                    if (item.children?.length === 0) {
                      const shouldOpenInNewTab =
                        item.target ?? item.url?.startsWith('http') ? '_blank' : undefined
                      return (
                        <Link
                          key={item.title}
                          href={item.url ?? '/'}
                          target={shouldOpenInNewTab}
                          className="flex items-center rounded-lg py-3 hover:bg-gray-50"
                        >
                          <div className="text-base font-medium text-gray-900">{item.title}</div>
                        </Link>
                      )
                    }

                    return item?.children?.map((subItem) => {
                      if (!subItem?.url) return null

                      const shouldOpenInNewTab =
                        subItem.target ?? subItem.url?.startsWith('http') ? '_blank' : undefined
                      return (
                        <Link
                          key={subItem.title}
                          href={subItem.url}
                          target={shouldOpenInNewTab}
                          className="flex items-center rounded-lg py-3 hover:bg-gray-50"
                        >
                          <div className="text-base font-medium text-gray-900">{subItem.title}</div>
                        </Link>
                      )
                    })
                  })}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
