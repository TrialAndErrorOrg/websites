import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaMastodon, FaTwitter } from 'react-icons/fa'
import { SignUp } from './components/SignUp'

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
const navigation = {
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Meet the Team', href: '/about#team' },
    { name: 'Manifesto', href: 'https://doi.org/10.36850/ed1' },
  ],
  projects: [
    { name: 'Journal', href: 'https://blog.trialanderror.org' },
    { name: 'Blog', href: 'https://journal.trialanderror.org' },
    { name: 'Development', href: 'https://github.com/trialanderrororg' },
  ],
  company: [{ name: 'Jobs', href: 'https://positions.trialanderror.org' }],
  legal: [
    { name: 'Non-profit Status', href: 'https://journal.trialanderror.org/legal-status' },
    // { name: 'Privacy', href: '#' },
    // { name: 'Terms', href: '#' },
  ],
}
const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/jtrialerror',
    icon: (props: React.ComponentProps<'svg'>) => <FaTwitter {...props} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/TrialAndErrorOrg',
    icon: (props: React.ComponentProps<'svg'>) => <FaGithub {...props} />,
  },
  {
    name: 'Mastodon',
    href: 'https://akademienl.social/@trialanderror',
    icon: (props: React.ComponentProps<'svg'>) => <FaMastodon {...props} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jtrialanderror/',
    icon: (props: React.ComponentProps<'svg'>) => <FaLinkedin {...props} />,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/journaltrialerror',
    icon: (props: React.ComponentProps<'svg'>) => <FaInstagram {...props} />,
  },
]

export function Footer() {
  return (
    <footer className="bg-blue-500" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            {Object.keys(navigation)
              .slice(0, Math.floor(Object.keys(navigation).length / 2 + 0.9))
              ?.map((name, idx) => (
                // {Object.entries(navigation).map(([name, links]) => (
                <div className="md:grid md:grid-cols-2 md:gap-8" key={name}>
                  {Object.entries(navigation)
                    ?.slice(idx * 2, idx * 2 + 2)
                    .map(([name, links]) => (
                      <div
                        key={name} //className={idx % 2 === 0 ? 'mt-12 md:mt-0' : ''}>
                        className="mt-12 md:mt-0"
                      >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
                          {name}
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          {links.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                className="text-base text-slate-300 transition-colors hover:text-orange-500"
                              >
                                {item.name}
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
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="text-slate-100 hover:text-orange-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon //className="h-6 w-6 text-white"
                // aria-hidden="true"
                />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-slate-100 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Center of Trial and Error. CC BY 4.0
          </p>
        </div>
      </div>
    </footer>
  )
}
