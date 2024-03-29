import { Header } from './client/Header'

export async function HeaderWrapper() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full flex-none overflow-clip border-b-2 border-black bg-white text-black dark:border-white dark:bg-slate-700 dark:text-white md:h-14">
      <Header />
    </header>
  )
}
