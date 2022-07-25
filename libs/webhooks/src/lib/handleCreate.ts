import { HandleProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";
import { createUpdate } from "./createUpdate";
import { translateStrapiToWebflow } from "./translateStrapiToWebflow";

export async function handleCreate({
  entry,
  collectionName,
  updateCollectionId,
  publishedAt: pubd,
  webflow,
  collectionId,
  webflowStrapiInterfaces,
  strapiTypesWhichShouldBecomeWeblowCollections,
}: HandleProps) {
  const {
    title,
    id,
    createdAt,
    updatedAt,
    publishedAt,
    jote_authors,
    image,
    jote_article_category,
    webflowId,
    updateId,
    ...rest
  } = entry;

  try {
    let webId = "";
    if (strapiTypesWhichShouldBecomeWeblowCollections[collectionName]) {
      const itemEntry = translateStrapiToWebflow({
        entry,
        interfaceSchema:
          strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
      });

      const item = await webflow.createItem({
        collectionId: collectionId,
        fields: {
          _archived: false,
          _draft: true,
          ...itemEntry,
        },
      });

      const { _id } = item;
      const update = await addIdToStrapi({
        collectionName,
        id: id as unknown as string,
        webflowId: _id as string,
      });

      const {
        data: { webflowId },
      } = update;

      webId = webflowId;
    }

    if (!webflowStrapiInterfaces[collectionName]) return;

    await createUpdate({
      entry,
      collectionName,
      collectionId,
      updateCollectionId,
      publishedAt: pubd,
      webflow,
      sourceId: webId,
      webflowStrapiInterfaces,
      strapiTypesWhichShouldBecomeWeblowCollections,
    });
  } catch (e) {
    console.error(e);
  }

  // In order to make the rest of the process easier,
  // we change the id of the article to the one used in webflow
}
