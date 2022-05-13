"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowToStrapiId = exports.strapiToWebflowId = void 0;
function strapiToWebflowId(id) {
    return id.toString(16);
}
exports.strapiToWebflowId = strapiToWebflowId;
function webflowToStrapiId(id) {
    return parseInt(id, 16);
}
exports.webflowToStrapiId = webflowToStrapiId;
