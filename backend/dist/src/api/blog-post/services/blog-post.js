'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * blog-post service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::blog-post.blog-post');
exports.default = service;
