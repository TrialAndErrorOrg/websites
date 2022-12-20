import { SITE } from '../../config'
import { Layout } from '../../layouts/Layout'
import { Position } from '../../components/Position'

import { getCanonical, getPermalink } from '../../utils/permalinks'
import { getPosition } from '../../utils/positions'
import type { OpenPosition } from '../../utils/types'
import { GetServerSideProps } from 'next'

interface Props {
  position: OpenPosition
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string
  const position = await getPosition(slug)

  return {
    props: {
      position,
    },
  }
}

export default function PositionPage({ position }: { position: OpenPosition }) {
  const meta = {
    title: `${position.title} — ${SITE.name}`,
    description: position?.seo?.metaDescription ?? position.summary,
    canonical: getCanonical(getPermalink(position.slug, 'post')).toString(),
    ogTitle: `${position.title} — ${SITE.name}`,
    image: `${process.env.NEXT_PUBLIC_OG_URL}/api/og/positions?position=${encodeURIComponent(
      position.title
    )}&deadline=${position.deadline}`,
    ogType: 'article',
  }

  return (
    <Layout meta={meta}>
      <Position position={position} />
    </Layout>
  )
}
