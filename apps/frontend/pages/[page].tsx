import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Seo } from "../components/SEO"
import { BaseLayout } from "../layouts/BaseLayout"
import { ssgDefault } from "../utils/ssgDefault"
import { trpc } from "../utils/trpc"
import { NextPageWithLayout } from "./_app"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const ssg = await ssgDefault()

  const { page } = params ?? {}
  await ssg.fetchQuery("page.get", page as string)

  return {
    props: {
      trpcState: ssg.dehydrate(),
      page,
    },
  }
}

const Page: NextPageWithLayout = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: pageData } = trpc.useQuery(["page.get", page])

  const blocks = pageData?.block?.map((block) => {
    if (!block.body) {
      return null
    }
    return (
      <div
        key={block.body.slice(0, 100)}
        dangerouslySetInnerHTML={{ __html: block?.body }}
      />
    )
  })

  console.log(pageData)

  return (
    <>
      <Seo seo={pageData?.seo} />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">{pageData?.title}</h1>
          <div className="prose prose-slate flex flex-col gap-10 dark:prose-invert">
            {blocks}
          </div>
        </div>
      </div>
    </>
  )
}

Page.getLayout = (page) => <BaseLayout>{page}</BaseLayout>

export default Page
