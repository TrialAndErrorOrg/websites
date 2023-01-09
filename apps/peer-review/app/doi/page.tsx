import PRPage, { SubmissionItem } from '../[pr]/page'

export const getSubmissionByDoi = async (doi: string) => {
  const url = `${process.env.OJS_URL}/submissions?apiToken=${process.env.OJS_TOKEN}&${toString()}}`
  console.log({ url })
  const res = await fetch(url)
  console.log({ res })
  return res.json() as Promise<SubmissionItem>
}

export default async function Page(props: { params: { doi: string } }) {
  const {
    params: { doi },
  } = props

  console.log({ props })
  const submission = await getSubmissionByDoi(doi)
  console.log({ submission })
  // TODO: Remove this once https://github.com/vercel/next.js/issues/42292 is fixed
  // @ts-expect-error
  return <PRPage params={{ pr: submission.id }} />
}
