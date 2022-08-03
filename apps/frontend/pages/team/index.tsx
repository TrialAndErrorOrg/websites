import { trpc } from "../../utils/trpc"

const Team = () => {
  const { data } = trpc.useQuery(["teamMember.getAll"])
  return <main>{data && JSON.stringify(data)}</main>
}
export default Team
