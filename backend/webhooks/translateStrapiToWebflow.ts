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
  const { extraMaps, ...map } = interfaceSchema;

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

  const item = {
    ...itemWithoutSlug,
    slug: slugify(itemWithoutSlug.name),
  };
  console.log(itemWithoutSlug.name);
  console.log(item);

  return item;
}
