"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = void 0;
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function handleDelete({ entry, collectionName, collectionId, updateCollectionId, publishedAt, webflow, webflowStrapiInterfaces, strapiTypesWhichShouldBecomeWeblowCollections, }) {
    const { webflowId, updateId } = entry;
    if (webflowId) {
        const removedItem = await (0, try_catch_1.default)(webflow.removeItem({
            collectionId,
            itemId: webflowId,
        }), (e) => console.log(`Successfully removed ${collectionName} ${entry.title}: ${webflowId}`));
    }
    if (updateId) {
        const removedUpdate = await (0, try_catch_1.default)(webflow.removeItem({
            collectionId: process.env.UPDATE_COLLECTION_ID,
            itemId: updateId,
        }), (e) => console.log(`Successfully removed update ${entry.title}: ${updateId}`));
    }
}
exports.handleDelete = handleDelete;
