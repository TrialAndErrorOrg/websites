import { SITE } from '../../config'
import { Layout } from '../../layouts/Layout'
import { Position } from '../../components/Position'

import { getCanonical, getPermalink } from '../../utils/permalinks'
import { getPosition } from '../../utils/positions'
import type { OpenPosition } from '@/types'
import { GetServerSideProps } from 'next'
import Error from 'next/error'

interface Props {
  position: OpenPosition
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string
  const position = await getPosition(slug)

  const image = `${process.env.OG_URL}/api/og/positions?position=${encodeURIComponent(
    position.title
  )}&deadline=${position.deadline}`

  return {
    props: {
      position,
      image,
    },
  }
}

export default function PositionPage({
  position,
  image,
}: {
  position: OpenPosition
  image?: string
}) {
  if (!position?.title) {
    return <Error statusCode={404} />
  }

  const meta = {
    title: `${position.title} — ${SITE.name}`,
    description: position?.seo?.metaDescription ?? position.summary,
    canonical: getCanonical(getPermalink(position.slug, 'position')).toString(),
    ogTitle: `${position.title} — ${SITE.name}`,
    image:
      image ??
      `${process.env.NEXT_PUBLIC_OG_URL}/api/og/positions?position=${encodeURIComponent(
        position.title
      )}&deadline=${position.deadline}`,
    ogType: 'article',
  }
  console.log(meta.canonical)

  return (
    <Layout meta={meta}>
      <Position position={position} />
    </Layout>
  )
}
