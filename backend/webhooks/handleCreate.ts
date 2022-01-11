import { HandleProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";
import { createUpdate } from "./createUpdate";

export async function handleCreate({
  entry,
  collectionName,
  updateCollectionId,
  publishedAt: pubd,
  webflow,
  collectionId,
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
    const item = await webflow.createItem({
      collectionId: collectionId,
      fields: {
        name: title,
        slug: "exciting-post",
        _archived: false,
        _draft: true,
        ...rest,
      },
    });

    const { _id } = item;
    const update = await addIdToStrapi({
      collectionName,
      id: id as string,
      webflowId: _id as string,
    });

    const {
      data: { webflowId: webId },
    } = update;
    await createUpdate({
      entry,
      collectionName,
      collectionId,
      updateCollectionId,
      publishedAt: pubd,
      webflow,
      sourceId: webId,
    });
  } catch (e) {
    console.error(e);
  }

  // In order to make the rest of the process easier,
  // we change the id of the article to the one used in webflow
}
