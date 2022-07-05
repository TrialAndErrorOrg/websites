import fetch from 'node-fetch'

export async function addIdToStrapi(props: {
  collectionName: string
  id: string
  webflowId?: string
  updateId?: string
}): Promise<any> {
  const { collectionName, id, webflowId, updateId } = props

  if (!webflowId && !updateId) return { data: undefined }

  console.log(JSON.stringify({ body: { webflowId, updateId } }))
  try {
    const addId = await fetch(
      `http://localhost:1337/api/${
        collectionName.slice(-1) === 'y'
          ? collectionName.slice(0, -1) + 'ies'
          : collectionName + 's'
      }/${id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: { webflowId, updateId },
        }),
      }
    )

    const responseJson = await addId.json()

    return responseJson
  } catch (e) {
    console.error(e)

    return { data: null }
  }
}
