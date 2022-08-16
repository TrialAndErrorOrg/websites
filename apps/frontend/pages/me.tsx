import { trpc } from "../utils/trpc"

const Me = () => {
  const { data } = trpc.useQuery(["orcid.me"])
  return <div>{JSON.stringify(data)}</div>
}

export default Me
