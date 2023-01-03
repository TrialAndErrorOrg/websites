import { PaperClipIcon } from '@heroicons/react/outline/index'
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
  const res = await fetch(url)
  return res.json() as Promise<Reviews[]>
}

const fetchFile = async (file: string) => {
  const url = `${process.env.OJS_URL}/_files/${file}?apiToken=${process.env.OJS_TOKEN}`
  const res = await fetch(url)
  return res.blob()
}

const fetchSubmission = async (submission: string) => {
  const url = `${process.env.OJS_URL}/submissions/${submission}?apiToken=${process.env.OJS_TOKEN}`
  console.log({ url })
  const res = await fetch(url)
  console.log({ res })
  return res.json() as Promise<Item>
}

export default async function Page(props: { params: { pr: string } }) {
  const {
    params: { pr },
  } = props

  console.log(props)
  const thing = await fetchPR(pr)
  const submission = await fetchSubmission(pr)
  console.log('Submission')
  console.log(submission)
  return (
    <div className="container">
      <main className="w-full max-w-2xl mx-auto">
        {/* Create a nicely styled page to display reviews, with links to download files */}

        <h1 className="my-10 text-2xl font-bold flex flex-col">
          <span className="text-lg font-normal">Reviews for</span>
          <span> {submission.publications?.[0]?.title?.en_US}</span>
        </h1>
        <div className="flex flex-col">
          {thing.map((review) => (
            <div className="flex flex-col" key={review.reviewRound.id}>
              <h2 className="text-xl font-bold">Review Round {review.reviewRound.round}</h2>
              <h3 className="text-lg font-bold">{review.reviewRound.statusKey}</h3>
              <div className="flex flex-col gap-8">
                {review.reviews.map((review) => (
                  <div
                    className="bg-white shadow overflow-hidden sm:rounded-lg"
                    key={review.reviewerId}
                  >
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Review by {review.reviewerFullName}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Personal details and application.
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Full name</dt>
                          <dd className="mt-1 text-sm text-gray-900">{review.reviewerFullName}</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Recommendation</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {review.recommendationText}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Email address</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {review.reviewerComments?.[0]?.authorEmail?.toLowerCase()}
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                          <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">Reviewer Comments</dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <div
                              className="prose"
                              dangerouslySetInnerHTML={{
                                __html: review.reviewerComments?.[0]?.comments,
                              }}
                            />
                          </dd>
                        </div>
                        {review.reviewFiles.length > 0 && (
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <ul
                                role="list"
                                className="border border-gray-200 rounded-md divide-y divide-gray-200"
                              >
                                {review.reviewFiles.map((file) => (
                                  <li
                                    key={file._href}
                                    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                                  >
                                    <div className="w-0 flex-1 flex items-center">
                                      <PaperClipIcon
                                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 flex-1 w-0 truncate">
                                        {file.name.en_US}
                                      </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Download
                                      </a>
                                    </div>
                                  </li>
                                  // <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                  //   <div className="w-0 flex-1 flex items-center">
                                  //     <PaperClipIcon
                                  //       className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  //       aria-hidden="true"
                                  //     />
                                  //     <span className="ml-2 flex-1 w-0 truncate">
                                  //       coverletter_back_end_developer.pdf
                                  //     </span>
                                  //   </div>
                                  //   <div className="ml-4 flex-shrink-0">
                                  //     <a
                                  //       href="#"
                                  //       className="font-medium text-indigo-600 hover:text-indigo-500"
                                  //     >
                                  //       Download
                                  //     </a>
                                  //   </div>
                                  // </li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        )}
                      </dl>
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
