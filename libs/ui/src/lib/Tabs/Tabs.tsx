export interface TabsProps {
  tabs: { title: string; contents: React.ReactNode }[]
  className: string
}
export interface Category {
  Recent: Recent[]
  Popular: Recent[]
}

interface Recent {
  id: number
  title: string
  date: string
  commentCount: number
  shareCount: number
}

import React, { Fragment, useState } from 'react'
import { Tab, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Tabs = ({ tabs, className }: TabsProps) => {
  // let [categories] = useState(cats)

  return (
    <div className={twMerge('w-full px-2 py-16 sm:px-0', className)}>
      <Tab.Group>
        {({ selectedIndex }: { selectedIndex: number }) => (
          <>
            <Tab.List className="relative flex space-x-1 rounded-lg bg-slate-100 p-1">
              {tabs.map(({ title }, index) => (
                <Tab
                  key={title}
                  className={({ selected }: { selected: boolean }) => {
                    return classNames(
                      'relative w-full rounded-lg bg-transparent py-2.5  text-sm font-medium leading-5 transition-colors focus:outline-none focus:outline-hidden',
                      selected ? 'text-red-600' : 'text-slate-600',
                      // selected
                      //   ? 'bg-white shadow'
                      //   : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    )
                  }}
                >
                  <span className="relative z-10">{title}</span>
                </Tab>
              ))}
              <div
                className={classNames(
                  'absolute left-0 min-h-[80%] rounded-md bg-white shadow-md transition-transform duration-150 ease-in',
                  ' border-2 border-red-300 ',
                )}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.42, 0.0, 1.0, 1.0)',
                  transform: `translate(${100 * selectedIndex}%,0)`,
                  width: `${100 / (Object.keys(tabs).length ?? 1)}%`,
                }}
              ></div>
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(tabs).map((tab, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                  )}
                >
                  {tab.contents}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
    </div>
  )
}
