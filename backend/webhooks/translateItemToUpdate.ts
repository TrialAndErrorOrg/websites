import { Entry, Update } from ".";
import { InterfaceInterface } from "../src/types";

export function translateItemToUpdate({
  entry,
  collectionName,
  interfaceSchema,
}: {
  entry: Entry;
  collectionName: string;
  interfaceSchema: InterfaceInterface;
}): Update {
  const { extraMaps, ...translationSchema } = interfaceSchema[collectionName];

  const update = Object.values(translationSchema).reduce<Update>(
    (acc, [updateKey, value]: [Exclude<keyof Update, "type">, any]) => {
      const entryKey = translationSchema[updateKey];
      if (!updateKey) return acc;

      const extraMap = extraMaps?.[updateKey];

      if (!extraMap || typeof entry[value] !== "string") {
        acc[updateKey] = entry[value] as unknown as string;
        return acc;
      }

      const newValue = (entry[value] as string).replace(
        extraMap[0],
        extraMap[1]
      );

      acc[updateKey] = newValue;
      return acc;
    },
    {} as Update
  );
  return update;
}
