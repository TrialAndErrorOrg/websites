import { Menu } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaMastodon, FaTwitter } from 'react-icons/fa'
import { getNavigation } from '../../server/nav'
import { SignUp } from './SignUp'

/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const defaultNav: Menu = {
  slug: 'main-footer',
  title: 'Trial and Error',
  items: [
    {
      title: 'About',
      url: '',
      children: [
        { title: 'About Us', url: '/about' },
        { title: 'Meet the Team', url: '/about#team' },
        { title: 'Manifesto', url: 'https://doi.org/10.36850/ed1' },
      ],
    },
    {
      title: 'Projects',
      children: [
        { title: 'Journal', url: 'https://blog.trialanderror.org' },
        { title: 'Blog', url: 'https://journal.trialanderror.org' },
        { title: 'Development', url: 'https://github.com/trialanderrororg' },
      ],
    },
    { title: 'Company', children: [{ title: 'Jobs', url: 'https://positions.trialanderror.org' }] },
    {
      title: 'Legal',
      children: [
        { title: 'Non-profit Status', url: 'https://journal.trialanderror.org/legal-status' },
        // { name: 'Privacy', href: '#' },
        // { name: 'Terms', href: '#' },
      ],
    },
  ],
}

const socialMap: Record<string, React.FC<React.ComponentProps<'svg'>>> = {
  twitter: (props: React.ComponentProps<'svg'>) => <FaTwitter {...props} />,
  github: (props: React.ComponentProps<'svg'>) => <FaGithub {...props} />,
  mastodon: (props: React.ComponentProps<'svg'>) => <FaMastodon {...props} />,
  linkedin: (props: React.ComponentProps<'svg'>) => <FaLinkedin {...props} />,
  instagram: (props: React.ComponentProps<'svg'>) => <FaInstagram {...props} />,
}

const defaultSocials: Menu = {
  title: 'Social Items',
  slug: 'main-socials',
  items: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/jtrialerror',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/TrialAndErrorOrg',
    },
    {
      title: 'Mastodon',
      url: 'https://akademienl.social/@trialanderror',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/jtrialanderror/',
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/journaltrialerror',
    },
  ],
}

export async function Footer() {
  const navPromise = getNavigation('main-footer')
  const socialPromise = getNavigation('main-socials')
  const [nav, socials] = await Promise.all([navPromise, socialPromise])

  const navigation = nav ?? defaultNav
  const social = socials ?? defaultSocials

  return (
    <footer className="bg-blue-500" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {navigation.items
              ?.slice(0, Math.floor((navigation.items ?? []).length / 2 + 0.9))
              ?.map(({ title }, idx) => (
                // {Object.entries(navigation).map(([name, links]) => (
                <div className="md:grid md:grid-cols-2 md:gap-8" key={title}>
                  {(navigation.items ?? [])
                    ?.slice(idx * 2, idx * 2 + 2)
                    .map(({ title, children, url, target }) => (
                      <div
                        key={title} //className={idx % 2 === 0 ? 'mt-12 md:mt-0' : ''}>
                        className="mt-12 md:mt-0"
                      >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
                          {title}
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          {(children ?? []).map(({ title, url, target }) => (
                            <li key={title}>
                              <Link
                                href={url!}
                                target={target || url?.startsWith('http') ? '_blank' : undefined}
                                className="text-base text-slate-300 transition-colors hover:text-orange-500"
                              >
                                {title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              ))}
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 mb-4 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <SignUp />
            {/* <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-blue-500 shadow-sm focus:border-orange-500 focus:placeholder-slate-100 focus:outline-none focus:ring-orange-500"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center border border-transparent bg-orange-600 py-2 px-4 text-base font-bold text-blue-500 hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form> */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 text-white md:order-2">
            {social.items?.map(({ title, icon, url }) => {
              const lowercaseTitle = title.toLowerCase()
              const Icon = icon ? (
                <Image
                  src={icon?.url}
                  alt={title}
                  width={24}
                  height={24}
                  className="h-6 w-6 text-white"
                />
              ) : (
                socialMap[lowercaseTitle]
              )
              return (
                <a
                  key={title}
                  href={url}
                  target={url?.startsWith('http') ? '_blank' : undefined}
                  className="text-slate-100 hover:text-orange-500"
                >
                  <span className="sr-only">{title}</span>
                  {/* <icon //className="h-6 w-6 text-white"
                // aria-hidden="true"
                /> */}
                  {/* @ts-expect-error TODO: fix incorrect icon type when using JSX elements in an object as a map */}
                  <Icon />
                </a>
              )
            })}
          </div>
          <p className="mt-8 text-base text-slate-100 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Center of Trial and Error. CC BY 4.0
          </p>
        </div>
      </div>
    </footer>
  )
}
