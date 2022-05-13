"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var secret = "your_secret_key";
var repo = "~/path-to-your-repo/";
const http_1 = __importDefault(require("http"));
const webflow_api_1 = __importDefault(require("webflow-api"));
const dotenv_1 = __importDefault(require("dotenv"));
const handleDefault_1 = require("./handleDefault");
const handleCreate_1 = require("./handleCreate");
const handleDelete_1 = require("./handleDelete");
const handlePublish_1 = require("./handlePublish");
const path_1 = __importDefault(require("path"));
const try_catch_1 = __importDefault(require("./utils/try-catch"));
const handleUpdate_1 = require("./handleUpdate");
const getContentContentInterfaces_1 = require("./getContentContentInterfaces");
const getUpdateUpdateInterfaces_1 = require("./getUpdateUpdateInterfaces");
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), "./webhooks/.env") });
const PM2_CMD = "cd ~ && pm2 startOrRestart ecosystem.config.js";
const updatableEntries = [
    "jote-article",
    "blog-post",
    "podcast-episode",
    "news",
];
const siteId = process.env.SITE_ID;
const token = process.env.WEBFLOW_TOKEN;
const updateCollectionId = process.env.UPDATE_COLLECTION_ID;
const STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME = process.env
    .STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME;
const STRAPI_WEBFLOW_TYPES_COLLECTION_NAME = process.env
    .STRAPI_WEBFLOW_TYPES_COLLECTION_NAME;
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
(async () => {
    const webflow = new webflow_api_1.default({ token });
    const [schemasResponse, schemaError] = await (0, try_catch_1.default)(webflow.collections({ siteId }));
    const webflowSchemas = schemasResponse.reduce((acc, curr) => {
        acc[curr.slug] = curr;
        return acc;
    }, {});
    console.log(webflowSchemas);
    const [auths, er] = await (0, try_catch_1.default)(webflow.collection({ collectionId: "61b9ba103e800ee270a3bd15" }));
    console.log(auths);
    const [post, ear] = await (0, try_catch_1.default)(webflow.collection({ collectionId: "61b9ba103e800e11eba3bd13" }));
    console.log(post);
    // FIXME:
    // very bad way of making sure that the api does not start before the server does
    await timer(5000);
    let [contentContentInterfaceInterfaces, CCIIError] = await (0, try_catch_1.default)((0, getContentContentInterfaces_1.getContentContentInterfaces)());
    let [contentUpdateInterfaceInterfaces, CUIIError] = await (0, try_catch_1.default)((0, getUpdateUpdateInterfaces_1.getContentUpdateInterfaces)());
    http_1.default
        .createServer((req, res) => {
        let body = [];
        req
            .on("data", (chunk) => {
            body.push(chunk);
        })
            .on("end", async () => {
            var _a;
            const [data, error] = await (0, try_catch_1.default)(JSON.parse(Buffer.concat(body).toString()));
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
                [contentContentInterfaceInterfaces, CCIIError] = await (0, try_catch_1.default)((0, getContentContentInterfaces_1.getContentContentInterfaces)());
                res.statusCode = 200;
                return;
            }
            else if (collectionName === "content-update-interface") {
                [contentUpdateInterfaceInterfaces, CCIIError] = await (0, try_catch_1.default)((0, getUpdateUpdateInterfaces_1.getContentUpdateInterfaces)());
                res.statusCode = 200;
                return;
            }
            console.log(data);
            // const collectionIds = JSON.parse(req.headers.cookie);
            // const collectionId = collectionIds[collectionName];
            if (!contentContentInterfaceInterfaces[collectionName] &&
                !contentUpdateInterfaceInterfaces[collectionName]) {
                res.statusCode = 200;
                res.statusMessage = "No update needed.";
                return;
            }
            const collectionId = (_a = contentContentInterfaceInterfaces === null || contentContentInterfaceInterfaces === void 0 ? void 0 : contentContentInterfaceInterfaces[collectionName]) === null || _a === void 0 ? void 0 : _a.webflowCollectionId;
            // if (!collectionId) {
            //   console.error("Whoopsie!");
            //   res.status(404).send({
            //     error:
            //       "There does not seem to be a collection with that name. Update the cookie with the correct list of ids to remedy this.",
            //   });
            //   return;
            // }
            const { publishedAt, updatedAt, createdAt } = entry;
            const hookHandleData = {
                entry,
                collectionId,
                collectionName,
                publishedAt,
                webflow,
                updateCollectionId,
                webflowStrapiInterfaces: contentUpdateInterfaceInterfaces,
                strapiTypesWhichShouldBecomeWeblowCollections: contentContentInterfaceInterfaces,
            };
            switch (req.headers["x-strapi-event"]) {
                case "entry.update": {
                    console.log("update!");
                    if (!publishedAt) {
                        console.log("did not do any updating because the item is not published");
                        return;
                    }
                    const updatedAtValue = new Date(publishedAt).valueOf();
                    if (Math.abs(updatedAtValue - new Date(updatedAt).valueOf()) < 500) {
                        console.log("double dipping publihs update");
                        return;
                    }
                    if (Math.abs(updatedAtValue - new Date(createdAt).valueOf()) < 500) {
                        console.log("Double dipping creation update.");
                        return;
                    }
                    await (0, handleUpdate_1.handleUpdate)(hookHandleData);
                    return;
                }
                case "entry.create": {
                    console.log("create!");
                    await (0, handleCreate_1.handleCreate)(hookHandleData);
                    return;
                }
                case "entry.delete": {
                    console.log("delete!");
                    await (0, handleDelete_1.handleDelete)(hookHandleData);
                    return;
                }
                case "entry.publish": {
                    console.log("publish!");
                    await (0, handlePublish_1.handlePublish)(hookHandleData);
                    return;
                }
                case "entry.unpublish": {
                    console.log("unpublish!");
                    await (0, handlePublish_1.handlePublish)({ ...hookHandleData, unpublish: true });
                    return;
                }
                default:
                    console.log("bummer");
                    await (0, handleDefault_1.handleDefault)(hookHandleData);
            }
        });
        res.end();
    })
        .listen(8082);
})();
