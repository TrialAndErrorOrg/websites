import { getPage } from '../../server/page'
import { createMetadata } from '../../utils/createMetadata'
import { Frame } from '../components/Frame'

export const revalidate = 3600 // revalidate every hour

type Props = {
  params: { page: string }
}

export async function generateMetadata({ params }: Props) {
  const { seo, title, slug } = await getPage(params.page)

  return createMetadata({
    title: seo?.metaTitle ?? title,
    description: seo?.metaDescription ?? '',
    canonical: slug,
  })
}

export default async function AboutPage({ params: { page } }: Props) {
  const pageResult = await getPage(page)

  const { title, block } = pageResult
  return (
    <main className="flex flex-col items-center">
      <div className="w-screen">
        <Frame />
        <div className="pointer-events-none relative left-[13vw] top-[20vh] -z-10 min-h-screen w-[70vw] bg-blue-50 p-6 md:w-[60vw] md:p-10 lg:top-[30vh] 2xl:w-[40vw]">
          <article className="flex w-[45vw] flex-col justify-center gap-10 md:mb-[30vh] md:gap-20">
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
          </article>
        </div>
      </div>
    </main>
  )
}
