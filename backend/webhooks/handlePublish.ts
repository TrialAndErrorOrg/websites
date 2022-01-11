import slugify from "slugify";
import { HandlePublishProps } from ".";

export async function handlePublish({
  entry,
  collectionName,
  updateCollectionId,
  publishedAt,
  webflow,
  collectionId,
  unpublish,
}: HandlePublishProps) {
  if (!entry.webflowId) return;
  //console.log(collectionId);
  // webflow.domains({ siteId: siteId }).then((r) => console.log(r));
  // return;

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

  const isDraft = !publishedAt;
  const isPublished = !isDraft;
  const shouldBecomeDraft = !isDraft && unpublish;
  const canBeUnpublished = isPublished;
  const needsLive = isPublished && !unpublish;
  const needsSitePublished = !isPublished && !unpublish;

  try {
    const changedEntry = await webflow.updateItem(
      {
        collectionId: collectionId,
        itemId: entry.webflowId as string,
        fields: {
          name: title as string,
          slug: slugify(title as string),
          _archived: false,
          _draft: shouldBecomeDraft,
          ...rest,
        },
      },
      { live: needsLive }
    );

    const changedUpdate = await webflow.updateItem(
      {
        collectionId: process.env.UPDATE_COLLECTION_ID,
        itemId: entry.updateId as string,
        fields: {
          name: title as string,
          slug: slugify(title as string),
          _archived: false,
          _draft: shouldBecomeDraft,
          ...rest,
        },
      },
      { live: needsLive }
    );

    console.log(changedEntry);
    console.log(changedUpdate);

    if (needsSitePublished) {
      try {
        await webflow.publishSite({
          siteId: process.env.SITE_ID,
          domains: [process.env.SITE_DOMAIN],
        });
      } catch (e) {
        console.error(e);
      }
      return;
    }

    return changedEntry;
  } catch (e: any) {
    console.error(e);
  }
}
