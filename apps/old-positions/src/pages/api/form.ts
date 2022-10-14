import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const bod = await request.formData()

  const posted = await fetch(`${process.env.STRAPI_ENDPOINT}/applications`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: bod,
  })
  console.dir(await posted.json(), { depth: null })
  return {
    body: JSON.stringify({
      message: 'This was a POST!',
    }),
  }
}
