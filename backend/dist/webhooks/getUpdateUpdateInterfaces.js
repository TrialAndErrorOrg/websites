"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentUpdateInterfaces = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const try_catch_1 = __importDefault(require("./utils/try-catch"));
async function getContentUpdateInterfaces() {
    const [contentUpdateInterfaceInterfacesRes, CUIIError] = await (0, try_catch_1.default)((0, node_fetch_1.default)(`http://localhost:1337/api/${process.env.STRAPI_WEBFLOW_INTERFACE_COLLECTION_NAME}?populate=%2A`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
        },
    }));
    const contentUpdateInterfaceInterfacesRaw = await contentUpdateInterfaceInterfacesRes.json();
    console.dir(contentUpdateInterfaceInterfacesRaw, { depth: null });
    const contentUpdateInterfaceInterfaces = contentUpdateInterfaceInterfacesRaw.data.reduce((acc, curr) => {
        const { type, ...rest } = curr.attributes;
        acc[type] = rest;
        return acc;
    }, {});
    console.log(contentUpdateInterfaceInterfaces);
    return contentUpdateInterfaceInterfaces;
}
exports.getContentUpdateInterfaces = getContentUpdateInterfaces;
