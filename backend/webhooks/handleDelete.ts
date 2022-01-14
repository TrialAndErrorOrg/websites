import { HandleProps } from ".";
import tryCatch from "./utils/try-catch";

export async function handleDelete({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
  webflowStrapiInterfaces,
  strapiTypesWhichShouldBecomeWeblowCollections,
}: HandleProps) {
  const { webflowId, updateId } = entry;

  if (webflowId) {
    const removedItem = await tryCatch(
      webflow.removeItem({
        collectionId,
        itemId: webflowId as string,
      }),
      (e) =>
        console.log(
          `Successfully removed ${collectionName} ${entry.title}: ${webflowId}`
        )
    );
  }

  if (updateId) {
    const removedUpdate = await tryCatch(
      webflow.removeItem({
        collectionId: process.env.UPDATE_COLLECTION_ID as string,
        itemId: updateId as string,
      }),
      (e) =>
        console.log(`Successfully removed update ${entry.title}: ${updateId}`)
    );
  }
}
