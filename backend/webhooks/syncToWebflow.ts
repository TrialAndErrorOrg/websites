var secret = "your_secret_key";
var repo = "~/path-to-your-repo/";

import http from "http";
import crypto from "crypto";
import { exec } from "child_process";
import Webflow from "./js-webflow-api";
import fetch from "node-fetch";
import { webflowToStrapiId } from "./strapi-webflow-id-conv";
import slugify from "slugify";
import dotenv from "dotenv";
import { handleDefault } from "./handleDefault";
import { handleCreate } from "./handleCreate";
import { handleDelete } from "./handleDelete";
import { handlePublish } from "./handlePublish";
import path from "path";
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

(async () => {
  const webflow = new Webflow({ token });

  const schemasResponse = await webflow.collections({ siteId });
  console.log(schemasResponse);
  const schemas = schemasResponse.reduce<{ [key: string]: any }>(
    (acc, curr) => {
      acc[curr.slug as string] = curr;
      return acc;
    },
    {}
  );
  console.log(schemas);

  http
    .createServer((req: any, res: any) => {
      req.on("data", (chunk: any) => {
        const data = JSON.parse(chunk.toString());
        const { model: collectionName, entry } = data;
        console.log(data);

        const collectionIds = JSON.parse(req.headers.cookie);
        const collectionId = collectionIds[collectionName];

        if (!collectionId) {
          console.error("Whoopsie!");
          res.status(404).send({
            error:
              "There does not seem to be a collection with that name. Update the cookie with the correct list of ids to remedy this.",
          });
          return;
        }
        const { publishedAt } = entry;

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
            handleCreate({
              entry,
              collectionId,
              collectionName,
              publishedAt,
              webflow,
              updateCollectionId,
            });
            return;
          }

          case "entry.delete": {
            console.log("delete!");
            handleDelete({
              entry,
              collectionName,
              publishedAt,
              webflow,
              collectionId,
              updateCollectionId,
            });
            return;
          }

          case "entry.publish": {
            console.log("publish!");
            handlePublish({
              entry,
              collectionName,
              publishedAt,
              webflow,
              collectionId,
              updateCollectionId,
            });
            return;
          }

          case "entry.unpublish": {
            console.log("unpublish!");
            handlePublish({
              entry,
              collectionName,
              collectionId,
              publishedAt,
              webflow,
              updateCollectionId,
              unpublish: true,
            });
            return;
          }

          default:
            console.log("bummer");
            handleDefault({
              entry,
              collectionName,
              publishedAt,
              webflow,
              collectionId,
              updateCollectionId,
            });
        }
      });

      res.end();
    })
    .listen(8081);
})();
