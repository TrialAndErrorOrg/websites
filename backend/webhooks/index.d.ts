export interface Event {
  event: string;
  createdAt: string;
  model: string;
  entry: Entry;
}
export interface Entry {
  [key: string]: string | number | null | undefined;
}
export interface HandleProps {
  entry: Entry;
  collectionName: string;
  updateCollectionId: string;
  publishedAt: string | undefined;
  webflow: Webflow;
  collectionId: string;
}
export interface UpdateProps extends HandleProps {
  sourceId: string;
}

export interface HandlePublishProps extends HandleProps {
  unpublish?: boolean;
}

export interface Update {
  name: string;
  slug: string;
  "cover-image": string;
  "update-text": string;
  summary: string;
  url: string;
  source: string;
}
