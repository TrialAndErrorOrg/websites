import SlideOver from './SlideOver'
import type { Application, OpenPosition } from '../utils/types'
import Image from 'next/future/image'
import jestConfig from '../jest.config'

interface Props {
  application: Application
}

export function Position(props: Props) {
  const { application } = props

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-2/5">
          <Image
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={application.image.url}
            height={application.image.height}
            width={application.image.width}
            alt=""
          />
        </div>
      </div>
      <div className="min-h-[100vh] relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-5">
        <div className="lg:col-start-3 col-span-3 lg:pl-8">
          <div className="text-base prose prose-sm md:prose-base flex flex-col gap-4 max-w-prose mx-auto lg:max-w-lg lg:mr-auto lg:ml-0">
            <h2 className="leading-6 text-orange-600 font-semibold tracking-wide uppercase">
              {application.type}
            </h2>
            <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {application.title}
            </h1>
            {application.summary && (
              <div
                dangerouslySetInnerHTML={{ __html: application.summary }}
                className="text-lg text-gray-500"
              />
            )}

            {application.description && (
              <>
                <h4 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Description
                </h4>
                <div
                  dangerouslySetInnerHTML={{ __html: application.description }}
                  className="text-lg text-gray-500"
                />
              </>
            )}
            {application.needToHave && (
              <>
                <h3 className="text-2xl">Need To Have's</h3>
                <div
                  className="prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: application.needToHave }}
                />
              </>
            )}

            {application.niceToHave && (
              <>
                <h3 className="text-2xl">Nice To Have's</h3>
                <div
                  className="prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: application.niceToHave }}
                />
              </>
            )}

            {application.whatYoullDo && (
              <>
                <h3 className="text-2xl">What You'll Do</h3>
                <div
                  className="prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: application.whatYoullDo }}
                />
              </>
            )}
            <p>
              If you have any questions, please reach out to{' '}
              <a className="text-orange-500" href={`mailto:${application.moreInfoMail}`}>
                {application.moreInfoMail}
              </a>
            </p>
          </div>
          <div className="mt-5">
            <SlideOver position={application} />
          </div>
        </div>
      </div>
    </div>
  )
}
