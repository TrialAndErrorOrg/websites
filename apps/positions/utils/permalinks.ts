import slugify from 'limax'

import { SITE, PATHS } from '../config'

const trim = (str: string, ch?: string) => {
  let start = 0,
    end = str.length
  while (start < end && str[start] === ch) ++start
  while (end > start && str[end - 1] === ch) --end
  return start > 0 || end < str.length ? str.substring(start, end) : str
}

const trimSlash = (s: string) => trim(trim(s, '/'))
const createPath = (...params: string[]) => '/' + params.filter((el) => !!el).join('/')

const basePathname = trimSlash(SITE.basePathname)

export const cleanSlug = (text: string) => slugify(trimSlash(text))

export const BLOG_BASE = cleanSlug(PATHS?.blog?.pathname)
export const POST_BASE = cleanSlug(PATHS?.post?.pathname)
export const POSITION_BASE = cleanSlug(PATHS?.position?.pathname)
export const APPLICATION_BASE = cleanSlug(PATHS?.application?.pathname)

/** */
export const getCanonical = (path = '') => new URL(path, SITE.origin)

/** */
export const getPermalink = (slug = '', type: 'position' | 'application' = 'position') => {
  const _slug = cleanSlug(slug)

  switch (type) {
    case 'application':
      return createPath(basePathname, APPLICATION_BASE, _slug)

    case 'position':
    default:
      return createPath(basePathname, _slug)
  }
}

/** */
export const getBlogPermalink = () => getPermalink(BLOG_BASE)

/** */
export const getHomePermalink = () => {
  const permalink = getPermalink()
  return permalink !== '/' ? permalink + '/' : permalink
}
