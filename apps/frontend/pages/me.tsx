import { BaseLayout } from "../Layouts/BaseLayout"
import { trpc } from "../utils/trpc"
import { NextPageWithLayout } from "./_app"

const Me: NextPageWithLayout = () => {
  const { data } = trpc.useQuery(["orcid.me"])
  return <div>{JSON.stringify(data)}</div>
}

export default Me

Me.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
