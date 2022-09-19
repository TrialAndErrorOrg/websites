import { GetAttributesValues } from "@strapi/strapi"
import Head from "next/head"

export const BlogSeo = ({
  post,
}: {
  post: GetAttributesValues<"api::blog-post.blog-post">
}) => {
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
  } = post

  const titleWithContext = `${title} | A Blog of Trial &amp Error`

  const { doi, abstract } = academic ?? ({} as NonNullable<typeof academic>)

  const titleTags = [
    <title key="t1">{titleWithContext}</title>,
    <meta key="t2" property="og:title" content={titleWithContext} />,
    <meta key="t3" name="twitter:title" content={titleWithContext} />,
    <meta key="t4" name="twitter:image:alt" content={titleWithContext} />,
    <meta key="t5" name="citation_title" content={title} />,
    <meta key="t6" name="dc.title" content={title} />,
    <meta key="sn1" name="og:site_name" content="A Blog of Trial &amp Error" />,
    <meta
      key="sn2"
      name="citation_journal_title"
      content="A Blog of Trial &amp Error"
    />,
    <meta key="u3" property="og:type" content="article" />,
    <meta
      key="u4"
      property="og:url"
      content={`https://trialanderror.org/blog/${post.slug}`}
    />,
    <meta
      key="u5"
      name="twitter:url"
      content={`https://trialanderror.org/blog/${post.slug}`}
    />,
    <meta
      key="u6"
      name="citation_fulltext_html_url"
      content={`https://trialanderror.org/blog/${post.slug}`}
    />,
  ]

  const doiTags = doi
    ? [
        <meta key="doi1" name="citation_doi" content={doi} />,
        <meta key="doi2" name="dc.identifier" content={doi} />,
        <meta key="doi4" name="prism.doi" content={doi} />,
      ]
    : []

  const descriptionTags = [
    <meta
      key="d1"
      name="description"
      content={seo?.metaDescription ?? abstract ?? excerpt}
    />,
    <meta
      key="d2"
      property="og:description"
      content={seo?.metaDescription ?? excerpt}
    />,
    <meta
      key="d3"
      name="twitter:description"
      content={seo?.metaDescription ?? excerpt}
    />,
    <meta key="d4" name="citation_abstract" content={abstract ?? excerpt} />,
    <meta key="d5" name="dc.description" content={abstract ?? excerpt} />,
  ]

  const imageTags = [
    <meta
      key="i1"
      property="og:image"
      content={seo?.shareImage?.url ?? image?.url}
    />,
    <meta
      key="i2"
      name="twitter:image"
      content={seo?.shareImage?.url ?? image?.url}
    />,
    <meta
      key="i3"
      name="citation_image"
      content={seo?.shareImage?.url ?? image?.url}
    />,
    <meta
      key="i4"
      name="dc.coverage"
      content={seo?.shareImage?.url ?? image?.url}
    />,
  ]

  const teamMemberTags =
    teamMembers?.flatMap((teamMember) => [
      <meta
        key={`tm${teamMember.firstName}1`}
        name="citation_author"
        content={`${teamMember.firstName} ${teamMember.lastName ?? ""}`}
      />,
      <meta
        key={`tm${teamMember.firstName}2`}
        name="dc.creator"
        content={`${teamMember.firstName} ${teamMember.lastName ?? ""}`}
      />,
      <meta
        key={`tm${teamMember.firstName}3`}
        name="dc.contributor"
        content={`${teamMember.firstName} ${teamMember.lastName ?? ""}`}
      />,
    ]) ?? []

  const blogAuthorTags =
    blogAuthors?.flatMap((blogAuthor) => [
      <meta
        key={`ba${blogAuthor.firstName}1`}
        name="citation_author"
        content={`${blogAuthor.firstName} ${blogAuthor.lastName ?? ""}`}
      />,
      <meta
        key={`ba${blogAuthor.firstName}2`}
        name="dc.creator"
        content={`${blogAuthor.firstName} ${blogAuthor.lastName ?? ""}`}
      />,
      <meta
        key={`ba${blogAuthor.firstName}3`}
        name="dc.contributor"
        content={`${blogAuthor.firstName} ${blogAuthor.lastName ?? ""}`}
      />,
    ]) ?? []

  const blogTagTags =
    blogTags?.flatMap((blogTag) => [
      <meta
        key={`bt${blogTag.title}1`}
        name="citation_keywords"
        content={blogTag.title}
      />,
      <meta
        key={`bt${blogTag.title}2`}
        name="dc.subject"
        content={blogTag.title}
      />,
    ]) ?? []

  const relatedTags =
    related?.flatMap((relatedPost) => [
      <meta
        key={`r${relatedPost.title}2`}
        name="dc.relation"
        content={relatedPost.title}
      />,
    ]) ?? []

  const dateTags = [
    <meta
      key="p1"
      name="article:published_time"
      content={publishDate ?? publishedAt}
    />,
    <meta
      key="p2"
      name="citation_publication_date"
      content={publishDate ?? publishedAt}
    />,
    <meta key="p3" name="dc.date" content={publishDate ?? publishedAt} />,
  ]

  const seoTags = [
    <meta
      key="s1"
      name="robots"
      content={seo?.metaRobots ?? "index, follow"}
    />,
  ]

  return (
    <Head>
      {[
        ...titleTags,
        ...descriptionTags,
        ...imageTags,
        ...teamMemberTags,
        ...blogAuthorTags,
        ...blogTagTags,
        ...relatedTags,
        ...dateTags,
        ...seoTags,
        ...doiTags,
      ]}
    </Head>
  )
}
