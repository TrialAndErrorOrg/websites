import type { Application, OpenPosition } from '@/types'
import { PaperClipIcon } from '@heroicons/react/24/outline'

interface Props {
  application: Application
}

export function Application(props: Props) {
  const { application } = props

  return (
    <div className="relative bg-white flex-col flex w-full ">
      <div className="bg-white overflow-hidden sm:rounded-lg max-w-[80vw] mx-auto">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {application.name}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Application for</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {application.open_position?.title}
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {application.email}
              </dd>
            </div>
            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
            </div> */}
            {application.motivation && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Motivation</dt>
                <dd
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  dangerouslySetInnerHTML={{
                    __html: application.motivation,
                  }}
                ></dd>
              </div>
            )}
            {application.cv && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Previous Experience</dt>
                <dd
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  dangerouslySetInnerHTML={{
                    __html: application.cv,
                  }}
                ></dd>
              </div>
            )}

            {application.additional && (
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Additional Information</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {application.additional}
                </dd>
              </div>
            )}

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  {application.documents?.map((document: any) => (
                    <li
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      key={document.id}
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">{document.name}</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={document.url}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
