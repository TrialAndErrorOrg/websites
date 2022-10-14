import SlideOver from './SlideOver'
import type { OpenPosition } from '../utils/types'
import Image from 'next/future/image'
import jestConfig from '../jest.config'

interface Props {
  position: OpenPosition
}

export function Position(props: Props) {
  const { position } = props

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-2/5">
          <Image
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={position.image.url}
            height={position.image.height}
            width={position.image.width}
            alt=""
          />
        </div>
      </div>
      <div className="min-h-[100vh] relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-5">
        <div className="lg:col-start-3 col-span-3 lg:pl-8">
          <div className="text-base prose flex flex-col gap-4 max-w-prose mx-auto lg:max-w-lg lg:mr-auto lg:ml-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              {position.type}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {position.title}
            </h3>
            {position.description && (
              <div
                dangerouslySetInnerHTML={{ __html: position.summary }}
                className="text-lg text-gray-500"
              />
            )}

            {position.description && (
              <>
                <h4 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Description
                </h4>
                <div
                  dangerouslySetInnerHTML={{ __html: position.description }}
                  className="text-lg text-gray-500"
                />
              </>
            )}
            {position.needToHave && (
              <>
                <h3 className="text-2xl">Need To Have's</h3>
                <div
                  className="prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: position.needToHave }}
                />
              </>
            )}

            {position.niceToHave && (
              <>
                <h3 className="text-2xl">Nice To Have's</h3>
                <div
                  className="prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: position.niceToHave }}
                />
              </>
            )}

            {position.whatYoullDo && (
              <>
                <h3 className="text-2xl">What You'll Do</h3>
                <div
                  className="mt-5 prose prose-indigo text-gray-500"
                  dangerouslySetInnerHTML={{ __html: position.whatYoullDo }}
                />
              </>
            )}
          </div>
          <SlideOver position={position} />
        </div>
      </div>
    </div>
  )
}
