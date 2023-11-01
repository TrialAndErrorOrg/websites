'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */

import { lazy, useId, useState } from 'react'

// lazy load the form
const MailForm = lazy(async () => import('./MailForm'))

export function SignUp({ mailId }: { mailId?: string }) {
  const [open, setOpen] = useState(false)

  const [email, setEmail] = useState('')
  const id = useId()
  const correctId = mailId ?? id

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault()
          setOpen(true)
        }}
        className="mt-4 sm:flex sm:max-w-md lg:mt-0"
      >
        <label htmlFor={correctId} className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id={correctId}
          autoComplete="email"
          onChange={(ev) => {
            setEmail(ev.target.value)
          }}
          // required
          className="w-full min-w-0 appearance-none border-2 border-blue-500 bg-white px-4 py-2 text-base font-semibold text-blue-500 placeholder-blue-400 focus:border-orange-500 focus:placeholder-gray-400 focus:outline-none focus:ring-orange-500 dark:text-white sm:max-w-xs"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="hover:shadow-thick-1 flex w-full items-center justify-center border-2 border-blue-500 bg-orange-600 px-4 py-2 text-base font-semibold text-blue-500 transition-all hover:-translate-x-1 hover:-translate-y-1"
          >
            Subscribe
          </button>
        </div>
      </form>
      <MailForm open={open} setOpen={setOpen} email={email} />
    </>
  )
}
