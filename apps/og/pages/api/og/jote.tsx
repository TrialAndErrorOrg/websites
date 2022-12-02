// generate og images with vercel/og

import { PageConfig } from 'next'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config: PageConfig = {
  runtime: 'experimental-edge',
}

const overpassFontData = fetch(
  new URL(`../../../assets/fonts/Overpass-Black.ttf`, import.meta.url),
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
  const title = searchParams.get('title') || 'OG Image'
  const description = searchParams.get('description')
  // const year= searchParams.get('year')
  const publishedRaw = searchParams.get('published')
  const publishedYear = publishedRaw ? new Date(publishedRaw).getFullYear() : null
  const publishedPretty = publishedRaw ? new Date(publishedRaw).toLocaleDateString() : null
  const logo =
    searchParams.get('logo') ||
    'https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_transp_back_0_5x_bbe4cae12e.png?updated_at=2022-08-31T19:02:18.630Z'
  const name = 'Journal of Trial & Error'
  const author = searchParams.get('author')
  const doi = searchParams.get('doi')
  const issue = searchParams.get('issue')
  const volume = searchParams.get('volume')

  // const { logo, name, title, author, description, theme, md, fontSize } =

  return new ImageResponse(
    (
      <div tw=" w-full flex flex-col p-20 bg-white h-full">
        {(logo || title) && (
          <div tw="absolute top-4 right-8 flex gap-2  w-full justify-end items-center z-10">
            {/* {logo && <img src={logo as string} alt={name as string} width="100" height="100" />} */}
            <span tw="bg-[#002642] p-2 ">
              <img src={logo} height="50px" width="50px" />
            </span>
            {(name || title) && <h1 tw="text-xl ml-4 w-24 leading-[1.2rem]">{name}</h1>}
          </div>
        )}
        {publishedPretty && (
          <p tw="-mt-4 pb-4">
            <span>{publishedPretty}</span>
          </p>
        )}
        <div tw="flex flex-col flex-1 max-w-2xl">
          <div
            tw="absolute h-[100%] w-[110%] left-14 top-6 -z-10"
            style={{
              backgroundColor: 'rgb(254 170 0) ',
            }}
          />

          {title && (
            <span
              tw={`${
                title.length > 80
                  ? 'text-5xl leading-[2.8rem]'
                  : title.length > 60
                  ? 'text-6xl'
                  : title.length > 40
                  ? 'text-7xl'
                  : 'text-8xl'
              } font-bold   line-through`}
              style={{
                fontFamily: 'Overpass',
              }}
            >
              {title}
            </span>
          )}
          {author && <h2 tw="text-xl">{author}</h2>}
          {description && <p>{description}</p>}
        </div>
        {publishedRaw && false && (
          <p tw="text-sm flex w-full justify-end">
            <span tw="text-right max-w-xl">
              {`${author} (${publishedYear}), "${title}", Journal of Trial & Error${
                volume ? `, ${volume}` : ''
              }${issue ? ` (${issue})` : ''}`}
              {doi && <span tw="underline">https://doi.org/{doi}</span>}
            </span>
          </p>
        )}
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
