import { ContentAnyInterface } from "./content-interface";

/**
 * Model definition for Website type
 */
export interface ContentContentInterface extends ContentAnyInterface {
  webflowCollectionId: string;
  needsUpdate?: boolean;
  map: { [key: string]: string | string[] };
}
