import Image from "next/image"
import { useRouter } from "next/router"
import { Content } from "../../components/Content"
import { BaseLayout } from "../../layouts/BaseLayout"
import { trpc } from "../../utils/trpc"
import { Seo } from "../../components/SEO"
import { NextPageWithLayout } from "../_app"

const TeamMember: NextPageWithLayout = () => {
  const {
    query: { teamMember: slug },
  } = useRouter()

  const { data: teamMember } = trpc.useQuery([
    "teamMember.getBySlug",
    slug as string,
  ])
  // const { data: seo } = trpc.useQuery(["teamMember.getSEOBySlug", slug])

  const {
    firstName,
    lastName,
    seo,
    bio,
    email,
    github,
    twitter,
    orcid,
    image,
    personalWebsite,
  } = teamMember?.data?.[0] ?? {}

  return (
    <>
      <Seo seo={seo} />
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

        {bio && <Content>{bio}</Content>}
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

TeamMember.getLayout = (page) => <BaseLayout>{page}</BaseLayout>
