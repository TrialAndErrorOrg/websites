import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkMath from 'remark-math'
import rehypeCitation from 'rehype-citation'
import remarkGFM from 'remark-gfm'
// @ts-expect-error no types
import remarkWikiLink from 'remark-wiki-link'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeKatex from 'rehype-katex'
import { slugify } from '@zkp/slugify'

export const mdxSerialize = async (
  input: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bibliography?: string,
): Promise<{
  frontMatter: Record<string, any>
  source: MDXRemoteSerializeResult<Record<string, unknown>>
}> => {
  const { content, data } = matter(input)
  const wikiLinkOptions = {
    pageResolver: (name: string) => [slugify(name)],
    hrefTemplate: (permalink: string) => `/${permalink}`,
    aliasDivider: '|',
  }
  try {
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGFM, [remarkWikiLink, wikiLinkOptions]],

        rehypePlugins: [
          rehypeKatex,
          [
            rehypeCitation,
            {
              bibliography,
              csl: 'apa',
              // inlineClass: 'citation',
            },
          ],
        ],
      },
      scope: data,
    })
    return { frontMatter: data, source: mdxSource }
  } catch (e) {
    console.error(e)
    return await mdxSerialize(`Something went wrong while rendering this page, please contact the administrator and show them this.
   \`\`\`
   ${e}
   \`\`\`
    `)
  }
}
