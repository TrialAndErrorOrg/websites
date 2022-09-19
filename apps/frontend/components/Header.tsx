/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link"
import Image from "next/image"

import { Fragment } from "react"
import { Menu, Popover, Switch, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, MoonIcon, SunIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { GetAttributesValues } from "@strapi/strapi"
import { useSession } from "next-auth/react"
import { trpc } from "../utils/trpc"
import { useDarkTheme } from "../hooks/useDarkTheme"

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ")

const PlainLink = ({ slug, title }: { slug: string; title: string }) => (
  <Link
    href={slug}
    className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-slate-100 dark:hover:text-white"
  >
    {title}
  </Link>
)

type MenuType = GetAttributesValues<"plugin::menus.menu">
type MenuItem = GetAttributesValues<"plugin::menus.menu-item">
type HeaderType = MenuItem & { children: MenuItem[] }

const Popout = ({ header }: { header: HeaderType }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open
              ? "text-slate-900 dark:text-white"
              : "text-gray-500 dark:text-slate-100",
            "focus-visible-visible:outline-none focus-visible-visible:ring-2 focus-visible-visible:ring-orange-500 focus-visible-visible:ring-offset-2 group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <span>{header.title}</span>
          <ChevronDownIcon
            className={classNames(
              open
                ? "text-gray-600 dark:text-slate-200"
                : "text-gray-400 dark:text-slate-300",
              "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-slate-300"
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
              <div className="relative grid gap-6 bg-white px-5 py-6 dark:bg-blue-400 sm:gap-8 sm:p-8 lg:grid-cols-2">
                {header.children?.map((child) => (
                  <a
                    key={child.title}
                    href={child.url}
                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-blue-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-clip rounded-md bg-orange-500 text-white sm:h-12 sm:w-12">
                      {child.icon && (
                        <Image
                          src={child?.icon?.url}
                          alt={child?.icon?.alt}
                          height="50"
                          width="50"
                        />
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-slate-900 dark:text-white">
                        {child.title}
                      </p>
                      <p className="mt-1 text-sm font-normal text-slate-500 dark:text-slate-200">
                        {child?.description}
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

const ToggleDarkMode = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme()

  return (
    <Switch
      checked={!!darkTheme}
      onChange={toggleDarkTheme}
      className={classNames(
        // darkTheme ? "bg-orange-600" : "bg-gray-200",
        "group relative inline-flex h-6 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      )}
    >
      <span className="sr-only">Set darkmode</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          darkTheme ? "bg-orange-600" : "bg-gray-200",
          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
        )}
      />
      <span
        className={classNames(
          darkTheme ? "translate-x-3" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block  h-6 w-6 transform rounded-full bg-white text-slate-700 shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            darkTheme
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-[100%] w-[100%] items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <SunIcon />
        </span>
        <span
          className={classNames(
            darkTheme
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-[100%] w-[100%] items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <MoonIcon />
        </span>
      </span>
    </Switch>
  )
}

const SignIn = () => {
  const { data: session, status } = useSession()
  const { data: userNavigation } = trpc.useQuery(["nav.user"])
  const { data: avatar } = trpc.useQuery(["auth.avatar"])

  return session && status === "authenticated" ? (
    <div className="ml-4 flex items-center md:ml-6">
      <button
        type="button"
        className="rounded-full  p-1 text-gray-400 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:text-slate-300"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white p-[2px] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
            <span className="sr-only">Open user menu</span>
            <span className="h-8 w-8 overflow-clip rounded-full">
              <Image
                src={avatar}
                height="32"
                width="32"
                alt="Your profile picture"
              />
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus-visible:outline-none dark:bg-blue-500 dark:ring-white">
            {userNavigation?.items?.map((item) => (
              <Menu.Item key={item.title}>
                {({ active }) => (
                  <a
                    href={item.url}
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-blue-200" : "",
                      "block px-4 py-2 text-sm text-slate-700 dark:bg-blue-500 dark:text-slate-200"
                    )}
                  >
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  ) : (
    <div className="flex gap-4">
      <Link
        href="/api/auth/signin"
        className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white"
      >
        Sign in
      </Link>
      <Link
        href="/api/auth/signin"
        className="bg-orange-500 text-base font-bold text-white hover:bg-orange-900"
      >
        Sign up
      </Link>
    </div>
  )
}

const MainNav = ({ headers }: { headers: MenuType }) => (
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

    <ToggleDarkMode />
    <SignIn />
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
//                     "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus-visible-visible:outline-none focus-visible-visible:ring-2 focus-visible-visible:ring-orange-500 focus-visible-visible:ring-offset-2"
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
//             className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"
//           >
//             Sign up
//           </a>
//         </div>

export const Header = () => {
  const { data: nav } = trpc.useQuery(["nav.main"])
  const headers = nav ?? ({} as MenuType)

  return (
    <Popover className="sticky top-0 z-10 bg-white dark:bg-blue-600">
      <div className=" flex items-center justify-between px-4 py-5 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image
              className="h-8 w-auto sm:h-10"
              src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_blue_background_b87382260b.svg"
              alt=""
              width="32"
              height="32"
            />
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="focus-visible-visible:outline-none focus-visible-visible:ring-2 focus-visible-visible:ring-inset focus-visible-visible:ring-orange-500 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
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
          focus-visible
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-orange-600.svg"
                    alt="Workflow"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible-visible:outline-none focus-visible-visible:ring-2 focus-visible-visible:ring-inset focus-visible-visible:ring-orange-500">
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
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-orange-500 text-white">
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
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
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
