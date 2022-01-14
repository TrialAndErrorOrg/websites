import { ContentAnyInterface } from "./content-interface";

/**
 * Model definition for Content-Update Interface
 */
export interface ContentUpdateInterface extends ContentAnyInterface {
  body: string;
  image?: string;
  url?: string;
}
