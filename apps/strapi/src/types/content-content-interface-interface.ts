import { ContentContentInterface } from "./content-content-interface";

export interface ContentContentInterfaceInterface {
  [key: string]: Omit<ContentContentInterface, "id" | "type" | "map">;
}
