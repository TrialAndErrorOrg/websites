'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ReviewAssignment } from './pr/[pr]/page'

export function ReviewDisclosure({ review }: { review: ReviewAssignment }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="text-indigo-600 hover:text-indigo-500">
            {open ? 'Hide' : 'Show'} reviewer comments
          </Disclosure.Button>

          {/*
Use the `Transition` + `open` render prop argument to add transitions.
*/}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
Don't forget to add `static` to your `Disclosure.Panel`!
*/}
            <Disclosure.Panel>
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: review.reviewerComments?.[0]?.comments,
                }}
              />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
