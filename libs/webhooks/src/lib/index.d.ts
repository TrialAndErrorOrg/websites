import { ContentUpdateInterfaceInterface } from "../src/types";
import Webflow from "webflow-api";
import { ContentContentInterfaceInterface } from "../src/types/content-content-interface-interface";

export interface Event {
  event: string;
  createdAt: string;
  model: string;
  entry: Entry;
}
export interface Entry {
  id: number;
  publishedAt: string | null;
  updatedAt: string;
  createdAt: string;
  [key: string]: string | number | null | { [key: string]: any } | undefined;
}
export interface HandleProps {
  entry: Entry;
  collectionName: string;
  updateCollectionId: string;
  publishedAt: string | undefined;
  webflow: Webflow;
  collectionId: string;
  webflowStrapiInterfaces: ContentUpdateInterfaceInterface;
  strapiTypesWhichShouldBecomeWeblowCollections: ContentContentInterfaceInterface;
}
export interface UpdateProps extends HandleProps {
  sourceId: string;
}

export interface HandlePublishProps extends HandleProps {
  unpublish?: boolean;
}

export interface WebflowItem {
  name: string;
  slug: string;
  [key: string]: any;
}

export interface Update extends WebflowItem {
  // type: string;
  image?: string;
  body: string;
  url: string;
  category: { [key: string]: any };
}

export type StrapiGETItem<Type> = {
  id: number;
  attributes: Omit<Type, "id">;
  meta: any;
};

export type StrapiGETResponse<Type> = {
  data: StrapiGETItem<Type>[];
  meta: any;
};
