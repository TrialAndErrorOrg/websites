import { NextApiRequest, NextApiResponse } from 'next'
import formidable, { File, Files } from 'formidable'
import FormData from 'form-data'
import { createReadStream } from 'fs'

//set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = (await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm({
        multiples: true,
      })

      form.parse(req, (err, fields, files) => {
        if (err) reject({ err })
        resolve({ err, fields, files })
      })
    })) as unknown as { err: any; fields: { data: string }; files: { ['files.documents']: File[] } }

    console.log(data)
    const formData = new FormData()
    const documents = Array.isArray(data?.files?.['files.documents'])
      ? data?.files?.['files.documents']
      : data?.files?.['files.documents']
      ? [data?.files?.['files.documents']]
      : []
    console.log(documents)
    console.log(documents.length)
    formData.append('data', data?.fields?.data)
    for (let i = 0; i < documents?.length; i++) {
      const rawDocument = documents[i]
      const readableDocument = createReadStream(rawDocument.path)
      formData.append(
        `files.documents`,
        readableDocument,
        rawDocument?.name ?? `document-${i}.${rawDocument?.type?.split('/')[1]}`
      )
    }

    console.log(formData)

    fetch(`${process.env.STRAPI_ENDPOINT}/applications`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_APPLICATION}`,
      },
      // @ts-expect-error this does work, the types are a bit fucky because
      // next-js shadows the global fetch with node-fetch,
      // but TypeScript doesn't know that during development
      body: formData,
    })
      .then(async (res) => ({
        json: await res.json(),
        status: res.status,
      }))
      .then((result) => {
        if (result.status === 200) {
          console.log('Success!')
          console.dir(res.json, { depth: null })
          res.status(200).json({
            status: 'ok',
            data,
          })
          // setOpen(false)
        } else {
          console.log('Error!')
          console.log(result.json)

          res.status(result.status ?? 500).json({
            status: 'error',
            error: result.json,
          })
        }
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          status: 'error',
          error,
        })
      })
    //return the data back or just do whatever you want with it
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'error',
      error,
    })
  }
}
