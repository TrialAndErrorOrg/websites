import slugify from "slugify";
import { Entry, Update, WebflowItem } from ".";
import { ContentUpdateInterfaceInterface } from "../src/types";
import { ContentAnyInterface } from "../src/types/content-interface";

export function translateStrapiToWebflow({
  entry,
  interfaceSchema,
}: {
  entry: Entry;
  interfaceSchema: Omit<ContentAnyInterface, "type" | "id">;
}): WebflowItem {
  const { extraMaps, update_category, ...map } = interfaceSchema;

  const itemWithoutSlug: Exclude<WebflowItem, "slug"> = Object.entries(
    map
  ).reduce(
    (acc, [webflowItemKey, strapiItemKey]: [string, string | string[]]) => {
      // if we haven't defined a conversion key, don't do anything

      if (
        (!Array.isArray(strapiItemKey) && typeof strapiItemKey !== "string") ||
        strapiItemKey.length === 0
      )
        return acc;

      // you can define an array of keys instead of a string, so having a key map is cool
      if (Array.isArray(strapiItemKey)) {
        acc[webflowItemKey] = strapiItemKey
          .map((key: string) => entry[key] || key)
          .join("");
        return acc;
      }

      // you can even get a lil more custom with it
      const extraMap = extraMaps?.[webflowItemKey];

      const fieldValue = entry[strapiItemKey];
      if (Array.isArray(fieldValue)) {
        // The value is a reference to another field.
        // Webflow stores these guys as arrays of ids,
        // so we just need to get those from the object,
        // as strapi returns these as the object we're referencing

        acc[webflowItemKey] = fieldValue.reduce((acc, curr) => {
          if (!curr.webflowId) return acc;
          return [...acc, curr.webflowId];
        }, []);
        return acc;
      }

      // need to check whether it's an object/single ref
      // since it's not an array, we just need to check if it's an object and not null
      if (typeof fieldValue === "object" && fieldValue !== null) {
        acc[webflowItemKey] = fieldValue.webflowId;
      }

      if (!extraMap) {
        acc[webflowItemKey] = entry[strapiItemKey] as unknown as string;
        return acc;
      }

      const newValue = (entry[strapiItemKey] as string).replace(
        extraMap[0],
        extraMap[1]
      );

      acc[webflowItemKey] = newValue;
      return acc;
    },
    {} as WebflowItem
  );

  console.log(itemWithoutSlug.name);
  const item = {
    ...itemWithoutSlug,
    ...(update_category
      ? { category: update_category?.data?.attributes?.webflowId }
      : {}),
    slug: slugify(itemWithoutSlug.name, {
      remove: /[^a-zA-Z0-9\-]/g,
      lower: true,
    }),
  };
  console.log(item);

  return item;
}
