import SlideOver from './SlideOver'
import type { OpenPosition } from '../utils/types'
import Image from 'next/future/image'

interface Props {
  position: OpenPosition
}

export function Position(props: Props) {
  const { position } = props

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={position.image.url}
            height={position.image.height}
            width={position.image.width}
            alt=""
          />
        </div>
      </div>
      <div className="min-h-[100vh] relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base flex flex-col gap-4 max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              {position.type}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {position.title}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: position.description }}
              className="mt-8 text-lg text-gray-500"
            />
            <h3>Need To Have's</h3>
            <div
              className="mt-5 prose prose-indigo text-gray-500"
              dangerouslySetInnerHTML={{ __html: position.needToHave }}
            />
            <h3>Nice To Have's</h3>
            <div
              className="mt-5 prose prose-indigo text-gray-500"
              dangerouslySetInnerHTML={{ __html: position.niceToHave }}
            />
            <h3>What You'll Do</h3>
            <div
              className="mt-5 prose prose-indigo text-gray-500"
              dangerouslySetInnerHTML={{ __html: position.whatYoullDo }}
            />
          </div>
          <SlideOver position={position} />
        </div>
      </div>
    </div>
  )
}
