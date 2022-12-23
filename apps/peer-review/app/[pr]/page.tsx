interface Reviews {
  reviewRound: ReviewRound
  reviews: Review[]
}

interface Review {
  id: number
  submissionId: number
  reviewerId: number
  reviewerFullName: string
  recommendation: number
  dateAssigned: string
  dateNotified: string
  dateConfirmed: string
  dateCompleted: string
  dateDue: string
  dateResponseDue: string
  lastModified: string
  declined: number
  cancelled: number
  reminderWasAutomatic: number
  round: number
  reviewRoundId: number
  reviewMethod: number
  stageId: number
  unconsidered: number
  reviewMethodKey: string
  recommendationText: string
  status: number
  statusKey: string
  reviewFiles: ReviewFile[]
  reviewerComments: ReviewerComment[]
}

interface ReviewerComment {
  authorName: string
  commentTitle: string
  commentType: number
  comments: string
  authorEmail: string
  datePosted: string
  dateModified?: any
}

interface ReviewFile {
  _href: string
  assocId: number
  assocType: number
  caption?: any
  copyrightOwner?: any
  createdAt: string
  creator: Creator
  credit?: any
  dateCreated?: any
  dependentFiles: any[]
  description: Creator
  documentType: string
  doiSuffix?: any
  fileId: number
  fileStage: number
  genreId: number
  id: number
  language?: any
  locale: string
  mimetype: string
  name: Creator
  path: string
  'pub-id::doi'?: any
  publisher: Creator
  revisions: any[]
  source: Creator
  sourceSubmissionFileId?: any
  sponsor: Creator
  subject: Creator
  submissionId: number
  terms?: any
  updatedAt: string
  uploaderUserId: number
  url: string
  viewable?: any
}

interface Creator {
  en_US: string
}

interface ReviewRound {
  id: number
  submissionId: number
  stageId: number
  round: number
  status: number
  statusKey: string
}

interface Submission {
  itemsMax: number
  items: Item[]
}

interface Item {
  _href: string
  contextId: number
  currentPublicationId: number
  dateLastActivity: string
  dateSubmitted: string
  doiSuffix?: any
  id: number
  lastModified: string
  locale: string
  'pub-id::doi'?: any
  publications: Publication[]
  stageId: number
  status: number
  statusLabel: string
  submissionProgress: number
  urlAuthorWorkflow: string
  urlEditorialWorkflow: string
  urlPublished: string
  urlWorkflow: string
}

interface Publication {
  _href: string
  authorsString: string
  authorsStringShort: string
  categoryIds: any[]
  coverImage: CoverImage
  datePublished?: any
  doiSuffix?: any
  fullTitle: FullTitle
  galleys: any[]
  id: number
  locale: string
  pages?: string
  prefix: FullTitle
  primaryContactId: number
  'pub-id::doi'?: string
  'pub-id::publisher-id'?: any
  sectionId: number
  status: number
  submissionId: number
  subtitle: FullTitle
  title: FullTitle
  urlPublished: string
  version: number
}

interface FullTitle {
  en_US: string
}

interface CoverImage {
  en_US?: any
}

const fetchPR = async (submission: string) => {
  const url = `${process.env.OJS_URL}/_reviews/${submission}/reviews?apiToken=${process.env.OJS_TOKEN}`
  console.log(url)
  const res = await fetch(url)
  console.log(res)
  return res.json() as Promise<Reviews[]>
}

const fetchFile = async (file: string) => {
  const url = `${process.env.OJS_URL}/_files/${file}?apiToken=${process.env.OJS_TOKEN}`
  console.log(url)
  const res = await fetch(url)
  console.log(res)
  return res.blob()
}

const fetchSubmission = async (submission: string) => {
  const url = `${process.env.OJS_URL}/submissions/${submission}?apiToken=${process.env.OJS_TOKEN}`
  console.log(url)
  const res = await fetch(url)
  console.log(res)
  return res.json() as Promise<Submission>
}

export default async function Page(props: { params: { pr: string } }) {
  const {
    params: { pr },
  } = props

  console.log(props)
  const thing = await fetchPR(pr)
  const submission = await fetchSubmission(pr)
  console.log(thing)
  return (
    <div className="container">
      <main className="w-full max-w-2xl mx-auto">
        {/* Create a nicely styled page to display reviews, with links to download files */}

        <h1 className="text-2xl font-bold">Reviews for {pr}</h1>
        <div className="flex flex-col">
          {thing.map((review) => (
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">Review Round {review.reviewRound.round}</h2>
              <div className="flex flex-col">
                {review.reviews.map((review) => (
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">Review by {review.reviewerFullName}</h3>
                    <p className="text-sm">Recommendation: {review.recommendationText}</p>
                    <p className="text-sm">Status: {review.statusKey}</p>
                    <p className="text-sm">Due: {review.dateDue}</p>
                    <p className="text-sm">Response Due: {review.dateResponseDue}</p>
                    <p className="text-sm">Last Modified: {review.lastModified}</p>
                    <div className="flex flex-col">
                      {review.reviewerComments.map((comment) => (
                        <div className="flex flex-col">
                          <h4 className="text-md font-bold">Comment by {comment.authorName}</h4>
                          <p className="text-sm">Title: {comment.commentTitle}</p>
                          <p className="text-sm">Type: {comment.commentType}</p>
                          <p className="text-sm">Comments: {comment.comments}</p>
                          <p className="text-sm">Date Posted: {comment.datePosted}</p>
                          <p className="text-sm">Date Modified: {comment.dateModified}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      {review.reviewFiles.map((file) => (
                        <div className="flex flex-col">
                          <h4 className="text-md font-bold">File: {file.name.en_US}</h4>
                          <p className="text-sm">Type: {file.documentType}</p>
                          <p className="text-sm">Mimetype: {file.mimetype}</p>
                          <p className="text-sm">Path: {file.path}</p>
                          <p className="text-sm">URL: {file.url}</p>
                          <p className="text-sm">Date Created: {file.createdAt}</p>
                          <p className="text-sm">Date Modified: {file.updatedAt}</p>
                          <p className="text-sm">Uploader: {file.uploaderUserId}</p>
                          <p className="text-sm">Viewable: {file.viewable}</p>
                          <p className="text-sm">Source: {file.source.en_US}</p>
                          <p className="text-sm">Description: {file.description.en_US}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
