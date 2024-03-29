import type { Attribute, Schema } from '@strapi/strapi'
import type {
  ApiBlogPostBlogPost,
  ApiBlogAuthorBlogAuthor,
  ApiBlogHomeBlogHome,
  PluginMenusMenu,
  PluginMenusMenuItem,
} from './generated/contentTypes'

export type GetReturnType<T extends Schema.CollectionType | Schema.SingleType> = {
  // @ts-expect-error TODO: fix this
  [key in keyof T['attributes']]-?: Attribute.GetValues<T['attributes'][key]>
}

export type BlogPost = Omit<
  Attribute.GetValues<'api::blog-post.blog-post'>,
  'image' | 'related'
> & {
  image: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: any
    provider: string
    provider_metadata?: any
    createdAt: string
    updatedAt: string
    alt?: string
    blurhash?: string
  }
} & { id: number; related?: BlogPost[] }

export type BlogAuthor = GetReturnType<ApiBlogAuthorBlogAuthor>
export type BlogHome = GetReturnType<ApiBlogHomeBlogHome>
export type BlogTag = Attribute.GetValues<'api::tag.tag'>
export type Author =
  | Attribute.GetValues<'api::blog-author.blog-author'>
  | Attribute.GetValues<'api::team-member.team-member'>
// export type Menu = GetReturnType<PluginMenusMenu>
export type Page = Attribute.GetValues<'api::page.page'>

export interface MenuItem
  extends Omit<Attribute.GetValues<'plugin::menus.menu-item'>, 'root_menu' | 'rootMenu'> {
  children?: MenuItem[]
}

// TODO: fix this type if the plugin works
// the menu items don't have a children field defined
export interface Menu extends Omit<Attribute.GetValues<'plugin::menus.menu'>, 'items'> {
  items?: MenuItem[]
}

export interface OpenPosition extends Attribute.GetValues<'api::open-position.open-position'> {}
export interface Application extends Attribute.GetValues<'api::application.application'> {}

export interface MeiliSearchBlogPostResult {
  id: string
  title: string
  excerpt: string
  publishDate: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  sitemap_exclude: boolean
  slug: string
  body: string
  image: Image
  blog_authors: Blogauthor[]
  blog_tags: Blogtag[]
  seo: Seo
  related: any[]
  team_members: Teammember[]
  academic?: any
  category: Category
  _highlightResult: HighlightResult
  _snippetResult: HighlightResult
}

interface HighlightResult {
  id: Id
  title: Id
  excerpt: Id
  publishDate: Id
  createdAt: Id
  updatedAt: Id
  publishedAt: Id
  sitemap_exclude: Id
  slug: Id
  body: Id
  image: Image2
  blog_authors: Blogauthor2[]
  blog_tags: Blogtag2[]
  seo: Seo2
  related: any[]
  team_members: Teammember2[]
  academic: Id
  category: Category2
}

interface Category2 {
  id: Id
  slug: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  locale: Id
  title: Id
}

interface Teammember2 {
  id: Id
  firstName: Id
  lastName: Id
  email: Id
  bio: Id
  show_pronouns: Id
  pronouns: Id
  createdAt: Id
  updatedAt: Id
  azureID: Id
  twitter: Id
  github: Id
  orcid: Id
  personalWebsite: Id
  position: Id
  department: Id
  sitemap_exclude: Id
  slug: Id
  linkedin: Id
}

interface Seo2 {
  id: Id
  metaTitle: Id
  metaDescription: Id
  keywords: Id
  metaRobots: Id
  structuredData: Id
  metaViewport: Id
  canonicalURL: Id
}

interface Blogtag2 {
  id: Id
  title: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  slug: Id
}

interface Blogauthor2 {
  id: Id
  firstName: Id
  lastName: Id
  bio: Id
  email: Id
  twitter: Id
  github: Id
  orcid: Id
  createdAt: Id
  updatedAt: Id
  sitemap_exclude: Id
  slug: Id
}

interface Image2 {
  id: Id
  name: Id
  alternativeText: Id
  caption: Id
  width: Id
  height: Id
  formats: Formats2
  hash: Id
  ext: Id
  mime: Id
  size: Id
  url: Id
  previewUrl: Id
  provider: Id
  provider_metadata: Id
  createdAt: Id
  updatedAt: Id
  folderPath: Id
  sitemap_exclude: Id
}

interface Formats2 {
  small: Small2
  thumbnail: Small2
}

interface Small2 {
  ext: Id
  url: Id
  hash: Id
  mime: Id
  name: Id
  path: Id
  size: Id
  width: Id
  height: Id
}

interface Id {
  value: string
}

interface Category {
  id: number
  slug: string
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  locale: string
  title: string
}

interface Teammember {
  id: number
  firstName: string
  lastName: string
  email: string
  bio: string
  show_pronouns: boolean
  pronouns: string
  createdAt: string
  updatedAt: string
  azureID: string
  twitter?: any
  github?: any
  orcid?: any
  personalWebsite?: any
  position: string
  department: string
  sitemap_exclude?: any
  slug: string
  linkedin?: any
}

interface Seo {
  id: number
  metaTitle: string
  metaDescription: string
  keywords?: any
  metaRobots?: any
  structuredData?: any
  metaViewport?: any
  canonicalURL?: any
}

interface Blogtag {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  slug: string
}

interface Blogauthor {
  id: number
  firstName: string
  lastName: string
  bio: string
  email?: any
  twitter?: any
  github?: any
  orcid?: any
  createdAt: string
  updatedAt: string
  sitemap_exclude: boolean
  slug: string
}

interface Image {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
  folderPath: string
  sitemap_exclude: boolean
}

interface Formats {
  small: Small
  medium?: Small
  large?: Small
  thumbnail: Small
}

interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: any
  size: number
  width: number
  height: number
}

export type EasyMenu = Omit<Menu, 'items' | 'id'> & { items: Omit<Menu['items'], 'id'>[] }
