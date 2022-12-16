import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../core/Logo'
import { Layout } from '../layouts/Layout'
import { getPositions } from '../utils/positions'
import { OpenPosition } from '../utils/types'

export const getStaticProps: GetStaticProps = async (context) => {
  const positions = (await getPositions()) ?? []

  return {
    props: {
      positions,
    },
  }
}

export default function Index({ positions }: { positions: OpenPosition[] }) {
  const meta = {
    title: 'Open Positions @ Center of Trial and Error',
    description: 'We are looking for a few good people to join our team.',
    canonical: 'https://positions.trialanderror.org/',
    ogType: 'website',
  }

  return (
    <Layout meta={meta}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col gap-4 items-center justify-center w-full flex-1 px-20 text-center">
          <div className="flex md:flex-row items-center mt-5 gap-5 md:gap-20">
            <span className="hidden md:flex self-center fill-black h-20 w-20 dark:fill-white font-overpass ml-2 text-xl leading-none font-black text-gray-900 whitespace-nowrap dark:text-white">
              <Logo />
            </span>
            <h1 className="text-4xl md:text-6xl font-bold">Open Positions</h1>
          </div>
          <p>
            Open positions at the Center of Trial and Error. We are looking for a few good people to
            join our team.
          </p>
          {/*  List some cards with currently open positions */}

          <div className="flex flex-col items-center max-w-3xl gap-10 my-10">
            {positions?.length ? (
              <>
                {positions.map((position, idx) => (
                  <div
                    key={position.id}
                    className="relative group flex flex-col sm:flex-row w-full overflow-hidden "
                  >
                    <div className="sm:w-80 w-screen overflow-clip">
                      <Image
                        className="object-cover h-40 sm:h-64 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        priority={idx < 1}
                        src={position.image.formats?.large?.url ?? position.image.url}
                        height={position.image.formats?.large?.height ?? position.image.height}
                        width={position.image.formats?.large?.width ?? position.image.width}
                        alt=""
                      />
                    </div>

                    <Link
                      href={`/position/${position.slug}`}
                      className=" justify-between gap-4 flex-1 bg-white width-full p-6 flex flex-col items-start  link-overlay"
                    >
                      <div className="flex-1 flex flex-col items-start">
                        <p className="text-sm font-medium text-orange-600 uppercase">
                          {position.type}
                        </p>
                        <p className="text-xl font-semibold text-gray-900 text-left">
                          {position.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 text-left">{position.summary}</p>
                      </div>
                      <div className=" group-hover:underline flex items-center font-bold rounded-lg  text-orange-500 justify-between w-full">
                        <p className="text-base font-bold">Learn more</p>
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 -rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="container max-w-md">
                  <p className="text-gray-500 text-center">
                    We are always looking for motivated people to join our team! If you don't see a
                    position that fits your skills but would still like to contribute to a fairer,
                    more open academia, please send us a message at{' '}
                    <a
                      href="mailto:positions@trialanderror.org"
                      className="text-orange-500 hover:underline"
                    >
                      positions@trialanderror.org
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold text-gray-900">No positions available!</p>

                <p className="text-base text-gray-500">
                  Still interested in working with us?{' '}
                  <a
                    href="mailto:positions@trialanderror.org"
                    className="text-orange-600 hover:text-orange-500"
                  >
                    Send us an email
                  </a>
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </Layout>
  )
}
