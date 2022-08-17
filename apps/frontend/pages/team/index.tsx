import { Seo } from "apps/frontend/components/SEO"
import TeamCard from "apps/frontend/components/team/TeamCard"
import TeamGrid from "apps/frontend/components/team/TeamGrid"
import { trpc } from "../../utils/trpc"

const Team = () => {
  const { data } = trpc.useQuery(["teamMember.getAll"])
  const { data: seo } = trpc.useQuery(["seo.get", "team-page"])
  return (
    <>
      <Seo seo={seo?.data?.[0]?.seo} />
      <main className="item-center flex flex-col gap-10">
        <h1 className="text-4xl font-bold">Meet the Team!</h1>
        <TeamGrid teamMembers={data?.data ?? []} />
      </main>
    </>
  )
}
export default Team
