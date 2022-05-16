'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * global service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::global.global');
exports.default = service;
