import { ReviewAssignment } from './pr/[pr]/page'
import { FaOrcid } from 'react-icons/fa/index'
import { fetchUser, User } from '../utils/fetchUser'

export async function Reviewer({ user }: { user: User }) {
  console.log(user)
  return (
    <div>
      <div className="flex gap-2 items-center">
        {user?.givenName?.en_US} {user?.familyName?.en_US}
        {user?.orcid && (
          <a href={user?.orcid} className="">
            <span className="sr-only">ORCID</span>
            <FaOrcid className="text-[#a6ce38]" />
          </a>
        )}
      </div>
    </div>
  )
}
