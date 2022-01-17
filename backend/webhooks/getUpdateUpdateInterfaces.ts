import { StrapiGETResponse } from ".";
import {
  ContentUpdateInterface,
  ContentUpdateInterfaceInterface,
} from "../src/types";
import tryCatch from "./utils/try-catch";

export async function getContentUpdateInterfaces() {
  const [contentUpdateInterfaceInterfacesRes, CUIIError]: [any, any] =
    await tryCatch(
      fetch(
        `http://localhost:1337/api/${process.env.STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
    );

  const contentUpdateInterfaceInterfacesRaw: StrapiGETResponse<ContentUpdateInterface> =
    await contentUpdateInterfaceInterfacesRes.json();

  const contentUpdateInterfaceInterfaces =
    contentUpdateInterfaceInterfacesRaw.data.reduce<ContentUpdateInterfaceInterface>(
      (acc, curr) => {
        const { type, ...rest } = curr.attributes;
        acc[type] = rest;
        return acc;
      },
      {}
    );

  return contentUpdateInterfaceInterfaces;
}
