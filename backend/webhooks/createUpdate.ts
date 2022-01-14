import { Update, UpdateProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";
import { translateStrapiToWebflow } from "./translateStrapiToWebflow";

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
  const updateEntry = translateStrapiToWebflow({
    entry,
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

    // it's useful to keep track of which item belongs to which
    // webflow item, so we can update it later
    // FIXME: this triggers another update cycle, not ideal
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
