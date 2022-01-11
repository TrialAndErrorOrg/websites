import { IJOTEArticleCategory } from './jote-article-category'

/**
 * Model definition for Editor
 */
export interface IEditor {
  id: string
  Title: string
  email?: string
  jote_article_categories?: JoteArticleCategory[]
}
