import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaEnvelopeOpen,
  FaGithub,
} from 'react-icons/fa/index'
import { getMenu } from '../../utils/menu'
import { SignUpWrapper } from './client/SignUpWrapper'

export async function Footer(): // @ts-expect-error TODO: [BLOG] Remove after 5.1 is stable
JSX.Element {
  const footer = (await getMenu('footer-blog')) ?? []

  const socials = (await getMenu('socials')) ?? []
  return (
    <footer
      className="relative border-t-2 border-black bg-black text-white dark:border-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto px-4 py-12 sm:px-6 md:max-w-7xl lg:px-8 lg:py-16 xl:max-w-[100rem]">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 flex-wrap gap-4 md:flex md:gap-8 xl:col-span-4">
            {
              // TODO: [blog] clean up the footer
              new Array(Math.floor(((footer?.length ?? 0) - 0.1) / 2) + 1).fill(0).map((_, idx) => (
                <div
                  className={`flex-wrap md:flex md:grid-cols-${
                    Math.floor(((footer?.length ?? 0) - 0.1) / 2) + 1
                  } md:gap-8`}
                >
                  {[footer?.[idx * 2], footer?.[idx * 2 + 1]]?.map((section, ix) => (
                    <div className={ix % 2 ? 'mt-12 md:mt-0' : ''}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-orange-500 dark:text-slate-200">
                        {section?.url ? <a href={section.url}>{section?.title}</a> : section?.title}
                      </h3>
                      <ul className="mt-4 space-y-4">
                        {
                          // @ts-expect-error thing is wrong
                          section?.children?.map((item, indx) => (
                            <li>
                              <a
                                href={item.url ?? '/'}
                                className="sleek-underline text-base text-white dark:text-slate-100 dark:hover:text-white"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
        <div className="border-t border-white pt-8 dark:border-white lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-base text-white dark:text-white">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </div>
          <SignUpWrapper />
        </div>
        <div className="mt-8 border-t border-black pt-8 dark:border-white md:flex md:items-center md:justify-between">
          <div className="flex space-x-1 md:order-2">
            {socials?.map(({ title, url }) => {
              return (
                <a
                  href={url}
                  className="button-sleek flex h-10 w-10 items-center justify-center text-lg !text-white hover:!text-black dark:text-white"
                >
                  <span className="sr-only">{title}</span>
                  {title === 'github' ? (
                    <FaGithub />
                  ) : title === 'twitter' ? (
                    <FaTwitter />
                  ) : title === 'linkedin' ? (
                    <FaLinkedin />
                  ) : title === 'youtube' ? (
                    <FaYoutube />
                  ) : title === 'instagram' ? (
                    <FaInstagram />
                  ) : title === 'facebook' ? (
                    <FaFacebook />
                  ) : title === 'mail' ? (
                    <FaEnvelopeOpen />
                  ) : null}
                </a>
              )
            })}
          </div>
          <p className="mt-8 text-base font-bold text-white dark:text-white md:order-1 md:mt-0">
            <a href="https://trialanderror.org" className="underline hover:text-orange-500">
              &copy; {new Date().getFullYear() > 2022 ? `2022-${new Date().getFullYear()}` : 2022}{' '}
              Center of Trial &amp; Error
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
