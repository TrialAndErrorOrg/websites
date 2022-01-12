import slugify from "slugify";
import { HandleProps } from ".";
import { translateItemToUpdate } from "./translateItemToUpdate";

export async function handleUpdate({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
  webflowStrapiInterfaces,
  strapiTypesWhichShouldBecomeWeblowCollections,
}: HandleProps) {
  const {
    title,
    id,
    createdAt,
    updatedAt,
    jote_authors,
    image,
    jote_article_category,
    webflowId,
    updateId,
    publishedAt: pubd,
    ...rest
  } = entry;
  const needsLive = !!publishedAt;

  const changedEntry = await webflow.patchItem(
    {
      collectionId: collectionId,
      itemId: entry.webflowId as string,
      fields: {
        name: title as string,
        slug: slugify(title as string),
        _archived: false,
        ...rest,
      },
    },
    { live: needsLive }
  );

  const changedUpdate = await webflow.patchItem(
    {
      collectionId: process.env.UPDATE_COLLECTION_ID,
      itemId: entry.updateId as string,
      fields: {
        name: title as string,
        slug: slugify(title as string),
        ...translateItemToUpdate(rest),
      },
    },
    { live: needsLive }
  );
}
