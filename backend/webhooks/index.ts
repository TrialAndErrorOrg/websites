import { InterfaceInterface } from "../src/types";
import Webflow from "./js-webflow-api";

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
  [key: string]: string | number | null | undefined;
}
export interface HandleProps {
  entry: Entry;
  collectionName: string;
  updateCollectionId: string;
  publishedAt: string | undefined;
  webflow: Webflow;
  collectionId: string;
  webflowStrapiInterfaces: InterfaceInterface;
  strapiTypesWhichShouldBecomeWeblowCollections: string[];
}
export interface UpdateProps extends HandleProps {
  sourceId: string;
}

export interface HandlePublishProps extends HandleProps {
  unpublish?: boolean;
}

export interface Update {
  type: string;
  name: string;
  slug: string;
  image: string;
  body: string;
  url: string;
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
