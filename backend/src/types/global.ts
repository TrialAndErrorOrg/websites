import { ISeo } from './shared/seo'

/**
 * Model definition for global
 */
export interface IGlobal {
  id: string
  siteName: string
  defaultSeo: ISeo
  favicon?: Blob
}
