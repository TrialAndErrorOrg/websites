import { useSession } from "next-auth/react"

const Me = () => {
  const { data } = useSession()
  return (
    <div>
      <h1>Me</h1>
    </div>
  )
}

export default Me
