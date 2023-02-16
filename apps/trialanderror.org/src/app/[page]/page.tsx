import { getPage } from '../../server/page'
import { Frame } from '../components/Frame'
import { getTeam } from '../team/page'

export const revalidate = 3600 // revalidate every hour

export default async function AboutPage({ params: { page } }: { params: { page: string } }) {
  const pageResult = await getPage(page)
  if (!pageResult.title) {
    return <div>404</div>
  }

  const { title, block } = pageResult
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex min-h-screen w-screen flex-col">
        <Frame />
        <div className="relative top-[20vh] left-[13vw] -z-10 min-h-screen w-[70vw] bg-blue-50 p-6 md:w-[60vw] md:p-10 lg:top-[30vh] 2xl:w-[40vw]">
          <div className="flex w-[45vw] flex-col justify-center gap-10 md:mb-[30vh] md:gap-20">
            <h1 className="-mt-10 text-4xl font-black text-blue-500 md:-mt-16 md:text-7xl">
              {title}
            </h1>
            {block?.map((block) => {
              return (
                <div
                  className="prose"
                  // @ts-expect-error does have an id
                  key={block.id}
                  dangerouslySetInnerHTML={{
                    __html: block.body ?? '',
                  }}
                />
              )
            })}
            {/* <p className="relative flex w-[70vw] items-center leading-[1.4] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-1/2 before:w-2 before:bg-blue-500 md:w-auto md:text-lg md:before:-ml-12 md:before:flex md:before:w-3 lg:ml-40 2xl:text-[2rem] 2xl:leading-10">
              The Center of Trial & Error is a virtual platform and sandbox for disruptive
              initiatives that will lead to institutional change.
              <br />
              <br />
              With the Journal of Trial & Error as our flagship, we aim to bridge the gap between
              what researchers do and what researchers can report, to discuss and question what kind
              of knowledge is deemed valuable, to advocate for practices that positively impact the
              lives of researchers and the public, and to advance policies that put openness,
              transparency and compassion above profit, division and bottom lines.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
