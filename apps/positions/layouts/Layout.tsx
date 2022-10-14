import { MetaProps, MetaTags } from '../core/MetaTags'
import Head from 'next/head'

export function Layout({ meta, children }: { meta: MetaProps; children: React.ReactNode }) {
  return (
    <>
      <Head>
        <MetaTags {...meta} />
      </Head>
      <div className="selection:bg-orange-500 selection:rounded-sm selection:transition-all selection:text-white antialiased text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-slate-900">
        {/* <BasicScripts /> */}
        {children}
      </div>
    </>
  )
}
