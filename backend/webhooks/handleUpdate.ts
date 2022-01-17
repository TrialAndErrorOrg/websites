import slugify from "slugify";
import { HandleProps } from ".";
import { translateStrapiToWebflow } from "./translateStrapiToWebflow";
import tryCatch from "./utils/try-catch";

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

  const hasWebflowItem = !!webflowId;
  const hasUpdate = !!webflowStrapiInterfaces[collectionName];

  console.log(hasWebflowItem);
  if (hasWebflowItem) {
    const [changedEntry, entryError] = await tryCatch(
      webflow.patchItem(
        {
          collectionId: collectionId,
          itemId: entry.webflowId as string,
          fields: {
            ...translateStrapiToWebflow({
              entry,
              interfaceSchema:
                strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
            }),
          },
        },
        { live: needsLive }
      )
    );
    console.log(changedEntry);
  }

  if (!hasUpdate) return;
  const changedUpdate = await tryCatch(
    webflow.patchItem(
      {
        collectionId: process.env.UPDATE_COLLECTION_ID as string,
        itemId: entry.updateId as string,
        fields: {
          ...translateStrapiToWebflow({
            entry,
            interfaceSchema: webflowStrapiInterfaces[collectionName],
          }),
        },
      },
      { live: needsLive }
    )
  );
  return;
}
