import { Fragment, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import type { OpenPosition } from '@/types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Ring } from '@uiball/loaders'
import { Modal } from './Modal'

const MAX_FILE_SIZE = 10000000
const ACCEPTED_FILE_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
]

const doc = z
  .any()
  .optional()
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE || !files?.[0], `Max file size is 10MB.`)
  .refine(
    (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type) || !files?.[0],
    'only .docx and pdf files are accepted.'
  )

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email(),
  motivationText: z.string().optional(),
  motivationFile: doc,
  cvText: z.string().optional(),
  cvFile: doc,
  additionalText: z.string().optional(),
  additionalFile: doc,
  howDidYouFindThis: z.string().min(2, 'This field is required'),
})

type Schema = z.infer<typeof schema>

export default function SlideOver({ position }: { position: OpenPosition }) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  console.log(errors)

  // const files = watch('documents')
  const [motivationText, motivationFile] = watch(['motivationText', 'motivationFile'])
  const [cvText, cvFile] = watch(['cvText', 'cvFile'])
  const [additionalText, additionalFile] = watch(['additionalText', 'additionalFile'])
  const url = useMemo(() => Math.random().toString(36).substring(2, 15), [])

  const onSubmit = handleSubmit(
    (fieldValues) => {
      const {
        // documents,
        additionalFile,
        additionalText,
        cvFile,
        cvText,
        motivationText,
        motivationFile,
        // howDidYouFindThis,
        ...rest
      } = fieldValues

      const data: {
        name: string
        email: string
        open_position?: string
        position?: string
        motivation?: string
        cv?: string
        howDidYouFindThis?: string
        additional?: string
        url?: string
      } = {
        position: position.title,
        ...rest,
      }

      console.log({
        data,
        files: {
          additionalFile,
          motivationFile,
          cvFile,
          // documents,
        },
      })
      const formData = new FormData()
      data['open_position'] = position.id?.toString()

      if (cvFile?.[0]) {
        formData.append('files.documents', cvFile[0], cvFile[0].name)
      }

      if (motivationFile?.[0]) {
        formData.append('files.documents', motivationFile[0], motivationFile[0].name)
      }

      if (additionalFile?.[0]) {
        formData.append('files.documents', additionalFile[0], additionalFile[0].name)
      }

      // for (let i = 0; i < documents?.length; i++) {
      //   formData.append(`files.documents`, documents[i], documents[i].name)
      // }

      if (motivationText?.length) {
        data['motivation'] = motivationText
          ?.split(/\n+/)
          ?.map((line) => `<p>${line}</p>`)
          ?.join('')
      }

      if (cvText?.length) {
        data['cv'] = cvText
          ?.split(/\n+/)
          ?.map((line) => `<p>${line}</p>`)
          ?.join('')
      }

      if (additionalText?.length) {
        data['additional'] = additionalText
          ?.split(/\n+/)
          ?.map((line) => `<p>${line}</p>`)
          ?.join('')
      }

      // if (howDidYouFindThis?.length) {
      //   data['howDidYouFindThis'] = howDidYouFindThis
      // }

      // unique url for the application, so we can send it to the user
      // so they can edit their application
      data['url'] = url

      formData.append('data', JSON.stringify(data))

      // fetch(`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/applications`, {
      fetch(`/api/form`, {
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_APPLICATION}`,
        // },
        body: formData,
      })
        .then(async (res) => ({
          json: await res.json(),
          status: res.status,
        }))
        .then((res) => {
          if (res.status === 200) {
            console.log('Success!')
            console.log(res.json)
            setSubmitted(true)
            // setOpen(false)
          } else {
            // setSubmitted(true)
            console.log('Error!')
            console.log(res.json)
          }
          console.log(res)
        })
        .catch((e) => console.error(e))
    }

    // const dat = fetch('/api/form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'form-data',
    //   },
    //   body: new FormData(data),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    // return dat
    // }
  )
  // console.log(motivation, typeof motivation)

  return (
    <>
      <button
        className={`md:static ${
          open ? 'hidden' : 'flex'
        } z-10 right-10 bottom-10 fixed bg-orange-500 gap-1 items-center justify-between text-white font-bold hover:scale-105 active:scale-95 transition-all hover:bg-orange-600 active:bg-orange-900 rounded-lg px-4 py-3 shadow-lg`}
        onClick={() => setOpen(true)}
      >
        Apply
        <ArrowRightIcon className="w-5" />
      </button>
      <Transition.Root show={open && !submitted} as={Fragment}>
        <Dialog as="div" className="fixed overflow-hidden" onClose={setOpen}>
          <div className="absolute overflow-scroll">
            <Dialog.Overlay className="absolute inset-0" />
            <div className="pointer-events-none h-screen fixed inset-0 left-0 flex max-w-full md:pr-10 sm:pr-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-xl">
                  <form
                    onSubmit={onSubmit}
                    className="flex h-full flex-col space-y-8 divide-y divide-gray-200 overflow-y-scroll bg-white p-8 shadow-xl"
                  >
                    <div className="space-y-8 mt-20 divide-y divide-gray-200">
                      <div>
                        <div className="flex items-top justify-between w-full">
                          <h3 className="text-xl font-bold leading-6 text-gray-900">
                            {position.title}
                          </h3>
                          <button onClick={() => setOpen(false)}>
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                id="name"
                                autoComplete="name"
                                required
                                className={`form-input block w-full min-w-0 flex-1 rounded-md border-gray-300  sm:text-sm ${
                                  errors.name?.message
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                    : 'focus:border-orange-500 focus:ring-orange-500'
                                }`}
                                {...register('name')}
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 required:text-red-500"
                            >
                              Email address
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="mt-1">
                              <input
                                id="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                {...register('email')}
                              />

                              <p className="mt-2 text-xs text-gray-500">
                                We just need your email address to send you the confirmation email
                                and to send you the job offer if you are selected.
                              </p>
                            </div>
                          </div>

                          <div className="sm:col-span-6">
                            <label
                              htmlFor="motivationText"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Motivation
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            {!motivationFile || motivationFile?.length < 1 ? (
                              <div className="mt-1">
                                <textarea
                                  id="motivationText"
                                  required={!motivationFile || motivationFile?.length < 1}
                                  rows={6}
                                  className={`block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                                    errors.name?.message
                                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                      : 'focus:border-orange-500 focus:ring-orange-500'
                                  }`}
                                  defaultValue={''}
                                  {...register('motivationText')}
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                  Write a few sentences about yourself and why you want to work for
                                  the Center/Journal of Trial & Error.
                                </p>
                              </div>
                            ) : (
                              <div className="text-sm rounded-full mt-1 bg-slate-100 px-4 py-2 flex justify-between items-center text-slate-500">
                                <span className="truncate max-w-[80%]">
                                  {motivationFile[0]?.name}
                                </span>
                                <button
                                  onClick={() => setValue('motivationFile', null)}
                                  className="font-bold"
                                  aria-label="Remove motivation file"
                                >
                                  x
                                </button>
                              </div>
                            )}
                            <label htmlFor="motivationFile">
                              <span
                                className={`text-orange-500 underline text-sm hover:cursor-pointer ${
                                  motivationFile?.[0] ? 'sr-only' : ''
                                }`}
                              >
                                Or upload a file (.docx or .pdf)
                              </span>
                              <input
                                type="file"
                                accept={ACCEPTED_FILE_TYPES.join(', ')}
                                id="motivationFile"
                                className="sr-only"
                                {...register('motivationFile')}
                              />
                            </label>

                            {errors.motivationText?.message && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.motivationText?.message as string}
                              </p>
                            )}
                            {errors.motivationFile?.message && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.motivationFile?.message as string}
                              </p>
                            )}
                          </div>
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="cvText"
                              className="block text-sm font-medium text-gray-700"
                            >
                              CV/Relevant Experience
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            {!cvFile || cvFile?.length < 1 ? (
                              <div className="mt-1">
                                <textarea
                                  id="cvText"
                                  required={!cvFile || cvFile?.length < 1}
                                  rows={6}
                                  className={`block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                                    errors.name?.message
                                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                      : 'focus:border-orange-500 focus:ring-orange-500'
                                  }`}
                                  defaultValue={''}
                                  {...register('cvText')}
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                  Tell us about previous experience you have, specifically in
                                  relation to the "Need to have's" and "Nice to have's" listed
                                  above. This doesn't have to be a full CV, just a few sentences
                                  will do, but if you have a CV you can upload it below. A link to a
                                  CV is also great!
                                </p>
                              </div>
                            ) : (
                              <div className="text-sm rounded-full mt-1 bg-slate-100 px-4 py-2 flex justify-between items-center text-slate-500">
                                <span className="truncate max-w-[80%]">{cvFile[0]?.name}</span>
                                <button
                                  onClick={() => setValue('cvFile', null)}
                                  className="font-bold"
                                  aria-label="Remove CV file"
                                >
                                  x
                                </button>
                              </div>
                            )}
                            <label htmlFor="cvFile">
                              <span
                                className={`text-orange-500 underline text-sm hover:cursor-pointer ${
                                  cvFile?.[0] ? 'sr-only' : ''
                                }`}
                              >
                                Or Upload a file (.docx or .pdf)
                              </span>
                              <input
                                type="file"
                                accept={ACCEPTED_FILE_TYPES.join(', ')}
                                id="cvFile"
                                className="sr-only"
                                {...register('cvFile')}
                              />
                            </label>
                            {errors.cvText && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.cvText?.message as string}
                              </p>
                            )}
                            {errors.cvFile && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.cvFile?.message as string}
                              </p>
                            )}
                          </div>
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="additionalText"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Additional context
                            </label>
                            {!additionalFile || additionalFile?.length < 1 ? (
                              <div className="mt-1">
                                <textarea
                                  id="additionalText"
                                  required={false}
                                  rows={6}
                                  className={`block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                                    errors.name?.message
                                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                      : 'focus:border-orange-500 focus:ring-orange-500'
                                  }`}
                                  defaultValue={''}
                                  {...register('additionalText')}
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                  Anything else you want to share with us?
                                </p>
                              </div>
                            ) : (
                              <div className="text-sm rounded-full mt-1 bg-slate-100 px-4 py-2 flex justify-between items-center text-slate-500">
                                <span className="truncate max-w-[80%]">
                                  {additionalFile[0]?.name}
                                </span>
                                <button
                                  onClick={() => setValue('additionalFile', null)}
                                  className="font-bold"
                                  aria-label="Remove additional file"
                                >
                                  x
                                </button>
                              </div>
                            )}
                            <label htmlFor="additionalFile">
                              <span
                                className={`text-orange-500 underline text-sm hover:cursor-pointer ${
                                  additionalFile?.[0] ? 'sr-only' : ''
                                }`}
                              >
                                Or upload a file (.docx or .pdf)
                              </span>
                              <input
                                type="file"
                                accept={ACCEPTED_FILE_TYPES.join(', ')}
                                id="additionalFile"
                                className="sr-only"
                                {...register('additionalFile')}
                              />
                            </label>
                            {errors.additionalText?.message && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.additionalText?.message as string}
                              </p>
                            )}
                            {errors.additionalFile?.message && (
                              <p className="mt-2 text-sm text-red-500">
                                {errors.additionalFile?.message as string}
                              </p>
                            )}
                          </div>
                          {/* How did you find us section */}
                          <div className="sm:col-span-6">
                            <label
                              htmlFor="howDidYouFindThis"
                              className="block text-sm font-medium text-gray-700"
                            >
                              How did you find this position?
                              <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="howDidYouFindThis"
                                required={true}
                                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                defaultValue={''}
                                {...register('howDidYouFindThis')}
                              />
                              <p className="mt-2 text-sm text-gray-500">
                                How did you find out about this role? (e.g. LinkedIn, Twitter,
                                Google, colleague told you, etc.)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5">
                      <div className="flex justify-end">
                        <button
                          onClick={() => setOpen(false)}
                          type="button"
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        {isSubmitting ? (
                          <Ring size={40} lineWeight={5} speed={2} color="black" />
                        ) : (
                          <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-bold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            Apply
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {submitted && <Modal url={url} open={submitted} setOpen={setSubmitted} />}
    </>
  )
}
