import { ReviewSummary } from 'apps/peer-review/app/ReviewSummary'
import { format } from 'date-fns'
interface Response {
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
  stages: Stage[]
  status: number
  statusLabel: string
  submissionProgress: number
  urlAuthorWorkflow: string
  urlEditorialWorkflow: string
  urlPublished: string
  urlWorkflow: string
  reviews: Review[]
}

export interface Review {
  reviewRound: ReviewRound
  reviewAssignments: ReviewAssignment[]
}

export interface ReviewAssignment {
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
  status: string
  statusKey: string
  reviewFiles: ReviewFile[]
  reviewerComments: ReviewerComment[]
  isCurrentUserAssigned: boolean
  statusId: number
  due: string
  responseDue: string
  roundId: number
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
  creator: FullTitle
  credit?: any
  dateCreated?: any
  dependentFiles: any[]
  description: FullTitle
  documentType: string
  doiSuffix?: any
  fileId: number
  fileStage: number
  genreId: number
  id: number
  language?: any
  locale: string
  mimetype: string
  name: FullTitle
  path: string
  'pub-id::doi'?: any
  publisher: FullTitle
  revisions: any[]
  source: FullTitle
  sourceSubmissionFileId?: any
  sponsor: FullTitle
  subject: FullTitle
  submissionId: number
  terms?: any
  updatedAt: string
  uploaderUserId: number
  url: string
  viewable?: any
}

interface ReviewRound {
  id: number
  submissionId: number
  stageId: number
  round: number
  status: string
  statusKey: string
  statusId: number
}

interface Stage {
  id: number
  label: string
  isActiveStage: boolean
  queries: any[]
  currentUserAssignedRoles: any[]
  files: Files
  statusId?: number
  status?: string
  currentUserCanRecommendOnly?: boolean
}

interface Files {
  count: number
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
  pages?: any
  prefix: FullTitle
  primaryContactId: number
  'pub-id::doi'?: any
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
  try {
    const url = `${process.env.OJS_URL}/_reviews/${submission}?apiToken=${process.env.OJS_TOKEN}`
    const res = await fetch(url)
    return res.json() as Promise<Response>
  } catch (e) {
    console.error('ERROR')
    console.error(e)
    return {} as Response
  }
}

const fetchFile = async (file: string) => {
  const url = `${process.env.OJS_URL}/_files/${file}?apiToken=${process.env.OJS_TOKEN}`
  const res = await fetch(url)
  return res.blob()
}

export const fetchSubmission = async (
  submission: string,
  query: URLSearchParams = new URLSearchParams(),
) => {
  try {
    const url = `${process.env.OJS_URL}/submissions/${submission}?apiToken=${
      process.env.OJS_TOKEN
    }&${query.toString()}}`
    console.log({ url })
    const res = await fetch(url)
    console.log({ res })
    return res.json() as Promise<Response>
  } catch (e) {
    console.error('ERROR')
    console.error(e)
    return null
  }
}

export default async function Page(props: { params: { pr: string } }) {
  const {
    params: { pr },
  } = props

  console.log({ props })
  const submission = await fetchPR(pr)
  // const submission = await fetchSubmission(pr)
  // console.dir({ submission }, { depth: null })
  if (!submission) {
    return <div>Submission not found</div>
  }
  return (
    <div className="container">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-8">
        {/* Create a nicely styled page to display reviews, with links to download files */}

        <h1 className="mt-8 text-2xl font-bold flex flex-col">
          <span className="text-lg font-normal">Reviews for</span>
          <span> {submission.publications?.[0]?.title?.en_US}</span>
        </h1>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-normal">by</span>
          <span className="font-normal">{submission.publications?.[0]?.authorsString}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-normal">Submitted</span>

          <span className="font-normal">
            {format(new Date(submission.dateSubmitted), 'MMM d, yyyy, h:mm a')}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-normal">Latest Activity</span>
          {format(new Date(submission.lastModified), 'MMM d, yyyy, h:mm a')}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-normal">Status</span>
          <span className="font-normal">{submission.statusLabel}</span>
        </div>

        {/* Names of the Reviewers */}
        <div className="flex flex-col gap-2">
          <span className="text-lg font-normal">Reviewers</span>
          <span className="font-normal">
            {submission.reviews.map((review) => (
              <div className="flex flex-col gap-4" key={review.reviewRound.id}>
                {review.reviewAssignments.map((reviewer) => (
                  <div className="flex flex-col gap-4" key={reviewer.reviewerId}>
                    <span className="font-normal">{reviewer.reviewerFullName}</span>
                  </div>
                ))}
              </div>
            ))}
          </span>
        </div>

        {submission.publications?.[0]?.['pub-id::doi'] && (
          <div className="flex flex-col gap-2">
            <span className="text-lg font-normal">DOI</span>
            <span className="font-normal">{submission.publications?.[0]?.['pub-id::doi']}</span>
          </div>
        )}

        <div className="flex flex-col gap-8">
          {submission.reviews.map((review) => (
            <div className="flex flex-col gap-4" key={review.reviewRound.id}>
              <h2 className="text-2xl font-bold">Review Round {review.reviewRound.round}</h2>
              <h3 className="text-lg">{review.reviewRound.status}</h3>
              <div className="flex flex-col gap-8">
                {review.reviewAssignments.map((review) => (
                  <ReviewSummary review={review} key={review.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
