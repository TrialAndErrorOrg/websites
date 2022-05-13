"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUnpublish = void 0;
function handleUnpublish({ entry, collectionName, updateCollectionId, publishedAt, webflow, collectionId, }) {
    if (!entry.webflowId)
        return;
    console.log(collectionId);
    const item = webflow.patchItem({
        collectionId: collectionId,
        itemId: entry.webflowId,
        fields: { _draft: true },
    });
    item.then((i) => console.log(i)).catch((e) => console.error(e));
}
exports.handleUnpublish = handleUnpublish;
