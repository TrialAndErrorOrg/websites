"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function tryCatch(promise, errorHandler) {
    try {
        const data = await promise;
        return [data, null];
    }
    catch (e) {
        console.error(e);
        errorHandler && errorHandler(e);
        return [null, e];
    }
}
exports.default = tryCatch;
