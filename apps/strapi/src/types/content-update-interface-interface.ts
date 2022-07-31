import { ContentUpdateInterface } from ".";

export interface ContentUpdateInterfaceInterface {
  [type: string]: Omit<ContentUpdateInterface, "type" | "id">;
}
