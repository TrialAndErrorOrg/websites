import { NextApiHandler } from 'next'

export const config = {
  api: {
    // bodyParser: false,
  },
}
const handler: NextApiHandler = async (request, response) => {
  const bod = request.body
  // console.log({ bod })

  // const posted = await fetch(`${process.env.STRAPI_ENDPOINT}/applications`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  //   },
  //   body: bod,
  // })
  // console.dir({ posted: await posted.json() }, { depth: null })
  return {
    body: JSON.stringify({
      message: 'This was a POST!',
    }),
  }
}

export default handler
