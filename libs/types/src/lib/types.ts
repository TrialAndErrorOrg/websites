import type {
  CollectionTypeSchema,
  GetAttributesValues,
  GetAttributeValue,
  SingleTypeSchema,
} from '@strapi/strapi'
import type {
  ApiBlogPostBlogPost,
  ApiBlogAuthorBlogAuthor,
  ApiBlogHomeBlogHome,
  PluginMenusMenu,
  PluginMenusMenuItem,
} from 'libs/types/src'

export type GetReturnType<T extends CollectionTypeSchema | SingleTypeSchema> = {
  [key in keyof T['attributes']]-?: GetAttributeValue<T['attributes'][key]>
}

export type BlogPost = Omit<GetAttributesValues<'api::blog-post.blog-post'>, 'image'> & {
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
  }
}

export type BlogAuthor = GetReturnType<ApiBlogAuthorBlogAuthor>
export type BlogHome = GetReturnType<ApiBlogHomeBlogHome>
export type BlogTag = GetAttributesValues<'api::tag.tag'>
export type Author =
  | GetAttributesValues<'api::blog-author.blog-author'>
  | GetAttributesValues<'api::team-member.team-member'>
// export type Menu = GetReturnType<PluginMenusMenu>

export type Menu = GetAttributesValues<'plugin::menus.menu'>

// declare global {
//   namespace Strapi {
//     interface Schemas {
//       'admin::permission': AdminPermission
//       'admin::user': AdminUser
//       'admin::role': AdminRole
//       'admin::api-token': AdminApiToken
//       'plugin::upload.file': PluginUploadFile
//       'plugin::upload.folder': PluginUploadFolder
//       'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
//       'plugin::entity-notes.note': PluginEntityNotesNote
//       'plugin::publisher.action': PluginPublisherAction
//       'plugin::menus.menu': PluginMenusMenu
//       'plugin::menus.menu-item': PluginMenusMenuItem
//       'plugin::strapi-newsletter.newsletter': PluginStrapiNewsletterNewsletter
//       'plugin::strapi-newsletter.subscribed-user': PluginStrapiNewsletterSubscribedUser
//       'plugin::i18n.locale': PluginI18NLocale
//       'plugin::users-permissions.permission': PluginUsersPermissionsPermission
//       'plugin::users-permissions.role': PluginUsersPermissionsRole
//       'plugin::users-permissions.user': PluginUsersPermissionsUser
//       'plugin::scheduler.scheduler': PluginSchedulerScheduler
//       'plugin::comments.comment': PluginCommentsComment
//       'plugin::comments.comment-report': PluginCommentsCommentReport
//       'plugin::strapi-stripe.strapi-stripe-product': PluginStrapiStripeStrapiStripeProduct
//       'plugin::strapi-stripe.strapi-stripe-payment': PluginStrapiStripeStrapiStripePayment
//       'api::about-page.about-page': ApiAboutPageAboutPage
//       'api::application.application': ApiApplicationApplication
//       'api::article.article': ApiArticleArticle
//       'api::blog-author.blog-author': ApiBlogAuthorBlogAuthor
//       'api::blog-home.blog-home': ApiBlogHomeBlogHome
//       'api::blog-post.blog-post': ApiBlogPostBlogPost
//       'api::category.category': ApiCategoryCategory
//       'api::department.department': ApiDepartmentDepartment
//       'api::donate-page.donate-page': ApiDonatePageDonatePage
//       'api::editor.editor': ApiEditorEditor
//       'api::global.global': ApiGlobalGlobal
//       'api::homepage.homepage': ApiHomepageHomepage
//       'api::initiative.initiative': ApiInitiativeInitiative
//       'api::jote-article.jote-article': ApiJoteArticleJoteArticle
//       'api::jote-article-category.jote-article-category': ApiJoteArticleCategoryJoteArticleCategory
//       'api::jote-author.jote-author': ApiJoteAuthorJoteAuthor
//       'api::legal-page.legal-page': ApiLegalPageLegalPage
//       'api::open-position.open-position': ApiOpenPositionOpenPosition
//       'api::open-positions-page.open-positions-page': ApiOpenPositionsPageOpenPositionsPage
//       'api::page.page': ApiPagePage
//       'api::position.position': ApiPositionPosition
//       'api::tag.tag': ApiTagTag
//       'api::team-member.team-member': ApiTeamMemberTeamMember
//       'api::team-page.team-page': ApiTeamPageTeamPage
//       'api::update-category.update-category': ApiUpdateCategoryUpdateCategory
//       'api::writer.writer': ApiWriterWriter
//       'choices.author-or-team-member': ChoicesAuthorOrTeamMember
//       'components.cta': ComponentsCta
//       'components.text-block': ComponentsTextBlock
//       'cote.position-or-editor': CotePositionOrEditor
//       'sections.hero': SectionsHero
//       'shared.academic': SharedAcademic
//       'shared.seo': SharedSeo
//       'shared.shared-social': SharedSharedSocial
//     }
//   }
// }

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
  small: Format
  medium: Format
  thumbnail: Format
}

interface Format {
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
