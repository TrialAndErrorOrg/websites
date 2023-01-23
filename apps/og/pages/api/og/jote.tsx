// generate og images with vercel/og

import { PageConfig } from 'next'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { format } from 'date-fns'

export const config: PageConfig = {
  runtime: 'experimental-edge',
}

const overpassFontData = fetch(
  new URL(`../../../assets/fonts/Overpass-Black.ttf`, import.meta.url),
).then((font) => font.arrayBuffer())

const openSansFontData = fetch(
  new URL('../../../assets/fonts/OpenSans-Regular.ttf', import.meta.url),
).then((font) => font.arrayBuffer())

const openSansItalicFontData = fetch(
  new URL('../../../assets/fonts/OpenSans-Italic.ttf', import.meta.url),
).then((font) => font.arrayBuffer())

// const overpassFontData = getFont('Overpass-SemiBold')
// const overpass = getFont('Overpass-SemiBold')

export async function generateJoteImage({
  logo,
  title,
  name,
  author,
  description,
  publishedPretty,
  publishedRaw,
  publishedYear,
  volume,
  issue,
  doi,
  references,
  type,
}: {
  logo: string
  title?: string
  name?: string

  author?: string
  description?: string
  publishedPretty?: string
  publishedRaw?: string
  publishedYear?: string
  references?: string
  volume?: string
  issue?: string
  doi?: string
  type?:
    | 'empirical'
    | 'meta-research'
    | 'peer review'
    | 'rga'
    | 'reflection'
    | 'editorial'
    | 'other'
}) {
  const overpass = await overpassFontData
  const openSans = await openSansFontData
  const openSansItalic = await openSansItalicFontData
  // const overpass = await getFont('Overpass-SemiBold')

  // const { logo, name, title, author, description, theme, md, fontSize } =

  return new ImageResponse(
    (
      <div tw=" w-full flex flex-col p-20 pb-10 bg-white h-full">
        {(logo || title) && (
          <div tw="absolute top-4 right-18 flex gap-2  w-full justify-between items-center z-10">
            {/* {logo && <img src={logo as string} alt={name as string} width="100" height="100" />} */}

            {publishedPretty && (
              <p tw="text-3xl">
                <span>
                  <span tw=""> {publishedPretty}</span>
                </span>
              </p>
            )}
            <div tw="flex items-center">
              <span tw="bg-[#002642] p-2 ">
                <img src={logo} height="50px" width="50px" />
              </span>
              {(name || title) && <h1 tw="text-xl ml-4 w-24 leading-[1.2rem]">{name}</h1>}
            </div>
          </div>
        )}
        <div tw="flex flex-col flex-1 pt-8 max-w-3xl justify-between">
          <div
            tw="absolute h-[90%] w-[100%]  left-14 top-16 -z-10"
            style={{
              backgroundColor: 'rgb(254 170 0) ',
            }}
          />

          {title && (
            <h1
              tw={`${
                title.length >= 80
                  ? 'text-5xl leading-[2.8rem]'
                  : title.length >= 60
                  ? 'text-6xl'
                  : title.length >= 40
                  ? 'text-7xl'
                  : 'text-8xl -mt-4'
              } text-[#002642]`}
              style={{
                fontFamily: '"Overpass"',
                fontWeight: 900,
              }}
            >
              {title}
            </h1>
          )}

          {author && <h2 tw="text-4xl italic">{author}</h2>}
          {description && <p>{description}</p>}
        </div>
        {/* {publishedRaw && false && (
          <p tw="text-sm flex w-full justify-end">
            <span tw="text-right max-w-xl">
              {`${author} (${publishedYear}), "${title}", Journal of Trial & Error${
                volume ? `, ${volume}` : ''
              }${issue ? ` (${issue})` : ''}`}
              {doi && <span tw="underline">https://doi.org/{doi}</span>}
            </span>
          </p>
        )} */}

        <p tw="flex w-full items-center justify-between">
          {doi && (
            <span tw="text-4xl flex items-center">
              <span tw="pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 130 130"
                  width="50"
                  height="50"
                >
                  <circle
                    style={{ fill: 'black' }}
                    // tw="fill-black"
                    cx="65"
                    cy="65"
                    r="64"
                  />
                  <path
                    style={{ fill: 'white' }}
                    d="m 49.819127,84.559148 -11.854304,0 0,-4.825665 c -1.203594,1.510894 -4.035515,3.051053 -5.264716,3.742483 -2.151101,1.203585 -5.072066,1.987225 -7.812161,1.987225 -4.430246,0 -8.373925,-1.399539 -11.831057,-4.446924 -4.1229464,-3.636389 -6.0602455,-9.19576 -6.0602455,-15.188113 0,-6.094791 2.1126913,-10.960381 6.3380645,-14.59676 3.354695,-2.893745 7.457089,-5.209795 11.810505,-5.209795 2.535231,0 5.661807,0.227363 7.889738,1.302913 1.280414,0.614601 3.572628,2.060721 4.929872,3.469179 l 0,-25.420177 11.854304,0 z m -12.1199,-18.692584 c 0,-2.253538 -0.618258,-4.951555 -2.205973,-6.513663 -1.587724,-1.587724 -4.474153,-2.996182 -6.727691,-2.996182 -2.509615,0 -4.834476,1.825511 -6.447807,3.720535 -1.306031,1.536501 -1.959041,3.905269 -1.959041,5.877114 0,1.971835 0.740815,4.165004 2.046836,5.701505 1.587714,1.895025 3.297985,3.193739 5.833216,3.193739 2.279145,0 4.989965,-0.956662 6.552083,-2.51877 1.587714,-1.562108 2.908377,-4.185134 2.908377,-6.464278 z"
                  />
                  <path
                    style={{ fill: 'white' }}
                    d="m 105.42764,25.617918 c -1.97184,0 -3.64919,0.69142 -5.03204,2.074271 -1.357247,1.357245 -2.035864,3.021779 -2.035864,4.993633 0,1.971835 0.678617,3.649193 2.035864,5.032034 1.38285,1.382861 3.0602,2.074281 5.03204,2.074281 1.99744,0 3.67479,-0.678627 5.03203,-2.035861 1.38285,-1.382861 2.07428,-3.073012 2.07428,-5.070454 0,-1.971854 -0.69143,-3.636388 -2.07428,-4.993633 -1.38285,-1.382851 -3.0602,-2.074271 -5.03203,-2.074271 z M 74.219383,45.507921 c -7.323992,0 -12.970625,2.283009 -16.939921,6.848949 -3.277876,3.782438 -4.916803,8.118252 -4.916803,13.008406 0,5.430481 1.626124,10.009834 4.878383,13.738236 3.943689,4.538918 9.475093,6.808622 16.59421,6.808622 7.093512,0 12.612122,-2.269704 16.555801,-6.808622 3.252259,-3.728402 4.878393,-8.1993 4.878393,-13.413648 0,-5.160323 -1.638938,-9.604602 -4.916803,-13.332994 -4.020509,-4.56594 -9.398263,-6.848949 -16.13326,-6.848949 z m 24.908603,1.386686 0,37.634676 12.599304,0 0,-37.634676 -12.599304,0 z M 73.835252,56.975981 c 2.304752,0 4.263793,0.852337 5.877124,2.554426 1.638928,1.675076 2.458402,3.727881 2.458402,6.159457 0,2.458578 -0.806671,4.538022 -2.419992,6.240111 -1.613331,1.675086 -3.585175,2.514099 -5.915534,2.514099 -2.612051,0 -4.737546,-1.027366 -6.376474,-3.080682 -1.331637,-1.648053 -1.997451,-3.539154 -1.997451,-5.673528 0,-2.107362 0.665814,-3.985138 1.997451,-5.633201 1.638928,-2.053316 3.764423,-3.080682 6.376474,-3.080682 z"
                  />
                </svg>
              </span>
              <span tw="ml-4" style={{ fontFamily: '"Overpass"' }}>
                {doi}
              </span>
            </span>
          )}
          {type && (
            <span tw="text-3xl ml-4" style={{ fontFamily: 'Overpass' }}>
              {type.toLocaleUpperCase()}
            </span>
          )}
        </p>
      </div>
    ),
    {
      height: 630,
      width: 1200,
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
    },
  )
}

const articleType = (doi: string) => {
  const suffix = doi.split('/').pop()
  if (suffix?.startsWith('ed')) {
    return 'editorial'
  }

  if (suffix?.startsWith('r')) {
    return 'reflection'
  }

  if (suffix?.startsWith('pr')) {
    return 'peer review'
  }

  if (suffix?.startsWith('mr')) {
    return 'meta-research'
  }

  if (suffix?.startsWith('rga')) {
    return 'rga'
  }

  return 'empirical'
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const doi = searchParams.get('doi')
  if (doi) {
    console.log(doi)
    return fetch(`https://api.crossref.org/works/${doi}`)
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((json) => {
        console.log(json)
        const {
          title,
          author,
          published,
          publisher,
          type,
          'container-title': containerTitle,
          volume,
          issue,
          abstract,
          DOI,
        } = json.message
        return generateJoteImage({
          title: title[0],
          author: author.map((a) => `${a.given} ${a.family}`).join(', '),
          name: containerTitle,
          // description: abstract?.replace(/<[^>]*>?/gm, ''),
          publishedRaw: published['date-parts'][0],
          publishedYear: published['date-parts'][0][0],
          publishedPretty: format(new Date(published['date-parts'][0].join('-')), 'MMMM do, yyyy'),
          volume,
          issue,
          type: articleType(DOI),
          logo: 'https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_transp_back_0_5x_bbe4cae12e.png?updated_at=2022-08-31T19:02:18.630Z',
          doi: DOI,
          references: json.message['is-referenced-by-count'],
        })
      })
  }

  const title = searchParams.get('title') || 'OG Image'
  const description = searchParams.get('description')
  // const year= searchParams.get('year')
  const publishedRaw = searchParams.get('published')
  const publishedYear = publishedRaw ? new Date(publishedRaw).getFullYear().toString() : null
  const publishedPretty = publishedRaw ? new Date(publishedRaw).toLocaleDateString() : null
  const logo =
    searchParams.get('logo') ||
    'https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_transp_back_0_5x_bbe4cae12e.png?updated_at=2022-08-31T19:02:18.630Z'
  const name = searchParams.get('name') ?? 'Journal of Trial & Error'
  const author = searchParams.get('author')
  const issue = searchParams.get('issue')
  const volume = searchParams.get('volume')
  const references = searchParams.get('references')

  return generateJoteImage({
    logo: logo as string,
    title: title as string,
    name: name as string,
    description: description as string,
    publishedPretty,
    publishedRaw,
    publishedYear,
    volume,
    issue,
    author,
    references,
    doi,
    ...(doi ? { type: articleType(doi) } : {}),
  })
}
