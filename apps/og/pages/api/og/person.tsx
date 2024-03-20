// generate og images with vercel/og

import { PageConfig } from 'next'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { Author, BlogAuthor } from '@/types'

export const config: PageConfig = {
  runtime: 'experimental-edge',
}

const overpassFontData = fetch(
  new URL('../../../assets/fonts/Overpass-Black.ttf', import.meta.url),
).then((font) => font.arrayBuffer())

const openSansFontData = fetch(
  new URL('../../../assets/fonts/OpenSans-Regular.ttf', import.meta.url),
).then((font) => font.arrayBuffer())

// const overpassFontData = getFont('Overpass-SemiBold')
// const overpass = getFont('Overpass-SemiBold')

export default async function handler(req: NextRequest) {
  const overpass = await overpassFontData
  const openSans = await openSansFontData
  // const overpass = await getFont('Overpass-SemiBold')

  const { searchParams } = req.nextUrl
  const guest = searchParams.get('guest') ?? false
  const slug = searchParams.get('author')

  const url = `${process.env.STRAPI_ENDPOINT}/${
    guest ? 'blog-authors' : 'team-members'
  }?filters[slug][$eq]=${slug}&populate=%2A`

  console.log(url)
  const authorData = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }).then((res) => res.json())

  const author: Author = authorData?.data?.[0]?.attributes
  console.log(author)
  const {
    firstName,
    lastName,
    image: {
      data: { attributes: image },
    },
    summary,
    email,
    github,
    twitter,
    // @ts-ignore yayaya
    mastodon,
    // @ts-ignore yayaya
    linkedIn,
    orcid,
  } = author

  const cleanSummary = summary?.replace(/<[^>]*>?|&nbsp;/gm, '') || ''

  return new ImageResponse(
    (
      <div tw="w-full flex flex-col p-16 bg-white text-black h-full border-10 border-black">
        <div tw="flex items-center">
          <div tw="flex items-center justify-center mb-3 md:mb-0 self-center justify-self-center rounded-full border-2 border-black bg-orange-500 text-xl font-black capitalize text-black">
            {image ? (
              <img
                src={image?.url || image?.url}
                alt={image?.alt ?? author?.lastName}
                height={image?.height || image?.height}
                width={image?.width || image?.width}
                tw="col-span-1 row-span-2 h-60 w-60 self-center justify-self-center rounded-full border-4 border-black object-cover dark:border-white"
              />
            ) : (
              <span tw="text-lg">{author.lastName?.[0] ?? author?.firstName?.[0]}</span>
            )}
          </div>
          <div tw="flex flex-col ml-16">
            <h1 tw="font-black text-6xl" style={{ fontFamily: 'Overpass' }}>
              {author.firstName} {author.lastName}
            </h1>
            {'position' in author && author.position && (
              <div tw="text-4xl max-w-[40rem]">{author.position}</div>
            )}
            {'pronouns' in author && author.pronouns && author.show_pronouns && (
              <div tw="text-4xl font-bold text-orange-500">{author.pronouns}</div>
            )}
          </div>
        </div>
        <div tw="flex flex-row-reverse">
          {author.summary && (
            <div style={{ hyphens: 'auto' }} tw="m-8 max-w-[40rem] text-xl">
              {cleanSummary}
            </div>
          )}
          <div tw="m-8 ml-0 flex flex-col w-60">
            {author.orcid && (
              <span tw="flext items-center mb-2">
                {/* @ts-ignore  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" tw="h-8 w-8 mr-5">
                  <path d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z" />
                </svg>
                <span tw="text-lg">{author.orcid?.replace('https://orcid.org/', '')}</span>
              </span>
            )}
            {author.twitter && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" tw="h-8 w-8 mr-5">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
                <span tw="text-lg">{`@${author.twitter?.replace(
                  'https://twitter.com/',
                  '',
                )}`}</span>
              </span>
            )}
            {author.github && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" tw="h-8 w-8 mr-5">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <span tw="text-lg">{author.github?.replace('https://github.com/', '')}</span>
              </span>
            )}
            {'linkedIn' in author && author.linkedIn && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg xmlns="http://www.w3.org/2000/svg" tw="h-8 w-8 mr-5" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <span tw="text-lg">{author.linkedIn}</span>
              </span>
            )}
            {author.personalWebsite && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg tw="h-8 w-8 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                </svg>

                <span tw="text-lg">{author.personalWebsite}</span>
              </span>
            )}
            {/* @ts-ignore  */}
            {'mastodon' in author && author.mastodon && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg tw="h-8 w-8 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" />
                </svg>
                {/* @ts-ignore  */}
                <span tw="text-lg">{author.mastodon}</span>
              </span>
            )}
            {author.email && (
              <span tw="flex items-center mb-2">
                {/* @ts-ignore  */}
                <svg tw="h-8 w-8 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span tw="text-lg">{author.email}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    ),
    {
      height: 630,
      width: 1200,
      emoji: 'blobmoji',
      fonts: [
        {
          name: 'Open Sans',
          data: openSans,
          style: 'normal',
        },
        {
          name: 'Overpass',
          data: overpass,
          style: 'normal',
        },
      ],
    },
  )
}
