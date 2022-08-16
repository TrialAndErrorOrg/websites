import { GetAttributesValues } from "@strapi/strapi"
import TeamCard from "./TeamCard"

interface TeamGridProps {
  teamMembers: GetAttributesValues<"api::team-member.team-member">[]
}

const TeamGrid = ({ teamMembers }: TeamGridProps) => (
  <div className="grid  gap-4 sm:w-10/12 sm:grid-cols-1 md:w-2/3 md:grid-cols-3">
    {teamMembers.map((teamMember) => (
      <TeamCard teamMember={teamMember} key={teamMember.email} />
    ))}
  </div>
)

export default TeamGrid
