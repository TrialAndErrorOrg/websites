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
  if (!pubd && !unpublish) {
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

  try {
    const updateItem = await webflow.updateItem(
      {
        collectionId: collectionId,
        itemId: entry.webflowId as string,
        fields: {
          name: title as string,
          slug: slugify(title as string),
          _archived: false,
          _draft: false,
          ...rest,
        },
      },
      { live: !unpublish }
    );

    console.log(updateItem);

    return updateItem;
  } catch (e: any) {
    console.error(e);
  }
}
