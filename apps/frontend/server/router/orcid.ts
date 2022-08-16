/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { createRouter } from "./context"

export const orcidRouter = createRouter().query("me", {
  async resolve({ ctx }) {
    // if (!ctx.req) return {}
    console.log("anything")
    const { orcid, session } = ctx
    const id = session?.orcid as string

    // const token = await getToken({ req: ctx.req })
    // console.log(token)

    // console.log(ctx)
    if (!orcid || !id) {
      console.log("bye")
      return {}
    }

    const data = await Promise.all([
      orcid.viewEmails({ orcid: id }),
      orcid.viewEducations({ orcid: id }),
      orcid.viewEducations({ orcid: id }),
      orcid.viewEmployments({ orcid: id }),
      orcid.viewPerson({ orcid: id }),
      orcid.viewWorks({ orcid: id }),
    ])
    // console.log(data)
    console.log(data)

    return {
      emails: data[0].emails,
      educations: data[1]["affiliation-group"],
      employments: data[3]["affiliation-group"],
      person: data[4]["affiliation-group"],
      works: data[5],
    }
  },
})
