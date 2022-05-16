'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * homepage service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::homepage.homepage');
exports.default = service;
