'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * tag service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::tag.tag');
exports.default = service;
