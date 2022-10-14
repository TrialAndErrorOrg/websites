import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/future/image'
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
    title: `Open Positions @ Center of Trial and Error`,
    description: `We are looking for a few good people to join our team.`,
    canonical: `https://positions.trialanderror.org/`,
    ogType: 'website',
  }

  return (
    <Layout meta={meta}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col gap-10 items-center justify-center w-full flex-1 px-20 text-center">
          <span className="self-center fill-black h-20 w-20 dark:fill-white font-overpass ml-2 text-xl leading-none font-black text-gray-900 whitespace-nowrap dark:text-white">
            <Logo />
          </span>
          <h1 className="text-6xl font-bold">Open Positions</h1>
          {/*  List some cards with currently open positions */}

          <div className="flex flex-col gap-4">
            {positions?.length ? (
              positions.map((position) => (
                <div key={position.id} className="relative group flex overflow-hidden  shadow-lg">
                  <div className="flex-shrink-0">
                    <Image
                      className="object-cover h-64 w-80"
                      src={position.image.url}
                      height={position.image.height}
                      width={position.image.width}
                      alt=""
                    />
                  </div>

                  <Link
                    href={`/position/${position.slug}`}
                    className=" justify-between flex-1 bg-white width-full p-6 flex flex-col items-start  link-overlay"
                  >
                    <div className="flex-1 flex flex-col items-start">
                      <p className="text-sm font-medium text-indigo-600">{position.type}</p>
                      <p className="text-xl font-semibold text-gray-900">{position.title}</p>
                      <p className="mt-3 text-base text-gray-500">{position.summary}</p>
                    </div>
                    <Link href={`/position/${position.slug}`} className="mt-3 link-overlay">
                      {/* Animated button that says learn more with an arrow */}
                      <div className="flex items-center p-2 font-bold rounded-sm  bg-orange-300 justify-between w-full">
                        <p className="text-base font-medium text-white">Learn more</p>
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-white group-hover:text-indigo-500"
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
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold text-gray-900">No positions available!</p>

                <p className="text-base text-gray-500">
                  Still interested in working with us?{' '}
                  <a
                    href="mailto:positions@trialanderror.org"
                    className="text-indigo-600 hover:text-indigo-500"
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
