import { Update, UpdateProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";
import { translateItemToUpdate } from "./translateItemToUpdate";

export async function createUpdate({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
  sourceId,
  webflowStrapiInterfaces,
}: UpdateProps) {
  const updateEntry = translateItemToUpdate({
    entry,
    collectionName,
    interfaceSchema: webflowStrapiInterfaces,
  });

  try {
    const update = await webflow.createItem({
      collectionId: updateCollectionId,
      fields: {
        //_id: `${collectionName}-${entry.id}`,
        _archived: false,
        _draft: true,
        ...updateEntry,
      },
    });

    const { _id } = update;

    const strapi = await addIdToStrapi({
      collectionName: collectionName,
      id: entry.id as unknown as string,
      updateId: _id,
    });
    return strapi;
  } catch (e) {
    console.error(e);
  }
}
