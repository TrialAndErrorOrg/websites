import TeamCard from "apps/frontend/components/team/TeamCard"
import TeamGrid from "apps/frontend/components/team/TeamGrid"
import { trpc } from "../../utils/trpc"

const Team = () => {
  const { data } = trpc.useQuery(["teamMember.getAll"])
  return (
    <main className="item-center flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Meet the Team!</h1>
      <TeamGrid teamMembers={data?.data ?? []} />
    </main>
  )
}
export default Team
