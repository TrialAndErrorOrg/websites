/**
 * Model definition for Content-Update Interface
 */
export interface IContentUpdateInterface {
  id: string;
  type: string;
  name: string;
  body: string;
  image?: string;
  url: string;
  slug?: string;
  extraMaps?: { [key: string]: [string, string] };
}

export interface InterfaceInterface {
  [type: string]: Omit<IContentUpdateInterface, "type" | "id">;
}
