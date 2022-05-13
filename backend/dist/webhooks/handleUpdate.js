"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpdate = void 0;
const translateStrapiToWebflow_1 = require("./translateStrapiToWebflow");
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function handleUpdate({ entry, collectionName, collectionId, updateCollectionId, publishedAt, webflow, webflowStrapiInterfaces, strapiTypesWhichShouldBecomeWeblowCollections, }) {
    const { title, id, createdAt, updatedAt, jote_authors, image, jote_article_category, webflowId, updateId, publishedAt: pubd, ...rest } = entry;
    const needsLive = !!publishedAt;
    const hasWebflowItem = !!webflowId;
    const hasUpdate = !!webflowStrapiInterfaces[collectionName];
    console.log(hasWebflowItem);
    if (hasWebflowItem) {
        const [changedEntry, entryError] = await (0, try_catch_1.default)(webflow.patchItem({
            collectionId: collectionId,
            itemId: entry.webflowId,
            fields: {
                ...(0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
                    entry,
                    interfaceSchema: strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
                }),
            },
        }, { live: needsLive }));
        console.log(changedEntry);
    }
    if (!hasUpdate)
        return;
    const changedUpdate = await (0, try_catch_1.default)(webflow.patchItem({
        collectionId: process.env.UPDATE_COLLECTION_ID,
        itemId: entry.updateId,
        fields: {
            ...(0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
                entry,
                interfaceSchema: webflowStrapiInterfaces[collectionName],
            }),
        },
    }, { live: needsLive }));
    return;
}
exports.handleUpdate = handleUpdate;
