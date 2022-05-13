"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePublish = void 0;
const translateStrapiToWebflow_1 = require("./translateStrapiToWebflow");
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function handlePublish({ entry, collectionName, updateCollectionId, publishedAt, webflow, collectionId, unpublish, webflowStrapiInterfaces, strapiTypesWhichShouldBecomeWeblowCollections, }) {
    if (!entry.webflowId)
        return;
    //console.log(collectionId);
    // webflow.domains({ siteId: siteId }).then((r) => console.log(r));
    // return;
    const { title, id, createdAt, updatedAt, jote_authors, image, jote_article_category, webflowId, updateId, publishedAt: pubd, ...rest } = entry;
    const isDraft = !publishedAt;
    const isPublished = !isDraft;
    const shouldBecomeDraft = !isDraft && unpublish;
    const canBeUnpublished = isPublished;
    const needsLive = isPublished && !unpublish;
    const needsSitePublished = !isPublished && !unpublish;
    const hasWebflowItem = !!webflowId;
    const hasUpdate = !!webflowStrapiInterfaces[collectionName];
    const webflowEntry = (0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
        entry,
        interfaceSchema: strapiTypesWhichShouldBecomeWeblowCollections[collectionName],
    });
    if (hasWebflowItem) {
        const [changedEntry, entryError] = await (0, try_catch_1.default)(webflow.updateItem({
            collectionId: collectionId,
            itemId: entry.webflowId,
            fields: {
                _archived: false,
                _draft: shouldBecomeDraft,
                ...webflowEntry,
            },
        }, { live: needsLive }), async (e) => {
            var _a;
            console.log(e);
            console.log(typeof e);
            console.log(e.code);
            if (e.code === 400 &&
                e.msg === "Validation Failure" &&
                ((_a = e.problems) === null || _a === void 0 ? void 0 : _a[0].contains("Field 'slug'"))) {
                console.log("Ay");
                await (0, try_catch_1.default)(webflow.updateItem({
                    itemId: entry.webflowId,
                    collectionId: updateCollectionId,
                    fields: {
                        //_id: `${collectionName}-${entry.id}`,
                        _archived: false,
                        _draft: shouldBecomeDraft,
                        ...{
                            ...webflowEntry,
                            slug: `${webflowEntry.slug}-${Math.floor(Math.random() * 3000)}`,
                        },
                    },
                }, { live: needsLive }));
            }
        });
        console.log(changedEntry);
    }
    if (hasUpdate) {
        const [changedUpdate, error] = await (0, try_catch_1.default)(webflow.updateItem({
            collectionId: process.env.UPDATE_COLLECTION_ID,
            itemId: entry.updateId,
            fields: {
                // name: title as string,
                // slug: slugify(title as string),
                _archived: false,
                _draft: shouldBecomeDraft,
                ...(0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
                    entry,
                    interfaceSchema: webflowStrapiInterfaces[collectionName],
                }),
            },
        }, { live: needsLive }));
        console.log(changedUpdate);
    }
    if (needsSitePublished) {
        await (0, try_catch_1.default)(webflow.publishSite({
            siteId: process.env.SITE_ID,
            domains: [process.env.SITE_DOMAIN],
        }));
        return;
    }
    return;
}
exports.handlePublish = handlePublish;
