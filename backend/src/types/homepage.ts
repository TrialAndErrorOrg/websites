import { IHero } from './sections/hero'
import { ISeo } from './shared/seo'

/**
 * Model definition for homepage
 */
export interface IHomepage {
  id: string
  seo?: ISeo
  hero: IHero
}
