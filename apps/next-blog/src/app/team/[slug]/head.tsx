import { SEO } from '../../layout'
import { getPerson } from './pageX'

export default async function TeamHead({ params }: { params: { slug: string } }) {
  const { slug } = params
  const person = (await getPerson(slug)).data?.[0]

  console.log(person)
  if (!person) {
    return <></>
  }

  const {
    firstName,
    lastName,
    email,
    position,
    department,
    pronouns,
    show_pronouns,
    bio,
    summary,
    github,
    image,
    blog_posts,
    linkedin,
    mastodon,
    twitter,
  } = person

  return (
    <>
      <SEO
        title={`${firstName} ${lastName}, ${position} at the Center of Trial and Error`}
        description={summary}
        image={image.url ?? undefined}
      />
    </>
  )
}
