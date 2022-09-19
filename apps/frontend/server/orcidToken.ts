import axios from "axios"
import { URLSearchParams } from "url"
// eslint-disable-next-line import/extensions
import { env } from "./env.mjs"

interface OrcidData {
  access_token: string
  token_type: string
  refresh_token: string
  expires_in: number
  scope: string
  orcid?: any
}
export const getOrcidToken = async (): Promise<{
  data: OrcidData | undefined
  error: undefined | any
}> => {
  const form = new URLSearchParams({
    grant_type: "client_credentials",
    scope: "/read-public",
    client_id: env.ORCID_CLIENT_ID,
    client_secret: env.ORCID_CLIENT_SECRET,
  }).toString()

  try {
    const response = await axios.post("https://orcid.org/oauth/token", form, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    })

    return response
      ? { data: response.data as OrcidData, error: undefined }
      : { data: undefined, error: undefined }
  } catch (error) {
    console.log(error)
    return { data: undefined, error }
  }
}
