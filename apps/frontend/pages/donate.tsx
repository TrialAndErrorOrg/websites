import { Seo } from "../components/SEO"
import { BaseLayout } from "../Layouts/BaseLayout"
import { trpc } from "../utils/trpc"
import { NextPageWithLayout } from "./_app"

const Donate: NextPageWithLayout = () => {
  const { data } = trpc.useQuery(["page.donate-page"])
  return (
    <>
      <Seo seo={data?.seo} />
      <div>
        <h1>Donate</h1>
        <p>
          We are a non-profit organization and we do not accept donations. If
          you would like to donate to our organization, please contact us at
        </p>
      </div>
    </>
  )
}

export default Donate
Donate.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
