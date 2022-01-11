import { IArticle } from './article'

/**
 * Model definition for category
 */
export interface ICategory {
  id: string
  name: string
  slug: string
  articles?: Article[]
}
