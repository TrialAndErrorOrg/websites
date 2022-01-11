import { Update, UpdateProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";

export async function createUpdate({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
  sourceId,
}: UpdateProps) {
  const updateEntry: Update = {
    name: entry.title as string,
    slug: "ayy",
    "cover-image": entry["cover-image"] as string,
    "update-text": entry["abstract"] as string,
    summary: entry["summary"] as string,
    url: entry["url"] as string,
    source: sourceId,
    //group: collectionId,
  };
  try {
    const update = await webflow.createItem({
      collectionId: updateCollectionId,
      fields: {
        //_id: `${collectionName}-${entry.id}`,
        _archived: false,
        _draft: false,
        ...updateEntry,
      },
    });

    const { _id } = update;

    const strapi = await addIdToStrapi({
      collectionName: collectionName,
      id: entry.id as string,
      updateId: _id,
    });
    return strapi;
  } catch (e) {
    console.error(e);
  }
}
