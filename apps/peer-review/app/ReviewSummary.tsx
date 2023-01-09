'use client'

import { Disclosure, Transition } from '@headlessui/react'
import PaperClipIcon from '@heroicons/react/outline/PaperClipIcon'
import { Review } from './[pr]/page'

export function ReviewSummary({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-black overflow-hidden " key={review.reviewerId}>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Review by {review.reviewerFullName}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">{review.reviewerFullName}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Recommendation</dt>
            <dd className="mt-1 text-sm text-gray-900">{review.recommendationText}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {review.reviewerComments?.[0]?.authorEmail?.toLowerCase()}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Reviewer Comments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-indigo-600 hover:text-indigo-500">
                      Show more {`${open}`}
                    </Disclosure.Button>

                    {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
                    <Disclosure.Panel>AAAAAAAAA</Disclosure.Panel>
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
                      {/* <Disclosure.Panel>
                        <div
                           className="prose"
                           dangerouslySetInnerHTML={{
                             __html: review.reviewerComments?.[0]?.comments,
                           }}
                         />
                        Yes! You can purchase a license that you can share with your entire team.
                      </Disclosure.Panel> */}
                    </Transition>
                  </>
                )}
              </Disclosure>
            </dd>
          </div>
          {review.reviewFiles.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  {review.reviewFiles.map((file) => (
                    <li
                      key={file._href}
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">{file.name.en_US}</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                    // <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    //   <div className="w-0 flex-1 flex items-center">
                    //     <PaperClipIcon
                    //       className="flex-shrink-0 h-5 w-5 text-gray-400"
                    //       aria-hidden="true"
                    //     />
                    //     <span className="ml-2 flex-1 w-0 truncate">
                    //       coverletter_back_end_developer.pdf
                    //     </span>
                    //   </div>
                    //   <div className="ml-4 flex-shrink-0">
                    //     <a
                    //       href="#"
                    //       className="font-medium text-indigo-600 hover:text-indigo-500"
                    //     >
                    //       Download
                    //     </a>
                    //   </div>
                    // </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  )
}
