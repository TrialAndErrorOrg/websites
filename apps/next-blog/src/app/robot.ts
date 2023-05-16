import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: 'https://blog.trialanderror.org/sitemap.xml',
    rules: {
      allow: '/',
      userAgent: '*',
      disallow: '/api/',
    },
  }
}
