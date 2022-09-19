import { GetAttributesValues } from "@strapi/strapi"
import Head from "next/head"

export const BlogSeo = ({
  seo,
}: {
  seo: GetAttributesValues<"shared.seo">
}) => (
  <Head>
    <title>{seo.metaTitle}</title>
    <meta name="description" content={seo.metaDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="The Blog" />
    <meta property="og:title" content={seo.metaTitle} />
    <meta property="og:description" content={seo.metaDescription} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={seo.metaTitle} />
    <meta property="twitter:description" content={seo.metaDescription} />
  </Head>
)
