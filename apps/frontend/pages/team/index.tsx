import { Seo } from "apps/frontend/components/SEO"
import TeamCard from "apps/frontend/components/team/TeamCard"
import TeamGrid from "apps/frontend/components/team/TeamGrid"
import { TeamList } from "apps/frontend/components/team/TeamList"
import { BaseLayout } from "apps/frontend/Layouts/BaseLayout"
import { trpc } from "../../utils/trpc"
import { NextPageWithLayout } from "../_app"

const Team: NextPageWithLayout = () => {
  // const { data: team } = trpc.useQuery(["teamMember.getAll"])
  const { data: page } = trpc.useQuery(["page.get", "team-page"])
  const { content, seo } = page ?? { content: {}, seo: {} }

  console.log(page)
  return (
    <>
      <Seo seo={seo} />
      <main className="item-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Meet the Team!</h1>
        <p>{content.content}</p>
        {/* <TeamGrid teamMembers={team ?? []} /> */}
        <TeamList />
      </main>
    </>
  )
}
export default Team

Team.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
