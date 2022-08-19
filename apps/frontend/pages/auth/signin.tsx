/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import Image from "next/image"
import Link from "next/link"
import { FaOrcid, FaGithub } from "react-icons/fa"
import { inferAsyncReturnType } from "@trpc/server"
import { GetServerSideProps } from "next"
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  const filteredProviders = Object.values(providers ?? {}).filter(
    (provider) => !/e-?mail|credentials/i.test(provider.name)
  )

  console.log(filteredProviders)
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers: filteredProviders, csrfToken },
  }
}

interface SignInProps {
  providers: NonNullable<inferAsyncReturnType<typeof getProviders>>[string][]
  csrfToken?: string
}
const SignInIcon = ({ name }: { name: string }) => {
  if (name.toLowerCase() === "orcid") {
    return <FaOrcid className="text-lg text-lime-500" />
  }
  if (name.toLowerCase() === "github") {
    return <FaGithub className="text-lg text-slate-800" />
  }
  return null
}

const SignIn = ({ providers, csrfToken }: SignInProps) => (
  <>
    {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
    <div className="flex min-h-full">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image
              className="h-12 w-auto"
              height="48"
              width="48"
              src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_blue_background_b87382260b.svg"
              alt="Center of Trial & Error logo"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <Link
                // <a
                // href="#"
                href="/auth/signup"
              >
                <a
                  href="/auth/signup"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Sign up
                </a>
              </Link>
              {/* </a> */}
            </p>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign in with
                </p>

                <div
                  className={`mt-1 grid grid-cols-${
                    providers?.length ?? 3
                  } gap-3`}
                >
                  {providers?.map((provider) => (
                    <div key={provider.id}>
                      <button
                        type="button"
                        onClick={() => signIn(provider.id)}
                        className="inline-flex w-full items-center justify-center gap-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        Sign in with {provider.name}
                        <SignInIcon name={provider.name} />
                      </button>
                    </div>

                    // <div>
                    //   <a
                    //     href="#"
                    //     className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    //   >
                    //     <span className="sr-only">Sign in with Twitter</span>
                    //     <svg
                    //       className="h-5 w-5"
                    //       aria-hidden="true"
                    //       fill="currentColor"
                    //       viewBox="0 0 20 20"
                    //     >
                    //       <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    //     </svg>
                    //   </a>
                    // </div>

                    // <div>
                    //   <a
                    //     href="#"
                    //     className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    //   >
                    //     <span className="sr-only">Sign in with GitHub</span>
                    //     <svg
                    //       className="h-5 w-5"
                    //       aria-hidden="true"
                    //       fill="currentColor"
                    //       viewBox="0 0 20 20"
                    //     >
                    //       <path
                    //         fillRule="evenodd"
                    //         d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    //         clipRule="evenodd"
                    //       />
                    //     </svg>
                    //   </a>
                    // </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form
                action="/api/auth/signin/email"
                method="POST"
                className="space-y-6"
              >
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                    />
                  </label>
                </div>

                {/* <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                    />
                  </label>
                </div> */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      Remember me
                    </label>
                  </div>

                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-orange-600 hover:text-orange-500"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  </>
)

export default SignIn
