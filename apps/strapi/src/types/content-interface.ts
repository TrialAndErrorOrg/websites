export interface ContentAnyInterface {
  id: string;
  type: string;
  name: string;
  extraMaps?: { [key: string]: any };
  [key: string]: any;
}
