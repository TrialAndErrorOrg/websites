import Image from 'next/image'
import { Frame } from '../components/Frame'
import { getTeam } from '../team/page'
import { motion } from 'framer-motion'
import { TeamMemberCard } from '../components/TeamMemberCard'

export default async function AboutPage() {
  const team = await getTeam()
  return (
    <div className="relative flex flex-col items-center">
      <Frame />
      <div className="relative h-screen w-screen">
        <div className="relative top-[20vh] left-[13vw] -z-10 h-[140vh] w-[60vw] bg-blue-50 p-6 md:w-[40vw] md:p-10 lg:top-[25vh]">
          <div className="ml-[20vw] mb-[30vh] flex w-[45vw] flex-col justify-center gap-20">
            <h1 className="-mt-10 text-5xl font-bold text-blue-500 md:-mt-16 md:text-7xl">
              About Us
            </h1>
            <p className="relative flex items-center text-xl leading-[1.4] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-1/2 before:w-2 before:bg-blue-500 md:text-[2rem] md:before:-ml-12 md:before:flex md:before:w-3">
              The Center of Trial & Error is a virtual platform and sandbox for disruptive
              initiatives that will lead to institutional change. With the Journal of Trial & Error
              as our flagship, we aim to bridge the gap between what researchers do and what
              researchers can report, to discuss and question what kind of knowledge is deemed
              valuable, to advocate for practices that positively impact the lives of researchers
              and the public, and to advance policies that put openness, transparency and compassion
              above profit, division and bottom lines.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-screen w-screen outline outline-red-500">
        <div className="mx-auto mt-[6vw] flex w-2/3 items-start gap-[6vw]">
          <h2
            id="mission"
            className="-ml-[5vw] rotate-180 text-5xl font-bold text-blue-500 md:text-7xl "
            style={{ writingMode: 'vertical-rl' }}
          >
            Our Mission
          </h2>
          <div className="flex flex-col items-center gap-20 border-[6px] border-solid border-blue-500 bg-white px-[6vw] py-24">
            <p className="text-[2rem] text-blue-500">
              The Center of Trial & Error believes that a more transparent, responsible, honest, and
              reflexive way of doing scholarship requires institutional change. It thereby tries to
              disrupt existing scholarly infrastructures by empowering early career researchers to
              develop and explore the possibilities of non-profit and value-driven platforms for
              academic activities. Moreover, the Center aims to provide space for ongoing and
              independent reflection on academic culture, systemic structures, research and academic
              education and wants to connect those who (try to) enforce practical change. To do so,
              the Center hosts five branches around our journal, publishing, training, research, and
              software development.
            </p>
            <div className="h-4 w-40 bg-blue-500" />
          </div>
        </div>
      </div>
      <div className="relative min-h-[100vh] w-screen ">
        <div className="top-[20vh] left-[13vw] -z-10 h-[140vh] w-[60vw] p-6 md:w-[40vw] md:p-10 lg:top-[25vh]">
          <h2 id="team" className="text-5xl font-black text-blue-500 md:text-7xl">
            Meet the Team
          </h2>
          <div className="absolute grid w-[80vw] grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) =>
              member.image ? <TeamMemberCard key={member.id} member={member} /> : null,
            )}
          </div>
        </div>
        <Frame />
      </div>
    </div>
  )
}
