var secret = "your_secret_key";
var repo = "~/path-to-your-repo/";

import http from "http";
import Webflow from "webflow-api";
import fetch from "node-fetch";
import { webflowToStrapiId } from "./strapi-webflow-id-conv";
import slugify from "slugify";
import dotenv from "dotenv";
import { handleDefault } from "./handleDefault";
import { handleCreate } from "./handleCreate";
import { handleDelete } from "./handleDelete";
import { handlePublish } from "./handlePublish";
import path from "path";
import tryCatch from "./utils/try-catch";
import {
  IContentUpdateInterface,
  InterfaceInterface,
  IWebsiteType,
} from "../src/types";
import { HandleProps, StrapiGETResponse } from ".";

dotenv.config({ path: path.resolve(process.cwd(), "./webhooks/.env") });

const PM2_CMD = "cd ~ && pm2 startOrRestart ecosystem.config.js";
const updatableEntries = [
  "jote-article",
  "blog-post",
  "podcast-episode",
  "news",
];

const siteId = process.env.SITE_ID as string;
const token = process.env.WEBFLOW_TOKEN as string;
console.log(token);
const updateCollectionId = process.env.UPDATE_COLLECTION_ID as string;
const STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME = process.env
  .STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME as string;
const STRAPI_WEBFLOW_TYPES_COLLECTION_NAME = process.env
  .STRAPI_WEBFLOW_TYPES_COLLECTION_NAME as string;

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

(async () => {
  const webflow = new Webflow({ token });

  const [schemasResponse, schemaError] = await tryCatch(
    webflow.collections({ siteId })
  );
  console.log(schemasResponse);

  const webflowSchemas: { [key: string]: any } = schemasResponse.reduce(
    (acc: { [key: string]: any }, curr: any) => {
      acc[curr.slug as string] = curr;
      return acc;
    },
    {}
  );

  //fixme
  // very bad way of making sure that the api does not start before the server does
  await timer(10000);

  const [webflowStrapiInterfacesRaw, interfaceError]: [
    StrapiGETResponse<IContentUpdateInterface>,
    any
  ] = await tryCatch(
    (
      await tryCatch(
        fetch(
          `http://localhost:1337/api/${STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
      )
    )[0]?.json()
  );

  const [strapiTypesWhichShouldBecomeWeblowCollectionsRaw, collectionError]: [
    StrapiGETResponse<IWebsiteType>,
    any
  ] = await tryCatch(
    (
      await tryCatch(
        fetch(
          `http://localhost:1337/api/${STRAPI_WEBFLOW_TYPES_COLLECTION_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        )
      )
    )[0]?.json()
  );

  const webflowStrapiInterfaces =
    webflowStrapiInterfacesRaw.data.reduce<InterfaceInterface>((acc, curr) => {
      const { type, ...rest } = curr.attributes;
      acc[type] = rest;
      return acc;
    }, {});

  const strapiTypesWhichShouldBecomeWeblowCollections =
    strapiTypesWhichShouldBecomeWeblowCollectionsRaw.data.reduce<string[]>(
      (acc, curr) => {
        acc.push(curr.attributes.type);
        return acc;
      },
      []
    );
  console.log(webflowSchemas);

  http
    .createServer((req: any, res: any) => {
      req.on("data", (chunk: any) => {
        const data = JSON.parse(chunk.toString());
        const { model: collectionName, entry } = data;
        console.log(data);

        // const collectionIds = JSON.parse(req.headers.cookie);
        // const collectionId = collectionIds[collectionName];
        const collectionId = "61db0af3af943c4259747c11";

        if (!collectionId) {
          console.error("Whoopsie!");
          res.status(404).send({
            error:
              "There does not seem to be a collection with that name. Update the cookie with the correct list of ids to remedy this.",
          });
          return;
        }
        const { publishedAt } = entry;

        const hookHandleData: HandleProps = {
          entry,
          collectionId,
          collectionName,
          publishedAt,
          webflow,
          updateCollectionId,
          webflowStrapiInterfaces,
          strapiTypesWhichShouldBecomeWeblowCollections,
        };

        switch (req.headers["x-strapi-event"]) {
          case "entry.update": {
            console.log("update!");

            // handleUpdate({
            //   entry,
            //   collectionName,
            //   collectionId,
            //   publishedAt,
            //   webflow,
            //   updateCollectionId,
            // });
            return;
          }

          case "entry.create": {
            console.log("create!");
            handleCreate(hookHandleData);
            return;
          }

          case "entry.delete": {
            console.log("delete!");
            handleDelete(hookHandleData);
            return;
          }

          case "entry.publish": {
            console.log("publish!");
            handlePublish(hookHandleData);
            return;
          }

          case "entry.unpublish": {
            console.log("unpublish!");
            handlePublish({ ...hookHandleData, unpublish: true });
            return;
          }

          default:
            console.log("bummer");
            handleDefault(hookHandleData);
        }
      });

      res.end();
    })
    .listen(8081);
})();
