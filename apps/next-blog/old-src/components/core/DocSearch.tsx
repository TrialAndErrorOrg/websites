// import { DocSearch as DSearch } from '@tefkah/chair-flight-docsearch-react'
// import '@docsearch/css'

// import {
//   AlgoliaMultipleQueriesQuery,
//   AlgoliaSearchResponse,
//   instantMeiliSearch,
//   MeiliSearchResponse,
// } from '@meilisearch/instant-meilisearch'
// import React from 'react'
// import type { DocSearchHit } from '@tefkah/chair-flight-docsearch-react'

// const searchClient = instantMeiliSearch(
//   'https://app-meilisearchcote-prod-001.azurewebsites.net',
//   'aa45f3a7-48d5-4a41-bf8a-503a0cbc6ad7'
// )

// export const DocSearch = () => {
//   return (
//     <DSearch
//       search={async (queryString) => {
//         console.log({ queryString })
//         const res = await searchClient.search(toMeliSearchQuery(queryString))
//         console.log({ res })
//         return toDocSearchHit(res)
//       }}
//       indexName="blog-post"
//     />
//   )
// }
// export const toMeliSearchQuery = (query: string): AlgoliaMultipleQueriesQuery[] => {
//   return [
//     {
//       indexName: 'blog-post',
//       params: {
//         query,
//         hitsPerPage: 10,
//       },
//     },
//   ]
// }
// const highlightRegExp = /(.*)__ais-highlight__(.*)__ais-highlight__(.*)/i

// export const toDocSearchHit = ({
//   results,
// }: {
//   results: MeiliSearchResponse<MeiliSearchBlogPostResult>[]
// }): DocSearchHit[] => {
//   const { hits, query } = results[0]

//   return hits.map(
//     (hit) =>
//       ({
//         _objectID: hit.id.toString(),
//         title: 'toitel',
//         url: hit.slug,
//         objectID: hit.id.toString(),
//         type: 'content',
//         locale: 'en',
//         content: 'CONTENT',
//         url_without_anchor: hit.slug,
//         anchor: '',
//         _snippetResult: {
//           content: {
//             value:
//               hit._snippetResult.title.value
//                 .replace(/__\//g, '</')
//                 .replace(/ais-highlight__/g, 'em>')
//                 .replace(/__/g, '<') ?? '',
//             matchLevel: 'partial',
//             matchedWords: hit._snippetResult.title.value.match(highlightRegExp),
//           },

//           hierarchy_camel: [],
//           hierarchy: {
//             lvl0: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl1: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl2: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl3: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl4: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl5: {
//               value: hit.title,
//               matchLevel: 'none',

//               matchedWords: [],
//             },
//             lvl6: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//           },
//         },
//         _highlightResult: {
//           hierarchy_camel: [],
//           hierarchy: {
//             lvl0: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl1: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl2: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl3: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl4: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//             lvl5: {
//               value: hit.title,
//               matchLevel: 'none',

//               matchedWords: [],
//             },
//             lvl6: {
//               value: hit.title,
//               matchLevel: 'none',
//               matchedWords: [],
//             },
//           },
//           content: {
//             value: hit.title,
//             matchLevel: 'partial',
//             matchedWords: hit._highlightResult.title.value.match(
//               /__ais-hightlight__$1__\/ais-highlight__/gi
//             ),
//             fullyHighlighted: false,
//           },
//         },
//         hierarchy: {
//           lvl0: 'Blog',
//           lvl1: hit.category.title,
//           lvl2: hit.title,
//           lvl3: hit.body,
//           lvl4: '',
//           lvl5: '',
//           lvl6: '',
//         },
//       } as DocSearchHit)
//   )
// }
