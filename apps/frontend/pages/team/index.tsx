import { Seo } from "../../components/SEO"
import { TeamList } from "../../components/team/TeamList"
import { BaseLayout } from "../../layouts/BaseLayout"
import { trpc } from "../../utils/trpc"
import { NextPageWithLayout } from "../_app"

const Team: NextPageWithLayout = () => {
  // const { data: team } = trpc.useQuery(["teamMember.getAll"])
  const { data: page } = trpc.useQuery(["page.team-page"])

  return (
    <>
      <Seo seo={page?.seo} />
      <main className="item-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Meet the Team!</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.content ?? "<p></p>" }} />
        {/* <TeamGrid teamMembers={team ?? []} /> */}
        <TeamList />
      </main>
    </>
  )
}
export default Team

Team.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
