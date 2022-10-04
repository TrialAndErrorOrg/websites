import { DocSearch as DSearch } from '@tefkah/chair-flight-docsearch-react'
import '@docsearch/css'

import {
  AlgoliaMultipleQueriesQuery,
  AlgoliaSearchResponse,
  instantMeiliSearch,
  MeiliSearchResponse,
} from '@meilisearch/instant-meilisearch'
import React from 'react'
import type { DocSearchHit } from '@tefkah/chair-flight-docsearch-react'

const searchClient = instantMeiliSearch(
  'https://app-meilisearchcote-prod-001.azurewebsites.net',
  'aa45f3a7-48d5-4a41-bf8a-503a0cbc6ad7'
)
export interface MeiliSearchBlogPostResult {
  id: string
  title: string
  excerpt: string
  publishDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  sitemap_exclude: boolean
  slug: string
  body: string
  image: Image
  blog_authors: Blogauthor[]
  blog_tags: Blogtag[]
  seo: Seo
  related: any[]
  team_members: Teammember[]
  academic?: any
  category: Category
  _highlightResult: HighlightResult
  _snippetResult: HighlightResult
}

interface HighlightResult {
  id: Id
  title: Id
  excerpt: Id
  publishDate: Id
  createdAt: Id
  updatedAt: Id
  publishedAt: Id
  sitemap_exclude: Id
  slug: Id
  body: Id
  image: Image2
  blog_authors: Blogauthor2[]
  blog_tags: Blogtag2[]
  seo: Seo2
  related: any[]
  team_members: Teammember2[]
  academic: Id
  category: Category2
}

interface Category2 {
  id: Id
  slug: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  locale: Id
  title: Id
}

interface Teammember2 {
  id: Id
  firstName: Id
  lastName: Id
  email: Id
  bio: Id
  show_pronouns: Id
  pronouns: Id
  createdAt: Id
  updatedAt: Id
  azureID: Id
  twitter: Id
  github: Id
  orcid: Id
  personalWebsite: Id
  position: Id
  department: Id
  sitemap_exclude: Id
  slug: Id
  linkedin: Id
}

interface Seo2 {
  id: Id
  metaTitle: Id
  metaDescription: Id
  keywords: Id
  metaRobots: Id
  structuredData: Id
  metaViewport: Id
  canonicalURL: Id
}

interface Blogtag2 {
  id: Id
  title: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  slug: Id
}

interface Blogauthor2 {
  id: Id
  firstName: Id
  lastName: Id
  bio: Id
  email: Id
  twitter: Id
  github: Id
  orcid: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  slug: Id
}

interface Image2 {
  id: Id
  name: Id
  alternativeText: Id
  caption: Id
  width: Id
  height: Id
  formats: Formats2
  hash: Id
  ext: Id
  mime: Id
  size: Id
  url: Id
  previewUrl: Id
  provider: Id
  provider_metadata: Id
  createdAt: Id
  updatedAt: Id
  folderPath: Id
  sitemap_exclude: Id
}

interface Formats2 {
  small: Small2
  thumbnail: Small2
}

interface Small2 {
  ext: Id
  url: Id
  hash: Id
  mime: Id
  name: Id
  path: Id
  size: Id
  width: Id
  height: Id
}

interface Id {
  value: string
}

interface Category {
  id: number
  slug: string
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  locale: string
  title: string
}

interface Teammember {
  id: number
  firstName: string
  lastName: string
  email: string
  bio: string
  show_pronouns: boolean
  pronouns: string
  createdAt: string
  updatedAt: string
  azureID: string
  twitter?: any
  github?: any
  orcid?: any
  personalWebsite?: any
  position: string
  department: string
  sitemap_exclude?: any
  slug: string
  linkedin?: any
}

interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  keywords?: any
  metaRobots?: any
  structuredData?: any
  metaViewport?: any
  canonicalURL?: any
}

interface Blogtag {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  slug: string
}

interface Blogauthor {
  id: number
  firstName: string
  lastName: string
  bio: string
  email?: any
  twitter?: any
  github?: any
  orcid?: any
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  slug: string
}

interface Image {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
  folderPath: string
  sitemap_exclude: boolean
}

interface Formats {
  small: Small
  thumbnail: Small
}

interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
}

export const DocSearch = () => {
  return (
    <DSearch
      search={async (queryString) => {
        console.log({ queryString })
        const res = await searchClient.search(toMeliSearchQuery(queryString))
        console.log({ res })
        return toDocSearchHit(res)
      }}
      indexName="blog-post"
    />
  )
}
export const toMeliSearchQuery = (query: string): AlgoliaMultipleQueriesQuery[] => {
  return [
    {
      indexName: 'blog-post',
      params: {
        query,
        hitsPerPage: 10,
      },
    },
  ]
}
const highlightRegExp = /(.*)__ais-highlight__(.*)__ais-highlight__(.*)/i

export const toDocSearchHit = ({
  results,
}: {
  results: MeiliSearchResponse<MeiliSearchBlogPostResult>[]
}): DocSearchHit[] => {
  const { hits, query } = results[0]

  return hits.map(
    (hit) =>
      ({
        _objectID: hit.id.toString(),
        title: 'toitel',
        url: hit.slug,
        objectID: hit.id.toString(),
        type: 'content',
        locale: 'en',
        content: 'CONTENT',
        url_without_anchor: hit.slug,
        anchor: '',
        _snippetResult: {
          content: {
            value:
              hit._snippetResult.title.value
                .replace(/__\//g, '</')
                .replace(/ais-highlight__/g, 'em>')
                .replace(/__/g, '<') ?? '',
            matchLevel: 'partial',
            matchedWords: hit._snippetResult.title.value.match(highlightRegExp),
          },

          hierarchy_camel: [],
          hierarchy: {
            lvl0: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl1: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl2: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl3: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl4: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl5: {
              value: hit.title,
              matchLevel: 'none',

              matchedWords: [],
            },
            lvl6: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
          },
        },
        _highlightResult: {
          hierarchy_camel: [],
          hierarchy: {
            lvl0: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl1: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl2: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl3: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl4: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
            lvl5: {
              value: hit.title,
              matchLevel: 'none',

              matchedWords: [],
            },
            lvl6: {
              value: hit.title,
              matchLevel: 'none',
              matchedWords: [],
            },
          },
          content: {
            value: hit.title,
            matchLevel: 'partial',
            matchedWords: hit._highlightResult.title.value.match(
              /__ais-hightlight__$1__\/ais-highlight__/gi
            ),
            fullyHighlighted: false,
          },
        },
        hierarchy: {
          lvl0: 'Blog',
          lvl1: hit.category.title,
          lvl2: hit.title,
          lvl3: hit.body,
          lvl4: '',
          lvl5: '',
          lvl6: '',
        },
      } as DocSearchHit)
  )
}
