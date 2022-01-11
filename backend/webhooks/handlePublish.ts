import slugify from "slugify";
import { HandlePublishProps } from ".";

export function handlePublish({
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
    webflow
      .publishSite({
        siteId: process.env.SITE_ID,
        domains: [process.env.SITE_DOMAIN],
      })
      .catch((e: any) => console.error(e));
    return;
  }

  webflow
    .updateItem(
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
    )
    .then((i: any) => console.log(i))
    .catch((e: any) => console.error(e));
}
