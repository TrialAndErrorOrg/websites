import { StrapiGETResponse } from ".";
import {
  ContentContentInterface,
  ContentContentInterfaceInterface,
} from "../src/types";
import tryCatch from "./utils/try-catch";

export async function getContentContentInterfaces() {
  const [contentContentInterfaceInterfacesRes, collectionError]: [any, any] =
    await tryCatch(
      fetch(
        `http://localhost:1337/api/${process.env.STRAPI_WEBFLOW_TYPES_COLLECTION_NAME}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
    );

  const contentContentInterfaceInterfacesRaw: StrapiGETResponse<ContentContentInterface> =
    await contentContentInterfaceInterfacesRes.json();

  const contentContentInterfaceInterfaces =
    contentContentInterfaceInterfacesRaw.data.reduce<ContentContentInterfaceInterface>( //yes i'm doing fine everything's fine
      (acc, curr) => {
        const { type, map, ...rest } = curr.attributes;
        acc[type] = { ...map, ...rest };
        return acc;
      },
      {}
    );
  return contentContentInterfaceInterfaces;
}
