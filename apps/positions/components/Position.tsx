import SlideOver from './SlideOver'
import type { OpenPosition } from '@/types'
import Image from 'next/image'
import { CalendarIcon as FilledCalendarIcon, ClockIcon } from '@heroicons/react/24/outline/index'
import { CalendarIcon } from '@heroicons/react/24/solid/index'
import { format } from 'date-fns'

interface Props {
  position: OpenPosition
}

export function Position(props: Props) {
  const { position } = props

  return (
    <div className="relative bg-white">
      <div className="lg:sticky lg:top-20 lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-2/5">
          <Image
            className="h-56 min-w-full object-cover lg:min-h-screen"
            src={position.image.url}
            height={position.image.height}
            width={position.image.width}
            alt=""
          />
        </div>
      </div>
      <div className="min-h-[100vh] relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-5">
        <div className="lg:col-start-3 col-span-3 lg:pl-8">
          <div className="text-base prose prose-sm md:prose-lg prose-a:text-orange-500 flex flex-col gap-2 max-w-prose mx-auto lg:max-w-7xl lg:mr-auto lg:ml-0">
            <h1 className="mt-2 md:!text-7xl leading-8 font-extrabold tracking-tight text-gray-900 text-4xl">
              {position.title}
            </h1>
            {/* Deadline, earliest start date, time commitment  */}
            <div className="flex my-4 flex-col gap-2">
              {position.deadline && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-900 flex  gap-2 items-center">
                    <FilledCalendarIcon className="h-5 w-5  inline-block" />
                    Deadline
                  </span>
                  <span className="text-gray-500">
                    {format(new Date(position.deadline), 'MMMM d, yyyy')}
                  </span>
                </div>
              )}
              {position.startDate && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-900 flex gap-2 items-center">
                    <CalendarIcon className="h-5 w-5 inline-block" />
                    Earliest start date
                  </span>
                  <span className="text-gray-500">
                    {format(new Date(position.startDate), 'MMMM d, yyyy')}
                  </span>
                </div>
              )}

              {position.timeCommitment && (
                <div className="flex flex-col gap-2">
                  <span className="text-gray-900 flex gap-2 items-center">
                    <ClockIcon className="h-5 w-5 inline-block" />
                    Time commitment (per week)
                  </span>
                  <span className="text-gray-500">{position.timeCommitment}</span>
                </div>
              )}
            </div>

            {position.description && (
              <div>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Description
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: position.description }}
                  className="text-lg"
                />
              </div>
            )}
            {position.needToHave && (
              <div>
                <h3 className="text-2xl">Need To Have's</h3>
                <div className="" dangerouslySetInnerHTML={{ __html: position.needToHave }} />
              </div>
            )}

            {position.niceToHave && (
              <div>
                <h3 className="text-2xl">Nice To Have's</h3>
                <div dangerouslySetInnerHTML={{ __html: position.niceToHave }} />
              </div>
            )}

            {position.whatYoullDo && (
              <div>
                <h3 className="text-2xl">What You'll Do</h3>
                <div dangerouslySetInnerHTML={{ __html: position.whatYoullDo }} />
              </div>
            )}
            {position.whatWeOffer && (
              <div>
                <h3 className="text-2xl">What We Offer You</h3>
                <div dangerouslySetInnerHTML={{ __html: position.whatWeOffer }} />
              </div>
            )}
            {position.finalWords && (
              <div
                className="mt-4 text-lg "
                dangerouslySetInnerHTML={{ __html: position.finalWords }}
              />
            )}
            {/* <p>
              If you have any questions, please reach out to{' '}
              <a className="text-orange-500" href={`mailto:${position.moreInfoMail}`}>
                {position.moreInfoMail}
              </a>
            </p> */}
          </div>
          <div className="mt-5">
            <SlideOver position={position} />
          </div>
        </div>
      </div>
    </div>
  )
}
