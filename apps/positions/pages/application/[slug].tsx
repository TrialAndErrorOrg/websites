import { SITE } from '../../config'
import { Layout } from '../../layouts/Layout'
import { getCanonical, getPermalink } from '../../utils/permalinks'
import { Application } from '../../components/Application'
import { Application as ApplicationType } from '@/types'
import { GetServerSideProps } from 'next'
import { strapi } from '../../utils/strapi'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!
  const application = await strapi
    .from<ApplicationType>('applications')
    .select()
    .equalTo('url', slug as string)
    .populate()
    .get()

  return {
    props: {
      application: application?.data?.[0],
    },
  }
}

export default function ApplicationPage({ application }: { application: ApplicationType }) {
  const meta = {
    title: `${application.name} — ${SITE.name}`,
    canonical: getCanonical(getPermalink(application.url, 'application')).toString(),
    // image: application.image.url, //await findImage(post.image),
    noindex: true,
    ogTitle: application.name,
    ogType: 'article',
  }

  return (
    <Layout meta={meta}>
      <Application application={application} />
    </Layout>
  )
}
