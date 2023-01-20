import Image from 'next/image'
import { Frame } from '../components/Frame'
import { getTeam } from '../team/page'
import { motion } from 'framer-motion'
import { TeamMemberCard } from '../components/TeamMemberCard'

export default async function AboutPage() {
  const team = await getTeam()
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-screen w-screen">
        <Frame />
        <div className="relative top-[20vh] left-[13vw] -z-10 h-[140vh] w-[70vw] bg-blue-50 p-6 md:w-[40vw] md:p-10 lg:top-[25vh]">
          <div className="flex w-[45vw] flex-col justify-center  gap-10 md:mb-[30vh] md:ml-[20vw] md:gap-20">
            <h1 className="-mt-10 text-4xl font-bold text-blue-500 md:-mt-16 md:text-7xl">
              About Us
            </h1>
            <p className="relative flex w-[70vw] items-center leading-[1.4] text-blue-500 before:absolute before:-ml-4 before:hidden before:h-1/2 before:w-2 before:bg-blue-500 md:w-auto md:text-[2rem] md:before:-ml-12 md:before:flex md:before:w-3">
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
      <div className="relative w-screen md:h-screen">
        <div className="mx-auto mt-[6vw] flex w-2/3 flex-col items-start gap-[6vw] md:flex-row">
          {/* <h2
            className=" left-[15vw] mt-[10vh] rotate-180 text-5xl font-black text-blue-500 lg:text-7xl"
            style={{
              // direction: 'rtl',
              writingMode: 'vertical-rl',
            }}
          >
            What Do We Do?
          </h2> */}
          <h2
            id="mission"
            className="top-[5vh] bottom-[5vh] -ml-[10vw] w-full text-4xl font-bold text-blue-500 md:sticky md:-ml-[5vw] md:w-auto md:rotate-180 md:text-7xl md:[writing-mode:vertical-rl]"
            // style={{ writingMode: 'vertical-rl' }}
          >
            Our Mission
          </h2>
          <div className="flex w-[77vw] flex-col items-center gap-10 border-4 border-solid border-blue-500 bg-white py-10 px-10 md:w-auto md:gap-20 md:border-[6px] md:px-[6vw] md:py-24">
            <p className="text-blue-500 md:text-[2rem]">
              The Center of Trial & Error believes that a more transparent, responsible, honest, and
              reflexive way of doing scholarship requires institutional change. It thereby tries to
              disrupt existing scholarly infrastructures by empowering early career researchers to
              develop and explore the possibilities of non-profit and value-driven platforms for
              academic activities.
              <br className="md:hidden" />
              <br className="md:hidden" />
              Moreover, the Center aims to provide space for ongoing and independent reflection on
              academic culture, systemic structures, research and academic education and wants to
              connect those who (try to) enforce practical change. To do so, the Center hosts five
              branches around our journal, publishing, training, research, and software development.
            </p>
            <div className="h-2 w-40 bg-blue-500 md:h-4 md:w-40" />
          </div>
        </div>
      </div>
      <div className="relative flex w-screen flex-col items-center ">
        <div className="absolute top-[20vh] left-[13vw] -z-10 h-full min-h-[140vh] w-[60vw] bg-blue-50 p-6 md:w-[40vw] md:p-10 lg:top-[20vh]">
          <h2
            id="team"
            className="-ml-2vw -mt-[5vh] whitespace-nowrap text-4xl font-black text-blue-500 md:-mt-[7vh] md:text-7xl"
          >
            Meet the Team
          </h2>
        </div>
        {/* <div className="relative top-[28vh] left-[10vw] grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> */}
        <div className="my-[28vh] ml-auto mr-[20vw] grid grid-cols-1 gap-8 md:mr-0 md:ml-[10vw] md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {team.map((member) =>
            member.image ? <TeamMemberCard key={member.id} member={member} /> : null,
          )}
        </div>
        <Frame />
      </div>
    </div>
  )
}
