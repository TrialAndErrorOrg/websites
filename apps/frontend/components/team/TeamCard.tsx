import { Attribute } from "@strapi/strapi"
import Image from "next/image"
import Link from "next/link"

interface TeamCardProps {
  teamMember: Attribute.GetValues<"api::team-member.team-member">
}
const TeamCard = ({ teamMember }: TeamCardProps) => {
  const {
    firstName,
    lastName,
    department,
    pronouns,
    image,
    show_pronouns: showPronouns,
    position,
    slug,
  } = teamMember
  return (
    <Link href={`/team/${slug}`}>
      <div className="rounded-lg p-6 shadow-lg">
        {image && (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        )}
        <h3 className="text-2xl ">{`${firstName} ${lastName}`}</h3>
        {showPronouns && pronouns && <p>{pronouns}</p>}
        <p className="text-lg text-slate-600">
          <span>{position}</span> * <span>{department}</span>
        </p>
        {/* {JSON.stringify(teamMember)} */}
      </div>
    </Link>
  )
}
export default TeamCard
