import { Metadata } from 'next'
import type { BlogPost } from '@/types'

export const getAcademicOtherSeo = (post: BlogPost): Metadata['other'] => {
  const {
    title,
    excerpt,
    publishDate,
    publishedAt,
    image,
    blog_authors: blogAuthors,
    blog_tags: blogTags,
    team_members: teamMembers,
    related,
    seo,
    academic,
    doi,
  } = post

  const titleWithContext = `${title} | A Blog of Trial &amp; Error`

  const { abstract } = academic ?? ({} as NonNullable<typeof academic>)

  const titleTags = {
    citation_title: title,
    'dc.title': title,
    citation_fulltext_html_url: `https://trialanderror.org/blog/${post.slug}`,
  }

  const doiTags = doi
    ? {
        citation_doi: doi,
        'dc.identifier': doi,
        'prism.doi': doi,
      }
    : null

  const descriptionTags = {
    citation_abstract: abstract ?? excerpt,
    'dc.description': abstract ?? excerpt,
  }

  const imageTags = {
    citation_image: seo?.shareImage?.url ?? image?.url,
    'dc.coverage': seo?.shareImage?.url ?? image?.url,
  }

  const auths = [...(teamMembers ?? []), ...(blogAuthors ?? [])]
  const blogAuthorTags = auths?.length
    ? auths.reduce(
        (acc, blogAuthor) => {
          const authorName = `${blogAuthor.firstName ?? ''} ${blogAuthor.lastName ?? ''}`
          acc['citation_author'] = acc['citation_author']
            ? [...acc['citation_author'], authorName]
            : [authorName]
          acc['dc.creator'] = acc['dc.creator'] ? [...acc['dc.creator'], authorName] : [authorName]
          acc['dc.contributor'] = acc['dc.contributor']
            ? [...acc['dc.contributor'], authorName]
            : [authorName]
          return acc
        },
        {} as {
          citation_author: string[]
          'dc.creator': string[]
          'dc.contributor': string[]
        },
      )
    : null

  const blogTagTags = blogTags?.length
    ? {
        citation_keywords: blogTags?.map((blogTag) => blogTag.title),
        'dc.subject': blogTags?.map((blogTag) => blogTag.title),
      }
    : null

  const relatedTags = related?.length
    ? {
        'dc.relation': related?.map(
          (relatedPost) => relatedPost.doi ?? `https://blog.trialanderror.org/${relatedPost.slug}`,
        ),
      }
    : null

  const dateTags = {
    'article:published_time':
      publishDate?.toString() ?? publishedAt?.toString() ?? new Date().toString(),
    citation_publication_date:
      publishDate?.toString() ?? publishedAt?.toString() ?? new Date().toString(),
    'dc.date': publishDate?.toString() ?? publishedAt?.toString() ?? new Date().toString(),
  }

  const tags = {
    ...titleTags,
    ...descriptionTags,
    ...imageTags,
    ...blogAuthorTags,
    ...blogTagTags,
    ...relatedTags,
    ...dateTags,
    ...doiTags,
  }

  return tags
}
