import type {
  CollectionTypeSchema,
  Attribute,
  GetAttributeValue,
  SingleTypeSchema,
} from '@strapi/strapi'
import type { ApiBlogAuthorBlogAuthor, ApiBlogHomeBlogHome } from 'libs/types/src'

export type GetReturnType<T extends CollectionTypeSchema | SingleTypeSchema> = {
  [key in keyof T['attributes']]-?: GetAttributeValue<T['attributes'][key]>
}

export type BlogPost = Attribute.GetValues<'api::blog-post.blog-post'>
export type BlogAuthor = GetReturnType<ApiBlogAuthorBlogAuthor>
export type BlogHome = GetReturnType<ApiBlogHomeBlogHome>
export type BlogTag = Attribute.GetValues<'api::tag.tag'>
export type OpenPosition = Attribute.GetValues<'api::open-position.open-position'> & { id: string }
export type OpenPositionsPage = Attribute.GetValues<'api::open-positions-page.open-positions-page'>
export type Author =
  | Attribute.GetValues<'api::blog-author.blog-author'>
  | Attribute.GetValues<'api::team-member.team-member'>

export type Menu = Attribute.GetValues<'plugin::menus.menu'>

export type Application = Attribute.GetValues<'api::application.application'> & { id: string }
