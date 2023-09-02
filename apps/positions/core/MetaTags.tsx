import { SITE } from '../config'
import { NextSeo } from 'next-seo'

const image =
  'https://cote.azureedge.net/cote-strapi-uploads/undefined/assets/large_BUFFERTE_logo_blue_back_4096_88ab80fa53.png'

export interface MetaProps {
  title?: string
  description?: string
  image?: string
  ogTitle?: string
  ogType?: string
  canonical: string
  noindex?: boolean
  nofollow?: boolean
}
export function MetaTags({
  title = SITE.name,
  description = '',
  canonical,
  noindex = false,
  nofollow = false,
  ogTitle = title,
  ogType = 'website',
}: MetaProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        noindex={noindex}
        nofollow={nofollow}
        openGraph={{
          url: canonical,
          title: ogTitle,
          description: description,
          type: ogType,
          images: image
            ? [
                {
                  url: image?.toString(),
                  alt: ogTitle,
                },
              ]
            : undefined,
        }}
        twitter={{
          cardType: image ? 'summary_large_image' : undefined,
        }}
      />

      <link rel="shortcut icon" href={`${SITE.basePathname}favicon.ico`} />
      <link rel="icon" type="image/svg+xml" href={`${SITE.basePathname}favicon.svg`} />
      <link rel="mask-icon" href={`${SITE.basePathname}favicon.svg`} color="#8D46E7" />
    </>
  )
}
