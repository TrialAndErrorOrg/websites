// route handler with secret and slug
import { RedirectType } from 'next/dist/client/components/redirect'
import { env } from '../../../env/server.mjs'
import { getPostBy } from '../../../utils/blog'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== env.DRAFT_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getPostBy({ field: 'slug', value: slug, draftMode: true })
  console.log(post)

  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post || !post.slug) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  //   NextResponse.redirect(`/${post.slug}`)
  // redirect(`/${post.slug}`, RedirectType.push)
  return new Response(null, {
    status: 307,
    headers: {
      Location: `/${post.slug}`,
    },
  })
}
