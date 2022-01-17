import slugify from "slugify";
import { HandlePublishProps } from ".";
import { translateStrapiToWebflow } from "./translateStrapiToWebflow";
import tryCatch from "./utils/try-catch";

export async function handlePublish({
  entry,
  collectionName,
  updateCollectionId,
  publishedAt,
  webflow,
  collectionId,
  unpublish,
  webflowStrapiInterfaces,
  strapiTypesWhichShouldBecomeWeblowCollections,
}: HandlePublishProps): Promise<void> {
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

  const hasWebflowItem = !!webflowId;
  const hasUpdate = !!webflowStrapiInterfaces[collectionName];

  const webflowEntry = translateStrapiToWebflow({
    entry,
    interfaceSchema:
      strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
  });

  if (hasWebflowItem) {
    const [changedEntry, entryError] = await tryCatch(
      webflow.updateItem(
        {
          collectionId: collectionId,
          itemId: entry.webflowId as string,
          fields: {
            _archived: false,
            _draft: shouldBecomeDraft,
            ...webflowEntry,
          },
        },
        { live: needsLive }
      ),
      async (e: any) => {
        console.log(e);
        console.log(typeof e);
        console.log(e.code);
        if (
          e.code === 400 &&
          e.msg === "Validation Failure" &&
          e.problems?.[0].contains("Field 'slug'")
        ) {
          console.log("Ay");
          await tryCatch(
            webflow.updateItem(
              {
                itemId: entry.webflowId as string,
                collectionId: updateCollectionId,
                fields: {
                  //_id: `${collectionName}-${entry.id}`,
                  _archived: false,
                  _draft: shouldBecomeDraft,
                  ...{
                    ...webflowEntry,
                    slug: `${webflowEntry.slug}-${Math.floor(
                      Math.random() * 3000
                    )}`,
                  },
                },
              },
              { live: needsLive }
            )
          );
        }
      }
    );
    console.log(changedEntry);
  }

  if (hasUpdate) {
    const [changedUpdate, error] = await tryCatch(
      webflow.updateItem(
        {
          collectionId: process.env.UPDATE_COLLECTION_ID as string,
          itemId: entry.updateId as string,
          fields: {
            // name: title as string,
            // slug: slugify(title as string),
            _archived: false,
            _draft: shouldBecomeDraft,
            ...translateStrapiToWebflow({
              entry,
              interfaceSchema: webflowStrapiInterfaces[collectionName],
            }),
          },
        },
        { live: needsLive }
      )
    );
    console.log(changedUpdate);
  }

  if (needsSitePublished) {
    await tryCatch(
      webflow.publishSite({
        siteId: process.env.SITE_ID as string,
        domains: [process.env.SITE_DOMAIN as string],
      })
    );
    return;
  }

  return;
}
