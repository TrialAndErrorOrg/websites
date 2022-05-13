"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdate = void 0;
const addIdToStrapi_1 = require("./addIdToStrapi");
const translateStrapiToWebflow_1 = require("./translateStrapiToWebflow");
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function createUpdate({ entry, collectionName, collectionId, updateCollectionId, publishedAt, webflow, sourceId, webflowStrapiInterfaces, }) {
    const updateEntry = (0, translateStrapiToWebflow_1.translateStrapiToWebflow)({
        entry,
        interfaceSchema: webflowStrapiInterfaces[collectionName],
    });
    const [update, updateError] = await (0, try_catch_1.default)(webflow.createItem({
        collectionId: updateCollectionId,
        fields: {
            //_id: `${collectionName}-${entry.id}`,
            _archived: false,
            _draft: true,
            ...updateEntry,
            source: sourceId,
        },
    }), async (e) => {
        var _a;
        if (e.code === 400 &&
            e.msg === "Validation failure" &&
            ((_a = e.problems) === null || _a === void 0 ? void 0 : _a[0].contains("Field 'slug'"))) {
            await (0, try_catch_1.default)(webflow.createItem({
                collectionId: updateCollectionId,
                fields: {
                    //_id: `${collectionName}-${entry.id}`,
                    _archived: false,
                    _draft: true,
                    ...{
                        ...updateEntry,
                        slug: `${updateEntry.slug}-${Math.floor(Math.random() * 3000)}`,
                    },
                    source: sourceId,
                },
            }));
        }
    });
    const { _id } = update;
    // it's useful to keep track of which item belongs to which
    // webflow item, so we can update it later
    // FIXME: this triggers another update cycle, not ideal
    const [strapi, strapiError] = await (0, try_catch_1.default)((0, addIdToStrapi_1.addIdToStrapi)({
        collectionName: collectionName,
        id: entry.id,
        updateId: _id,
    }));
    return strapi;
}
exports.createUpdate = createUpdate;
