'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * team-member service.
 */
const strapi_1 = require("@strapi/strapi");
const service = strapi_1.factories.createCoreService('api::team-member.team-member');
exports.default = service;
