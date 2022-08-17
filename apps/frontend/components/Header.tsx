/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link"
import Image from "next/image"

import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { GetAttributesValues } from "@strapi/strapi"
import { trpc } from "../utils/trpc"

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ")

const PlainLink = ({ slug, title }: { slug: string; title: string }) => (
  <Link href={slug}>
    <a
      href={slug}
      className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
      {title}
    </a>
  </Link>
)

type Menu = GetAttributesValues<"plugin::menus.menu">
type MenuItem = GetAttributesValues<"plugin::menus.menu-item">
type HeaderType = MenuItem & { children: MenuItem[] }

const Popout = ({ header }: { header: HeaderType }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? "text-gray-900" : "text-gray-500",
            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          )}
        >
          <span>{header.title}</span>
          <ChevronDownIcon
            className={classNames(
              open ? "text-gray-600" : "text-gray-400",
              "ml-2 h-5 w-5 group-hover:text-gray-500"
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
          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                {header.children?.map((child) => (
                  <a
                    key={child.title}
                    href={child.url}
                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      {/* <solution.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                /> */}
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        {child.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {/* {header.description} */}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

const MainNav = ({ headers }: { headers: Menu }) => (
  <Popover.Group as="nav" className="hidden space-x-10 md:flex">
    {headers?.items
      ?.map((header) => {
        if (header.title === "Home") {
          return null
        }
        // @ts-expect-error Header does hoave children, generated type is incorrect
        if (header.children?.length === 0) {
          return (
            <PlainLink
              key={header.title}
              slug={header.url!}
              title={header.title}
            />
          )
        }
        return <Popout key={header.title} header={header as HeaderType} />
      })
      .filter(Boolean)}
  </Popover.Group>
)

//           <a
//             href="#"
//             className="text-base font-medium text-gray-500 hover:text-gray-900"
//           >
//             Docs
//           </a>

//           <Popover className="relative">
//             {({ open }) => (
//               <>
//                 <Popover.Button
//                   className={classNames(
//                     open ? "text-gray-900" : "text-gray-500",
//                     "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   )}
//                 >
//                   <span>More</span>
//                   <ChevronDownIcon
//                     className={classNames(
//                       open ? "text-gray-600" : "text-gray-400",
//                       "ml-2 h-5 w-5 group-hover:text-gray-500"
//                     )}
//                     aria-hidden="true"
//                   />
//                 </Popover.Button>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-200"
//                   enterFrom="opacity-0 translate-y-1"
//                   enterTo="opacity-100 translate-y-0"
//                   leave="transition ease-in duration-150"
//                   leaveFrom="opacity-100 translate-y-0"
//                   leaveTo="opacity-0 translate-y-1"
//                 >
//                   <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
//                     <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                       <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                         {resources.map((resource) => (
//                           <a
//                             key={resource.name}
//                             href={resource.href}
//                             className="-m-3 block rounded-md p-3 hover:bg-gray-50"
//                           >
//                             <p className="text-base font-medium text-gray-900">
//                               {resource.name}
//                             </p>
//                             <p className="mt-1 text-sm text-gray-500">
//                               {resource.description}
//                             </p>
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </Popover.Panel>
//                 </Transition>
//               </>
//             )}
//           </Popover>
//         </Popover.Group>
//         <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//           <a
//             href="#"
//             className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
//           >
//             Sign in
//           </a>
//           <a
//             href="#"
//             className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//           >
//             Sign up
//           </a>
//         </div>

export const Header = () => {
  const { data } = trpc.useQuery(["nav.main"])
  const headers = data?.data?.[0] ?? ({} as Menu)
  console.log({ headers })

  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <span className="sr-only">Home</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
                width="32"
                height="32"
              />
            </a>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <MainNav headers={headers} />
      </div>

      {/* Mobile */}
      {/* <Transition
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
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
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
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                {resources.map((resource) => (
                  <a
                    key={resources.name}
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
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition> */}
    </Popover>
  )
}