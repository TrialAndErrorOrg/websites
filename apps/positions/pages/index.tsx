import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { Layout } from '../layouts/Layout'
import { getPositions } from '../utils/positions'

export const getStaticProps: GetStaticProps = async (context) => {
  const positions = (await getPositions()) ?? []

  return {
    props: {
      positions,
    },
  }
}

export default function Index({ positions }: InferGetStaticPropsType<typeof getStaticProps>) {
  const meta = {
    title: `Positionss`,
    description: `Positionss`,
    canonical: `https://positionss.vercel.app/`,
    ogTitle: `Positionss`,
    ogType: 'website',
  }

  return (
    <Layout meta={meta}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          {/*  List some cards with currently open positions */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((position) => (
              <div key={position.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-48"
                    src={position.image.url}
                    height={position.image.height}
                    width={position.image.width}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href="#" className="hover:underline">
                        {position.type}
                      </a>
                    </p>
                    <Link href={`/position/${position.slug}`} className="block mt-2">
                      <div>
                        <p className="text-xl font-semibold text-gray-900">{position.title}</p>
                        <p className="mt-3 text-base text-gray-500">{position.description}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}
