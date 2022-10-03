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

export type BlogPost = GetAttributesValues<'api::blog-post.blog-post'>
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
