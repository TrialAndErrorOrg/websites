import { ICategory } from "./category";
import { IWriter } from "./writer";

/**
 * Model definition for article
 */
export interface IArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  category?: ICategory;
  image?: Blob;
  author?: IWriter;
}
