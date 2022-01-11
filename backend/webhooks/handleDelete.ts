import { HandleProps } from ".";

export async function handleDelete({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
}: HandleProps) {
  const { webflowId, updateId } = entry;
  try {
    const removedItem = await webflow.removeItem({
      collectionId,
      itemId: webflowId,
    });
    console.log(
      `Successfully removed ${collectionName} ${entry.title}: ${webflowId}`
    );
  } catch (e) {
    console.log(
      `Did not manage to remove ${collectionName} ${entry.title}: ${webflowId}`
    );
    console.error(e);
  }
  try {
    const removedUpdate = await webflow.removeItem({
      collectionId: process.env.UPDATE_COLLECTION_ID,
      itemId: updateId,
    });

    console.log(`Successfully removed update ${entry.title}: ${updateId}`);
  } catch (e) {
    console.log(`Did not manage to remove update ${entry.title}: ${updateId}`);
    console.error(e);
  }
}
