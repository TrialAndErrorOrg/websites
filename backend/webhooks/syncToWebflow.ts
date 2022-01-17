var secret = "your_secret_key";
var repo = "~/path-to-your-repo/";

import http, { IncomingMessage } from "http";
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
  ContentUpdateInterface,
  ContentUpdateInterfaceInterface,
  ContentContentInterface,
  ContentContentInterfaceInterface,
} from "../src/types";
import { HandleProps, StrapiGETResponse } from ".";
import { handleUpdate } from "./handleUpdate";
import { getContentContentInterfaces } from "./getContentContentInterfaces";
import { getContentUpdateInterfaces } from "./getUpdateUpdateInterfaces";
import { ServerResponse } from "http";

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

  const webflowSchemas: { [key: string]: any } = schemasResponse.reduce(
    (acc: { [key: string]: any }, curr: any) => {
      acc[curr.slug as string] = curr;
      return acc;
    },
    {}
  );
  console.log(webflowSchemas);
  const [auths, er] = await tryCatch(
    webflow.collection({ collectionId: "61b9ba103e800ee270a3bd15" })
  );
  console.log(auths);
  const [post, ear] = await tryCatch(
    webflow.collection({ collectionId: "61b9ba103e800e11eba3bd13" })
  );
  console.log(post);

  // FIXME:
  // very bad way of making sure that the api does not start before the server does
  await timer(5000);

  let [contentContentInterfaceInterfaces, CCIIError] = await tryCatch(
    getContentContentInterfaces()
  );
  let [contentUpdateInterfaceInterfaces, CUIIError] = await tryCatch(
    getContentUpdateInterfaces()
  );

  http
    .createServer((req: IncomingMessage, res: ServerResponse) => {
      let body: Buffer[] = [];
      req
        .on("data", (chunk: Buffer) => {
          body.push(chunk);
        })
        .on("end", async () => {
          const [data, error] = await tryCatch(
            JSON.parse(Buffer.concat(body).toString())
          );
          if (error) {
            res.statusCode = 500;
            res.statusMessage = "Could not parse data from Webhook";
            res.write({ error: error });
            return;
          }

          console.log(data);

          const { model: collectionName, entry } = data;

          // TODO: Do this not dumbly
          if (collectionName === "content-content-interface") {
            [contentContentInterfaceInterfaces, CCIIError] = await tryCatch(
              getContentContentInterfaces()
            );
            res.statusCode = 200;
            return;
          } else if (collectionName === "content-update-interface") {
            [contentUpdateInterfaceInterfaces, CCIIError] = await tryCatch(
              getContentUpdateInterfaces()
            );
            res.statusCode = 200;
            return;
          }

          console.log(data);

          // const collectionIds = JSON.parse(req.headers.cookie);
          // const collectionId = collectionIds[collectionName];

          if (
            !contentContentInterfaceInterfaces[collectionName] &&
            !contentUpdateInterfaceInterfaces[collectionName]
          ) {
            res.statusCode = 200;
            res.statusMessage = "No update needed.";
            return;
          }

          const collectionId =
            contentContentInterfaceInterfaces?.[collectionName]
              ?.webflowCollectionId;

          // if (!collectionId) {
          //   console.error("Whoopsie!");
          //   res.status(404).send({
          //     error:
          //       "There does not seem to be a collection with that name. Update the cookie with the correct list of ids to remedy this.",
          //   });
          //   return;
          // }
          const { publishedAt, updatedAt, createdAt } = entry;

          const hookHandleData: HandleProps = {
            entry,
            collectionId,
            collectionName,
            publishedAt,
            webflow,
            updateCollectionId,
            webflowStrapiInterfaces: contentUpdateInterfaceInterfaces,
            strapiTypesWhichShouldBecomeWeblowCollections:
              contentContentInterfaceInterfaces,
          };

          switch (req.headers["x-strapi-event"]) {
            case "entry.update": {
              console.log("update!");

              if (!publishedAt) {
                console.log(
                  "did not do any updating because the item is not published"
                );
                return;
              }
              const updatedAtValue = new Date(publishedAt).valueOf();
              if (
                Math.abs(updatedAtValue - new Date(updatedAt).valueOf()) < 500
              ) {
                console.log("double dipping publihs update");
                return;
              }

              if (
                Math.abs(updatedAtValue - new Date(createdAt).valueOf()) < 500
              ) {
                console.log("Double dipping creation update.");
                return;
              }
              await handleUpdate(hookHandleData);
              return;
            }

            case "entry.create": {
              console.log("create!");
              await handleCreate(hookHandleData);
              return;
            }

            case "entry.delete": {
              console.log("delete!");
              await handleDelete(hookHandleData);
              return;
            }

            case "entry.publish": {
              console.log("publish!");
              await handlePublish(hookHandleData);
              return;
            }

            case "entry.unpublish": {
              console.log("unpublish!");
              await handlePublish({ ...hookHandleData, unpublish: true });
              return;
            }

            default:
              console.log("bummer");
              await handleDefault(hookHandleData);
          }
        });

      res.end();
    })
    .listen(8081);
})();
