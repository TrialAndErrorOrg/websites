import {
  useState,
  useEffect,
  createContext,
  Fragment,
  useCallback,
  useContext,
  useRef,
} from 'react'
// import { ClassTable } from '@/components/ClassTable'
// import { SidebarLayout, SidebarContext } from '@/layouts/SidebarLayout'
// import { PageHeader } from '@/components/PageHeader'
// import { DocsFooter } from '@/components/DocsFooter'
// import { Heading } from '@/components/Heading'
// import { MDXProvider } from '@mdx-js/react'
import { cx as clsx } from '../../utils/cx'

// export const ContentsContext = createContext()

export interface Section {
  slug: string
  title: string
  children?: Section[]
}

export const TableOfContents = ({
  tableOfContents,
}: // currentSection,
// currentSection: string
{
  tableOfContents: Section[]
}) => {
  // const tableOfContents = getTableOfContents()
  const currentSection = useTableOfContents(tableOfContents)

  function isActive(section: Section) {
    if (section.slug === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  let pageHasSubsections = tableOfContents.some(
    (section) => section?.children?.length && section.children.length > 0
  )

  return (
    <div className="px-8">
      <h5 className="mb-4 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
        On this page
      </h5>
      <ul className="flex flex-col gap-3 text-sm  text-slate-700">
        {tableOfContents.map((section) => (
          <Fragment key={section.slug}>
            <li>
              <a
                href={`#${section.slug}`}
                className={clsx(
                  'cia-no-hover py-1 leading-4',
                  pageHasSubsections ? 'font-medium' : '',
                  isActive(section)
                    ? 'cia-full font-bold text-black dark:bg-none dark:text-white dark:underline'
                    : 'hover:font-semibold hover:text-black dark:text-slate-200 dark:hover:text-white'
                )}
              >
                {section.title}
              </a>
            </li>
            {section?.children?.map((subsection) => (
              <li className="ml-4" key={subsection.slug}>
                <a
                  href={`#${subsection.slug}`}
                  className={clsx(
                    'cia-no-hover group flex items-start py-1',
                    isActive(subsection)
                      ? 'cia-active border-2 border-black bg-orange-500 dark:bg-none dark:text-white dark:underline'
                      : 'dark:hover:text-slate-white hover:text-slate-900 dark:text-slate-200'
                  )}
                >
                  <svg
                    width="3"
                    height="24"
                    viewBox="0 -9 3 24"
                    className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                  >
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {subsection.title}
                </a>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

interface Heading {
  id: string
  top: number
}
export const useTableOfContents = (tableOfContents: Section[]) => {
  const [currentSection, setCurrentSection] = useState(tableOfContents?.[0]?.slug)

  // const [headings, setHeadings] = useState<{ [id: string]: IntersectionObserverEntry }>({})
  // const headingElementsRef = useRef<HTMLHeadingElement[]>([]);

  const callback: IntersectionObserverCallback = useCallback(
    (intersectedHeadings: IntersectionObserverEntry[]) => {
      // setHeadings(
      //   intersectedHeadings.reduce((map, headingElement) => {
      //     map[headingElement.target.id] = headingElement
      //     return map
      //   }, {} as { [id: string]: IntersectionObserverEntry })
      // )

      const visibleHeadings = intersectedHeadings.filter(
        (headingElement) => headingElement.isIntersecting
      )

      // .filter(Boolean) ?? []) as IntersectionObserverEntry[]

      if (!visibleHeadings.length) return

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id)

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setCurrentSection(visibleHeadings[0]?.target?.id)
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
        return
      }

      const sortedVisibleHeadings = visibleHeadings.sort(
        (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
      )

      setCurrentSection(sortedVisibleHeadings[0].target.id)
    },
    [setCurrentSection]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      root: document.querySelector('iframe'),
      rootMargin: '500px',
    })

    const headingElements = Array.from(document.querySelectorAll('h2, h3'))

    headingElements.forEach((element) => observer.observe(element))
    // Get all headings that are currently visible on the page
    // const visibleHeadings = [];
    //   }
    // };

    return () => observer.disconnect()
  }, [])
  return currentSection
}

export const useTableOfContentsBad = (tableOfContents: Section[]) => {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.slug)
  let [headings, setHeadings] = useState<Heading[]>([])

  const registerHeading = useCallback((id: string, top: number) => {
    setHeadings((headings) => [...headings.filter((h) => id !== h.id), { id, top }])
  }, [])

  const unregisterHeading = useCallback((id: string) => {
    setHeadings((headings) => headings.filter((h) => id !== h.id))
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0 || headings.length === 0) return
    function onScroll() {
      let style = window.getComputedStyle(document.documentElement)
      let scrollMt = parseFloat(style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0')
      let fontSize = parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16')
      scrollMt = scrollMt * fontSize

      let sortedHeadings = headings.concat([]).sort((a, b) => a.top - b.top)
      let top = window.pageYOffset + scrollMt + 1
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
        passive: true,
      })
    }
  }, [headings, tableOfContents])

  return { currentSection, registerHeading, unregisterHeading }
}

// export function ContentsLayoutOuter({ children, layoutProps, ...props }) {
//   const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(
//     layoutProps.tableOfContents
//   )

//   return (
//     <SidebarLayout
//       sidebar={
//         <div className="mb-8">
//           <TableOfContents
//             tableOfContents={layoutProps.tableOfContents}
//             currentSection={currentSection}
//           />
//         </div>
//       }
//       {...props}
//     >
//       <ContentsContext.Provider value={{ registerHeading, unregisterHeading }}>
//         {children}
//       </ContentsContext.Provider>
//     </SidebarLayout>
//   )
// }

// export function ContentsLayout({ children, meta, classes, tableOfContents, section }) {
//   // const router = useRouter()
//   const toc = [
//     ...(classes ? [{ title: 'Quick reference', slug: 'class-reference', children: [] }] : []),
//     ...tableOfContents,
//   ]

//   const { currentSection, registerHeading, unregisterHeading } = useTableOfContents(toc)

//   return (
//   )
// }
