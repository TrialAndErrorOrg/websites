import slugify from "slugify";
import { Update, UpdateProps } from ".";
import { addIdToStrapi } from "./addIdToStrapi";
import { translateStrapiToWebflow } from "./translateStrapiToWebflow";
import tryCatch from "./utils/try-catch";

export async function createUpdate({
  entry,
  collectionName,
  collectionId,
  updateCollectionId,
  publishedAt,
  webflow,
  sourceId,
  webflowStrapiInterfaces,
}: UpdateProps) {
  const updateEntry = translateStrapiToWebflow({
    entry,
    interfaceSchema: webflowStrapiInterfaces[collectionName],
  });

  const [update, updateError] = await tryCatch(
    webflow.createItem({
      collectionId: updateCollectionId,
      fields: {
        //_id: `${collectionName}-${entry.id}`,
        _archived: false,
        _draft: true,
        ...updateEntry,
        source: sourceId,
      },
    }),
    async (e: any) => {
      if (
        e.code === 400 &&
        e.msg === "Validation failure" &&
        e.problems?.[0].contains("Field 'slug'")
      ) {
        await tryCatch(
          webflow.createItem({
            collectionId: updateCollectionId,
            fields: {
              //_id: `${collectionName}-${entry.id}`,
              _archived: false,
              _draft: true,
              ...{
                ...updateEntry,
                slug: `${updateEntry.slug}-${Math.floor(Math.random() * 3000)}`,
              },
              source: sourceId,
            },
          })
        );
      }
    }
  );

  const { _id } = update;

  // it's useful to keep track of which item belongs to which
  // webflow item, so we can update it later
  // FIXME: this triggers another update cycle, not ideal
  const [strapi, strapiError] = await tryCatch(
    addIdToStrapi({
      collectionName: collectionName,
      id: entry.id as unknown as string,
      updateId: _id,
    })
  );
  return strapi;
}
