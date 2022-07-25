import { HandleProps } from ".";

export function handleUnpublish({
  entry,
  collectionName,
  updateCollectionId,
  publishedAt,
  webflow,
  collectionId,
}: HandleProps) {
  if (!entry.webflowId) return;
  console.log(collectionId);
  const item = webflow.patchItem({
    collectionId: collectionId,
    itemId: entry.webflowId as string,
    fields: { _draft: true },
  });

  item.then((i: any) => console.log(i)).catch((e: any) => console.error(e));
}
