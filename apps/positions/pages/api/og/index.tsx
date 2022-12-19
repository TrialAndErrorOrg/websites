// generate og images with vercel/og

import { PageConfig } from 'next'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { format } from 'date-fns'

export const config: PageConfig = {
  runtime: 'experimental-edge',
}

const overpassFontData = fetch(
  new URL(`../../../assets/fonts/Overpass-Black.ttf`, import.meta.url)
).then((font) => font.arrayBuffer())

const openSansFontData = fetch(
  new URL('../../../assets/fonts/OpenSans-Regular.ttf', import.meta.url)
).then((font) => font.arrayBuffer())

const openSansItalicFontData = fetch(
  new URL('../../../assets/fonts/OpenSans-Italic.ttf', import.meta.url)
).then((font) => font.arrayBuffer())

// const overpassFontData = getFont('Overpass-SemiBold')
// const overpass = getFont('Overpass-SemiBold')

export async function generateJoteImage({
  position,
  deadline,
}: {
  position: string
  deadline?: string
}) {
  const overpass = await overpassFontData
  const openSans = await openSansFontData
  const openSansItalic = await openSansItalicFontData

  return new ImageResponse(
    (
      <div tw=" w-full flex flex-col p-20 pb-10 bg-white h-full">
        <div tw="flex flex-col flex-1 pt-8 max-w-3xl justify-between">
          <div
            tw="absolute h-[90%] w-[100%]  left-14 top-16 -z-10"
            style={{
              backgroundColor: 'rgb(254 170 0) ',
            }}
          />

          <span
            tw={`${
              position.length >= 80
                ? 'text-5xl leading-[2.8rem]'
                : position.length >= 60
                ? 'text-6xl'
                : position.length >= 40
                ? 'text-7xl'
                : 'text-8xl'
            } font-bold   line-through`}
            style={{
              fontFamily: 'Overpass',
            }}
          >
            {position}
          </span>

          {deadline && <h2 tw="text-4xl italic">{deadline}</h2>}
          {/* {description && <p>{description}</p>} */}
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
          name: 'Open Sans',
          data: openSansItalic,
          style: 'italic',
        },
        {
          name: 'Overpass',
          data: overpass,
          style: 'normal',
        },
      ],
    }
  )
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl


  const position= searchParams.get('position') || "We're hiring!"
  const deadline= searchParams.get('deadline') || undefined
  // const year= searchParams.get('year')
  // const publishedRaw = searchParams.get('published')
  // const publishedYear = publishedRaw ? new Date(publishedRaw).getFullYear().toString() : null
  // const publishedPretty = publishedRaw ? new Date(publishedRaw).toLocaleDateString() : null
  // const logo =
  //   searchParams.get('logo') ||
  //   'https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_transp_back_0_5x_bbe4cae12e.png?updated_at=2022-08-31T19:02:18.630Z'
  // const name = 'Journal of Trial & Error'
  // const author = searchParams.get('author')
  // const issue = searchParams.get('issue')
  // const volume = searchParams.get('volume')
  // const references = searchParams.get('references')

  return generateJoteImage({
    position,
    deadline,
  })
}