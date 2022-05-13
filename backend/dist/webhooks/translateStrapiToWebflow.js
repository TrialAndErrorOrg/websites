"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateStrapiToWebflow = void 0;
const slugify_1 = __importDefault(require("slugify"));
function translateStrapiToWebflow({ entry, interfaceSchema, }) {
    var _a, _b;
    const { extraMaps, update_category, ...map } = interfaceSchema;
    const itemWithoutSlug = Object.entries(map).reduce((acc, [webflowItemKey, strapiItemKey]) => {
        // if we haven't defined a conversion key, don't do anything
        if ((!Array.isArray(strapiItemKey) && typeof strapiItemKey !== "string") ||
            strapiItemKey.length === 0)
            return acc;
        // you can define an array of keys instead of a string, so having a key map is cool
        if (Array.isArray(strapiItemKey)) {
            acc[webflowItemKey] = strapiItemKey
                .map((key) => entry[key] || key)
                .join("");
            return acc;
        }
        // you can even get a lil more custom with it
        const extraMap = extraMaps === null || extraMaps === void 0 ? void 0 : extraMaps[webflowItemKey];
        const fieldValue = entry[strapiItemKey];
        if (Array.isArray(fieldValue)) {
            // The value is a reference to another field.
            // Webflow stores these guys as arrays of ids,
            // so we just need to get those from the object,
            // as strapi returns these as the object we're referencing
            acc[webflowItemKey] = fieldValue.reduce((acc, curr) => {
                if (!curr.webflowId)
                    return acc;
                return [...acc, curr.webflowId];
            }, []);
            return acc;
        }
        // need to check whether it's an object/single ref
        // since it's not an array, we just need to check if it's an object and not null
        if (typeof fieldValue === "object" && fieldValue !== null) {
            acc[webflowItemKey] = fieldValue.webflowId;
        }
        if (!extraMap) {
            acc[webflowItemKey] = entry[strapiItemKey];
            return acc;
        }
        const newValue = entry[strapiItemKey].replace(extraMap[0], extraMap[1]);
        acc[webflowItemKey] = newValue;
        return acc;
    }, {});
    console.log(itemWithoutSlug.name);
    const item = {
        ...itemWithoutSlug,
        ...(update_category
            ? { category: (_b = (_a = update_category === null || update_category === void 0 ? void 0 : update_category.data) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.webflowId }
            : {}),
        slug: (0, slugify_1.default)(itemWithoutSlug.name, {
            remove: /[^a-zA-Z0-9\-]/g,
            lower: true,
        }),
    };
    console.log(item);
    return item;
}
exports.translateStrapiToWebflow = translateStrapiToWebflow;
