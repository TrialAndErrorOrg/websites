// generate og images with vercel/og

import { PageConfig } from 'next'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config: PageConfig = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || 'OG Image'
  const description = searchParams.get('description')
  const logo =
    searchParams.get('logo') ||
    'https://og-image.vercel.app/**OG%20Image**.png?theme=light&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg'
  const name = searchParams.get('name')
  const author = searchParams.get('author')

  // const { logo, name, title, author, description, theme, md, fontSize } =

  return new ImageResponse(
    (
      <div tw="flex flex-col p-20 bg-white h-full">
        {(logo || title) && (
          <div tw="flex gap-2  items-center ">
            {logo && <img src={logo as string} alt={name as string} width="100" height="100" />}
            {(name || title) && <h1 tw="text-2xl ml-4 font-bold">{name}</h1>}
          </div>
        )}
        <div tw="flex flex-col justify-center flex-1 ">
          {title && <h1 tw="text-4xl leading-[2.4rem] font-bold">{title}</h1>}
          {author && <h2>{author}</h2>}
          {description && <p>{description}</p>}
        </div>
      </div>
    ),
    {
      height: 630,
      width: 1200,
      emoji: 'blobmoji',
    },
  )
}
