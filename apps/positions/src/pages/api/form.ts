import type { APIRoute } from 'astro'

export const post: APIRoute = ({ request }) => {
  console.log(request.body)
  return {
    body: JSON.stringify({
      message: 'This was a POST!',
    }),
  }
}
