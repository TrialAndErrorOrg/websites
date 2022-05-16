'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * editor service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::editor.editor');
exports.default = service;
