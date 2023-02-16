import { getPage } from '../../server/page'
import { SEO } from '../layout'

export default async function AboutHead({ params: { page } }: { params: { page: string } }) {
  const pageResult = await getPage(page)

  const { title, image, slug, seo } = pageResult
  return (
    <SEO
      title={`${seo?.metaTitle ?? title} | Center of Trial and Error`}
      ogTitle={seo?.metaTitle ?? title}
      description={seo?.metaDescription ?? ''}
      canonical={slug}
    />
  )
}
