import { SITE } from '../../config'
import { Layout } from '../../layouts/Layout'
import { Position } from '../../components/Position'

import { cleanSlug, getCanonical, getPermalink, POST_BASE } from '../../utils/permalinks'
import { getPosition, getPositions } from '../../utils/positions'
import type { OpenPosition } from '../../utils/types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

interface Props {
  position: OpenPosition
}

// export async function getStaticPaths() {
//   const positions = (await getPositions()) ?? []

//   return positions.map((position) => ({
//     params: {
//       slug: cleanSlug(position.slug ?? '/'),
//       blog: POST_BASE || undefined,
//     },
//     props: { position },
//   }))
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const position = await getPosition(slug)

  return {
    props: {
      position,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const positions = (await getPositions()) ?? []

  return {
    paths: positions.map((position) => ({
      params: {
        slug: cleanSlug(position.slug ?? '/'),
        blog: POST_BASE || undefined,
      },
    })),
    fallback: false,
  }
}

export default function PositionPage({ position }: { position: OpenPosition }) {
  const meta = {
    title: `${position.title} — ${SITE.name}`,
    description: position?.seo?.metaDescription ?? position.summary,
    canonical: getCanonical(getPermalink(position.slug, 'post')).toString(),
    image: position.image.url, //await findImage(post.image),
    ogTitle: position.title,
    ogType: 'article',
  }

  return (
    <Layout meta={meta}>
      <Position position={position} />
    </Layout>
  )
}
