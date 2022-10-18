import { SITE } from '../../config'
import { Layout } from '../../layouts/Layout'
import { getCanonical, getPermalink } from '../../utils/permalinks'
import { Application } from '../../components/Application'
import { GetServerSideProps } from 'next'
import { strapi } from '../../utils/strapi'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params
  const application = await strapi
    .from<Application>('applications')
    .select()
    .equalTo('url', slug)
    .populate()
    .get()
  console.log(application)

  return {
    props: {
      application: application?.data?.[0],
    },
  }
}

export default function ApplicationPage({ application }: { application: Application }) {
  console.log(application)
  const meta = {
    title: `${application.name} — ${SITE.name}`,
    canonical: getCanonical(getPermalink(application.url, 'post')).toString(),
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
