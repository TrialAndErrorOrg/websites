import type {
  CollectionTypeSchema,
  GetAttributesValues,
  GetAttributeValue,
  SingleTypeSchema,
} from '@strapi/strapi'
import type { ApiBlogAuthorBlogAuthor, ApiBlogHomeBlogHome } from 'libs/types/src'

export type GetReturnType<T extends CollectionTypeSchema | SingleTypeSchema> = {
  [key in keyof T['attributes']]-?: GetAttributeValue<T['attributes'][key]>
}

export type BlogPost = GetAttributesValues<'api::blog-post.blog-post'>
export type BlogAuthor = GetReturnType<ApiBlogAuthorBlogAuthor>
export type BlogHome = GetReturnType<ApiBlogHomeBlogHome>
export type BlogTag = GetAttributesValues<'api::tag.tag'>
export type OpenPosition = GetAttributesValues<'api::open-position.open-position'> & { id: string }
export type OpenPositionsPage = GetAttributesValues<'api::open-positions-page.open-positions-page'>
export type Author =
  | GetAttributesValues<'api::blog-author.blog-author'>
  | GetAttributesValues<'api::team-member.team-member'>

export type Menu = GetAttributesValues<'plugin::menus.menu'>

export type Application = GetAttributesValues<'api::application.application'> & { id: string }
