import { Frame } from '../components/Frame'
import { getTeam } from '../team/page'
import { TeamMemberCard } from '../components/TeamMemberCard'
import { OurMission } from '../components/OurMission'
import { AboutUs } from '../components/AboutUs'

export const revalidate = 3600 // revalidate every hour

export default async function AboutPage() {
  const team = await getTeam()
  return (
    <div className="relative flex flex-col items-center">
      <AboutUs />
      <OurMission />
      <div className="relative my-[20vh] flex min-h-screen w-screen flex-col">
        <Frame />
        <div className="ml-[13vw] mt-[25vh] flex h-full min-h-[140vh] w-[60vw] flex-col items-start gap-[12vh] bg-blue-50 2xl:w-[40vw]">
          <h2
            id="team"
            className="relative -mt-4  ml-[5%] whitespace-nowrap text-4xl font-black text-blue-500 md:-mt-8 md:text-7xl"
          >
            Meet the Team
          </h2>
          <div className="ml-[20%] grid min-w-max grid-cols-1 gap-8  lg:ml-[30%]  lg:grid-cols-2 lg:gap-12 2xl:ml-[40%] 2xl:grid-cols-3">
            {team.map((member) =>
              member.image ? <TeamMemberCard key={member.id} member={member} /> : null,
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
