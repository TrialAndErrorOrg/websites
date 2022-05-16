'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * blog-author service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::blog-author.blog-author');
exports.default = service;
