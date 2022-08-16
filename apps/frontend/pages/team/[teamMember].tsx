import { trpc } from "apps/frontend/utils/trpc"
import Image from "next/image"
import { GetServerSideProps } from "next"
import { Seo } from "apps/frontend/components/seo"
import { useRouter } from "next/router"

interface TeamMemberProps {
  slug: string
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   return {
//     props: {
//       slug: params?.teamMember,
//     } as TeamMemberProps,
//   }
// }

const TeamMember = () => {
  const {
    query: { teamMember: slug },
  } = useRouter()
  console.log(slug)
  const { data: teamMember } = trpc.useQuery([
    "teamMember.getBySlug",
    slug as string,
  ])
  // const { data: seo } = trpc.useQuery(["teamMember.getSEOBySlug", slug])

  const {
    firstName,
    position,
    lastName,
    pronouns,
    show_pronouns,
    SEO,
    bio,
    email,
    github,
    twitter,
    orcid,
    image,
    department,
    personalWebsite,
  } = teamMember?.data?.[0] ?? {}

  return (
    <>
      <Seo seo={SEO} />
      <main>
        <h1>{`${firstName}${lastName ? ` ${lastName}` : ""}`}</h1>
        {image && (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        )}

        {bio && <p>{JSON.stringify(bio)}</p>}
        <div>
          <h2>Links</h2>
          <ul>
            {email && (
              <li>
                Email: <a href={email}>{email}</a>
              </li>
            )}
            {github && (
              <li>
                Github: <a href={github}>{github}</a>
              </li>
            )}
            {twitter && (
              <li>
                Twitter: <a href={twitter}>{twitter}</a>
              </li>
            )}
            {orcid && (
              <li>
                Orcid: <a href={orcid}>{orcid}</a>
              </li>
            )}

            {personalWebsite && (
              <li>
                Website: <a href={personalWebsite}>{personalWebsite}</a>
              </li>
            )}
          </ul>
        </div>
      </main>
    </>
  )
}
export default TeamMember
