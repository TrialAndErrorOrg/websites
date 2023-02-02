import { getNavigation } from '../../server/nav'
import { Navigation } from './Navigation'
import { Menu } from '@/types'

const defaultNav: Menu = {
  title: 'Main navigation',
  slug: 'main-nav',
  items: [
    {
      title: 'Home',
      url: '/',
      children: [],
    },
    {
      title: 'About',
      url: '/about',
      children: [
        {
          title: 'Our Mission',
          url: '/about#mission',
          children: [],
        },
        {
          title: 'Meet the Team',
          url: '/about#team',
          children: [],
        },
        {
          title: 'Non-profit Status',
          url: 'https://journal.trialanderror.org/legal-status',
          target: '_blank',
          children: [],
        },
      ],
    },
    {
      title: 'Projects',
      url: '',
      children: [
        {
          title: 'Journal of Trial & Error',
          url: 'https://journal.trialanderror.org',
          description: 'An independent, diamond open-access journal redefining failure.',
          children: [],
        },
        {
          title: 'Blog of Trial & Error',
          url: 'https://blog.trialanderror.org',
          description:
            'A blog by the Center of Trial and Error exploring failure in academia, open science and what it takes to be an Open Access publisher.',
          children: [],
        },
        {
          title: 'Publishers of Trial & Error',
          url: 'https://openpresstiu.pubpub.org',
          target: '_blank',
          description: 'We publish books for the University of Tilburg.',
          children: [],
        },
      ],
    },
  ],
}

export async function Nav() {
  const navigation = await getNavigation('main-nav')
  const nav = navigation || defaultNav

  return <Navigation nav={nav} />
}
