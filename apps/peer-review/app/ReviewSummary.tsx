import PaperClipIcon from '@heroicons/react/24/outline/PaperClipIcon'
import { fetchUser, User } from '../utils/fetchUser'
import { ReviewAssignment } from './pr/[pr]/page'
import { ReviewDisclosure } from './ReviewDisclosure'
import { Reviewer } from './Reviewer'
interface SubmissionResponse {
  itemsMax: number
  items: Submission[]
}

interface Submission {
  _href: string
  contextId: number
  currentPublicationId: number
  dateLastActivity: string
  dateSubmitted: string
  id: number
  lastModified: string
  locale: string
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
  abstract: Abstract
  accessStatus: number
  authors: Author[]
  authorsString: string
  authorsStringShort: string
  categoryIds: number[]
  citations: string[]
  citationsRaw: string
  copyrightHolder: Abstract
  copyrightYear: number
  coverImage: CoverImage
  coverage: Abstract
  datePublished: string
  disciplines: string[]
  fullTitle: Abstract
  galleys: Galley[]
  hideAuthor: boolean
  id: number
  issueId: number
  keywords: string[]
  languages: string[]
  lastModified: string
  licenseUrl: string
  locale: string
  pages: string
  prefix: Abstract
  primaryContactId: number
  'pub-id::publisher-id': string
  rights: Abstract
  sectionId: number
  seq: number
  source: Abstract
  status: number
  subjects: string[]
  submissionId: number
  subtitle: Abstract
  supportingAgencies: string[]
  title: Abstract
  type: Abstract
  urlPath: string
  urlPublished: string
  version: number
}

interface Galley {
  file: File
  id: number
  isApproved: boolean
  label: string
  locale: string
  'pub-id::publisher-id': string
  publicationId: number
  seq: number
  submissionFileId: number
  urlPath: string
  urlPublished: string
  urlRemote: string
}

interface File {
  _href: string
  assocId: number
  assocType: number
  caption: string
  copyrightOwner: string
  createdAt: string
  creator: Abstract
  credit: string
  dateCreated: string
  dependentFiles: DependentFile[]
  description: Abstract
  documentType: string
  fileId: number
  fileStage: number
  genreId: number
  id: number
  language: string
  locale: string
  mimetype: string
  name: Abstract
  path: string
  publisher: Abstract
  revisions: DependentFile[]
  source: Abstract
  sourceSubmissionFileId: number
  sponsor: Abstract
  subject: Abstract
  submissionId: number
  terms: string
  updatedAt: string
  uploaderUserId: number
  url: string
  viewable: boolean
}

interface DependentFile {}

interface CoverImage {
  type?: any
  properties?: any
  en_US: EnUS
  fr_CA: EnUS
}

interface EnUS {
  dateUploaded: string
  uploadName: string
  altText: string
}

interface Author {
  affiliation: Abstract
  biography: Abstract
  country: string
  email: string
  familyName: Abstract
  givenName: Abstract
  id: number
  includeInBrowse: boolean
  orcid: string
  preferredPublicName: Abstract
  publicationId: number
  seq: number
  submissionLocale: string
  url: string
  userGroupId: number
}

interface Abstract {
  en_US: string
  fr_CA: string
}

async function fetchSubmissionByReviewer(reviewer: User) {
  const res = await fetch(
    `${process.env.OJS_URL}/submissions?searchPhrase=${
      reviewer.familyName.en_US ?? reviewer.givenName.en_US
    }&apiToken=${process.env.OJS_TOKEN}`,
  )
  const data = (await res.json()) as SubmissionResponse

  const actualSubmissions = data.items.filter((submission) => {
    const authors = submission.publications?.[0]
  })
  return data
}

export async function ReviewSummary({ review }: { review: ReviewAssignment }) {
  const user = (await fetchUser({ user: review.reviewerId })) as User
  // const submissionsByReviewer =
  return (
    <div className="overflow-hidden border border-black bg-white " key={review.reviewerId}>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Review by {review.reviewerFullName}
        </h3>
        {/* @ts-expect-error fix this when Next or Typescript fixes async react components */}
        <Reviewer user={user} />
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900">{review.reviewerFullName}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Recommendation</dt>
            <dd className="mt-1 text-sm text-gray-900">{review.recommendationText}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {review.reviewerComments?.[0]?.authorEmail?.toLowerCase()}
            </dd>
          </div>
          {user.affiliation.en_US && (
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Affiliation</dt>
              <dd className="mt-1 text-sm text-gray-900">{user.affiliation.en_US}</dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">Reviewer Comments</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ReviewDisclosure review={review} />
            </dd>
          </div>
          {review.reviewFiles.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  {review.reviewFiles.map((file) => (
                    <li
                      key={file._href}
                      className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                    >
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 w-0 flex-1 truncate">{file.name.en_US}</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
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
  )
}
