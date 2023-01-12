import { NextSeo, NextSeoProps } from 'next-seo'
import Link from 'next/link'
import '../styles/globals.css'

export const defaultImage =
  'https://cote.azureedge.net/cote-strapi-uploads/undefined/assets/large_BUFFERTE_logo_blue_back_4096_88ab80fa53.png'

// next-seo.config.js
export const SEO = (
  {
    description = '',
    image: _image = defaultImage,
    canonical = 'https://trialanderror.org',
    noindex = false,
    nofollow = false,
    title = 'Center of Trial and Error',
    ogTitle = '',
    ogType = 'website',
    locale = 'en_US',
    alt = '',
  } = {},
  otherProps?: NextSeoProps,
) => (
  <NextSeo
    {...{
      title: title,
      description: description,
      openGraph: {
        type: ogType,
        locale,
        url: canonical,
        title: ogTitle || title,
        description: description,
        images: [
          {
            url: _image,
            width: 1200,
            height: 600,
            alt,
          },
        ],
        siteName: 'Center of Trial and Error',
      },
      twitter: {
        handle: '@jtrialerror',
        site: '@jtrialerror',
        cardType: 'summary_large_image',
      },
      useAppDir: true,
      ...otherProps,
    }}
  />
)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SEO />
      </head>
      <body>
        <nav className="flex gap-4 border p-10">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
        </nav>
        <div className="container">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
