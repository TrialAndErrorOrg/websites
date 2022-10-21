import { useId, useState } from 'react'
import { MailForm } from '../blog/MailForm'

export const SignUp = ({ mailId }: { mailId?: string }) => {
  const [open, setOpen] = useState(false)

  const [email, setEmail] = useState('')
  const id = useId()

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          setOpen(true)
        }}
        className="mt-4 sm:flex sm:max-w-md lg:mt-0"
      >
        <label html-for={mailId ?? id} className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id={mailId ?? id}
          autoComplete="email"
          onChange={(ev) => {
            setEmail(ev.target.value)
          }}
          // required
          className="w-full min-w-0 appearance-none rounded-full border-2 border-black bg-white py-2 px-4 text-base font-semibold text-gray-900 placeholder-gray-900 focus:border-orange-500 focus:placeholder-gray-400 focus:outline-none focus:ring-orange-500 dark:text-white sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-full border-2 border-black bg-orange-600 py-2 px-4 text-base font-semibold text-black transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-thick-1"
          >
            Subscribe
          </button>
        </div>
      </form>
      <MailForm open={open} setOpen={setOpen} email={email} />
    </>
  )
}
