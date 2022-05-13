"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentContentInterfaces = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function getContentContentInterfaces() {
    const [contentContentInterfaceInterfacesRes, collectionError] = await (0, try_catch_1.default)((0, node_fetch_1.default)(`http://localhost:1337/api/${process.env.STRAPI_WEBFLOW_TYPES_COLLECTION_NAME}`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
        },
    }));
    const contentContentInterfaceInterfacesRaw = await contentContentInterfaceInterfacesRes.json();
    const contentContentInterfaceInterfaces = contentContentInterfaceInterfacesRaw.data.reduce(//yes i'm doing fine everything's fine
    (acc, curr) => {
        const { type, map, ...rest } = curr.attributes;
        acc[type] = { ...map, ...rest };
        return acc;
    }, {});
    return contentContentInterfaceInterfaces;
}
exports.getContentContentInterfaces = getContentContentInterfaces;
