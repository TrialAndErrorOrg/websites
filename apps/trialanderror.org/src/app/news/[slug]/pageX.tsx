import { Attribute } from '@strapi/strapi'
import Image from 'next/image'
import { cache } from 'react'
import { strapiClient } from '../../../server/api/strapi'

const getArticleBySlug = cache(async (slug: string) => {
  const article = await strapiClient
    .from<Attribute.GetValues<'api::jote-article.jote-article'>>('jote-articles')
    .select()
    .populate()
    .endsWith('url', slug)
    .get()
  return article.data?.[0]
})

export default async function NewsItemPage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  return (
    <div className="flex h-screen w-full flex-col  justify-center gap-10">
      <article className="container mx-auto">
        <Image
          src={article?.image?.url}
          alt={article?.image?.alternativeText}
          width={article?.image?.width}
          height={article?.image?.height}
        />
        <p className="text-sm">{(article?.published as any) || ''}</p>
        <h1 className="text-4xl font-bold">{article?.title}</h1>
        <p className="text-xl">{article?.abstract}</p>
        {/* Button which links to the full article */}
        <a
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          href={article?.url}
        >
          Read full article
        </a>
      </article>
    </div>
  )
}
