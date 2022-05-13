"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIdToStrapi = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
async function addIdToStrapi(props) {
    const { collectionName, id, webflowId, updateId } = props;
    if (!webflowId && !updateId)
        return { data: undefined };
    console.log(JSON.stringify({ body: { webflowId, updateId } }));
    try {
        const addId = await (0, node_fetch_1.default)(`http://localhost:1337/api/${collectionName.slice(-1) === 'y'
            ? collectionName.slice(0, -1) + 'ies'
            : collectionName + 's'}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: { webflowId, updateId },
            }),
        });
        const responseJson = await addId.json();
        return responseJson;
    }
    catch (e) {
        console.error(e);
        return { data: null };
    }
}
exports.addIdToStrapi = addIdToStrapi;
