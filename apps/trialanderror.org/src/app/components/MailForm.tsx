'use client'
// <!-- Begin Mailchimp Signup htmlForm -->
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline/index'
import { useForm } from 'react-hook-form'
import { Ring } from '@uiball/loaders'
import fetchJsonp from 'fetch-jsonp'

// this is really stupid
// mailchimp wants group[7][1]=1 urlencoded,
// but react-hook-form is a bit too helpful and translates
// the square brackets to a full array
// so instead we set the name to group(7)(1) and then
// replace the parens with square brackets
const replaceEncodedParensWithEncodedBrackets = (str: string) =>
  str.replace(/%29/g, '%5D').replace(/%28/g, '%5B')

type FormData = {
  EMAIL: string
  'group(7)(1)': string | boolean
  'group(7)(2)': string | boolean
  'group(7)(4)': string | boolean
  'gdpr(47)': string
  tags?: string
  b_3b2e720baa7621e1bde91b1a2_13b78e80c7?: string
}

export const MailForm = ({
  open,
  setOpen,
  email,
}: {
  open: boolean
  setOpen: (curr: boolean) => void
  email?: string
}) => {
  // const [open, setOpen] = useState(true)

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, isSubmitSuccessful, errors, isSubmitted },
  } = useForm<FormData>({
    values: {
      EMAIL: email ?? '',
      'gdpr(47)': '0',
      'group(7)(1)': true,
      'group(7)(2)': false,
      'group(7)(4)': false,
    },
    // defaultValues: {
    //   EMAIL: email,
    //   'group(7)(1)': true,
    // },
  })

  const onSubmit = async (data: FormData) => {
    // MailChimp treats ?x=false as ?x=1
    const nonFalseValues = Object.entries(data).reduce((acc, [key, value]) => {
      if (value) {
        acc[key] = value as string
      }
      return acc
    }, {} as Record<string, string>)

    const queryString = new URLSearchParams(nonFalseValues).toString()

    const encodedURL = replaceEncodedParensWithEncodedBrackets(queryString)
    // console.log(queryString)

    const url = `https://trialanderror.us21.list-manage.com/subscribe/post-json?u=3b2e720baa7621e1bde91b1a2&amp;id=13b78e80c7&amp;v_id=3&amp;f_id=0099c0e1f0&${encodedURL}`
    try {
      const response = await fetchJsonp(url, {
        jsonpCallback: 'c',
      })
      const res = await response.json()
      if (res.result === 'error') {
        setError('EMAIL', { type: 'manual', message: res.msg })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Transition.Root show={open ?? false} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={setOpen}>
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {/* <Form setOpen={setOpen} /> */}

            {/* // const Form = ({setOpen}: {setOpen: (curr: boolean) => void }) => ( */}
            {/* <div className="relative inline-block transform overflow-hidden rounded-lg  px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"> */}
            {/* <div
              id="mc_embed_signup"
              className="relative max-w-xl border-2 border-black bg-white  p-6  md:p-12"
            > */}
            <div className="shadow-thick-3 relative inline-block max-w-xl transform overflow-hidden border-2 border-black bg-white px-6 pt-5 pb-4 text-left  align-bottom transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle">
              {/* </div> */}

              {/* <div className="absolute top-2 right-2 pt-4 pr-4 sm:block"> */}
              <button
                type="button"
                className="text-black-400 button-sleek !absolute top-2 right-2 rounded-md hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* </div> */}
              {isSubmitted && isSubmitSuccessful ? (
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Thank you for subscribing!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        We're still setting this up so you won't hear from us for a bit. If you want
                        to change your subscription please email{' '}
                        <a href="mailto:support@trialanderror.org?subject=Change~My~Subscription%20">
                          support@trialanderror.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  // method="post"
                  onSubmit={handleSubmit(onSubmit)}
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate prose md:prose-lg py-4 text-left font-medium !text-black"
                  target="_self"
                >
                  <div
                    id="mc_embed_signup_scroll"
                    className="flex flex-col items-start gap-2 md:gap-4"
                  >
                    <div className="items-top flex justify-between">
                      <h2 className="!mt-0 !mb-4 flex flex-col text-left font-sans text-3xl font-black md:text-5xl">
                        Subscribe
                        <span className="text-base font-medium">
                          Get updates from the Center of Trial & Error
                        </span>
                      </h2>
                    </div>
                    <div className="col-span-6 w-full sm:col-span-6">
                      <label
                        htmlFor="mce-EMAIL"
                        className="block text-base font-semibold text-black"
                      >
                        Email address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        // name="EMAIL"
                        id="mce-EMAIL"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-sm border-2 border-black shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                        {...register('EMAIL', { required: true })}
                      />
                      {errors['EMAIL'] && (
                        <div className="text-sm text-red-500">{errors['EMAIL'].message}</div>
                      )}
                    </div>
                    <div>
                      <span className="text-base font-semibold text-black">
                        Receive updates from...
                      </span>
                      <ul className="list-none pl-0 text-sm">
                        <li className="flex items-center gap-3 hover:cursor-pointer">
                          <input
                            {...register('group(7)(1)')}
                            type="checkbox"
                            value="1"
                            checked
                            readOnly
                            className="h-5 w-5 border-2 border-black !bg-gray-400"
                            // name="group[7][1]"
                            id="mce-group[7]-7-0"
                          />
                          <label htmlFor="mce-group[7]-7-0" className="text-gray-400">
                            Blog (at most once a month)
                            <span className="text-rose-500">*</span>
                          </label>
                        </li>
                        <li className="flex items-center gap-3 hover:cursor-pointer">
                          <input
                            {...register('group(7)(2)')}
                            type="checkbox"
                            value="2"
                            // name="group[7][2]"
                            className="h-5 w-5 rounded-none border-2 border-black text-orange-500 focus:ring-orange-500"
                            id="mce-group[7]-7-1"
                          />
                          <label htmlFor="mce-group[7]-7-1">
                            New articles & issues (at most once a month)
                          </label>
                        </li>
                        <li className="flex items-center gap-3 hover:cursor-pointer">
                          <input
                            {...register('group(7)(4)')}
                            type="checkbox"
                            value="4"
                            // name="group[7][4]"
                            className=" h-5 w-5 rounded-none  border-2 border-black text-orange-500 focus:ring-orange-500"
                            id="mce-group[7]-7-2"
                          />
                          <label htmlFor="mce-group[7]-7-2">
                            Events, news, &amp; other updates (once per quarter)
                          </label>
                        </li>
                      </ul>

                      {errors['group(7)(1)'] || errors['group(7)(2)'] || errors['group(7)(4)'] ? (
                        <div className="text-sm text-red-500">
                          Please select at least one option
                        </div>
                      ) : null}
                    </div>
                    <div
                      id="mergeRow-gdpr"
                      className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group text-xs text-black"
                    >
                      <div className="content__gdpr">
                        <h3 className="my-1 font-sans text-black">GPDR Marketing Permissions</h3>
                        <p>
                          Please select all the ways you would like to hear from the Center of Trial
                          & Error:
                        </p>
                        {/* <fieldset
                        className="mc_fieldset gdprRequired mc-field-group"
                        // name="interestgroup_field"
                      > */}
                        <div className="flex h-5 items-center gap-3">
                          <input
                            required
                            {...register('gdpr(47)')}
                            type="checkbox"
                            id="gdpr_47"
                            // name="gdpr(47)"
                            value="Y"
                            className="h-5 w-5 rounded-full border-2 border-black text-orange-500 focus:ring-orange-500"
                          />
                          <label className="text-base font-medium text-black" htmlFor="gdpr_47">
                            <span>
                              Email <span className="text-rose-500">*</span>
                            </span>
                          </label>
                        </div>
                        {/* </fieldset> */}
                        <p>
                          You can unsubscribe at any time by clicking the link in the footer of our
                          emails. for information about our privacy practices, please visit our
                          website.
                        </p>
                      </div>
                    </div>
                    <div hidden={true}>
                      <input type="hidden" value="501" {...register('tags')} />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{
                          display: 'none',
                        }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      ></div>
                    </div>
                    <div className="absolute left-[-5000px]" aria-hidden="true">
                      <input
                        {...register('b_3b2e720baa7621e1bde91b1a2_13b78e80c7')}
                        type="text"
                        // name="b_3b2e720baa7621e1bde91b1a2_13b78e80c7"
                        tabIndex={-1}
                        value=""
                      />
                    </div>
                    <div className="optionalParent w-full">
                      <div className="clear foot flex w-full justify-end">
                        {isSubmitting ? (
                          <Ring />
                        ) : (
                          <>
                            <button
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button !border-2 !bg-orange-500 px-4 py-2 text-xl font-medium focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                            >
                              Subscribe
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="content__gdprLegal text-[10px]">
                      <p>
                        We use Mailchimp as our marketing platform. By clicking to subscribe, you
                        acknowledge that your information will be transferred to Mailchimp for
                        processing.
                        <a href="https://mailchimp.com/legal/terms" target="_blank">
                          Learn more about Mailchimp's privacy practices here.
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              )}
              {/* {isSubmitting && <div className="text-center">Submitting...</div>} */}
              {/* {isSubmitSuccessful && <div className="text-center">Thank you for subscribing!</div>} */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default MailForm
