"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCreate = void 0;
const addIdToStrapi_1 = require("./addIdToStrapi");
const createUpdate_1 = require("./createUpdate");
const translateStrapiToWebflow_1 = require("./translateStrapiToWebflow");
async function handleCreate({ entry, collectionName, updateCollectionId, publishedAt: pubd, webflow, collectionId, webflowStrapiInterfaces, strapiTypesWhichShouldBecomeWeblowCollections, }) {
    const { title, id, createdAt, updatedAt, publishedAt, jote_authors, image, jote_article_category, webflowId, updateId, ...rest } = entry;
    try {
        let webId = "";
        if (strapiTypesWhichShouldBecomeWeblowCollections[collectionName]) {
            const itemEntry = (0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
                entry,
                interfaceSchema: strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
            });
            const item = await webflow.createItem({
                collectionId: collectionId,
                fields: {
                    _archived: false,
                    _draft: true,
                    ...itemEntry,
                },
            });
            const { _id } = item;
            const update = await (0, addIdToStrapi_1.addIdToStrapi)({
                collectionName,
                id: id,
                webflowId: _id,
            });
            const { data: { webflowId }, } = update;
            webId = webflowId;
        }
        if (!webflowStrapiInterfaces[collectionName])
            return;
        await (0, createUpdate_1.createUpdate)({
            entry,
            collectionName,
            collectionId,
            updateCollectionId,
            publishedAt: pubd,
            webflow,
            sourceId: webId,
            webflowStrapiInterfaces,
            strapiTypesWhichShouldBecomeWeblowCollections,
        });
    }
    catch (e) {
        console.error(e);
    }
    // In order to make the rest of the process easier,
    // we change the id of the article to the one used in webflow
}
exports.handleCreate = handleCreate;
