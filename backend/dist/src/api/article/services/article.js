'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * article service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::article.article');
exports.default = service;
