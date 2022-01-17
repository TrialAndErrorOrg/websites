import { ICategory } from './category'
import { IWriter } from './writer'

/**
 * Model definition for article
 */
export interface IArticle {
  id: string
  title: string
  description: string
  content: string
  slug: string
  category?: Category
  image?: Blob
  author?: Writer
}
