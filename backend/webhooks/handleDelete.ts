import { HandleProps } from ".";

export async function handleDelete({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
}: HandleProps) {
  const removed = webflow.removeItem({
    collectionId,
    itemId: "582bbba8dae4fb7a75bd30e8",
  });
}
