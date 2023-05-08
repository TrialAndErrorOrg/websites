// import { Icon } from 'astro-icon'
// import Logo from '../atoms/Logo.astro'
// import ToggleTheme from '../core/ToggleTheme.astro'
// import { ToggleMenu } from './ToggleMenu'
// import { FaRss, FaGithub } from 'react-icons/fa'

// // import { getPermalink, getBlogPermalink, getHomePermalink } from '../../utils/permalinks'
// import { getMain } from '../../utils/menu'
// import { Search } from './client/Search'
// import { Logo } from './client/Logo'
import { Header } from './client/Header'

export async function HeaderWrapper() {
  // const main = await getMain()

  return (
    <header className="sticky top-0 z-50 mx-auto w-full flex-none overflow-clip border-b-2 border-black bg-white text-black dark:border-white dark:bg-slate-700 dark:text-white md:h-14">
      <Header />
    </header>
  )
}
