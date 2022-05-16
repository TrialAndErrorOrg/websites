'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  global controller
 */
const strapi_1 = require("@strapi/strapi");
const controller = strapi_1.factories.createCoreController('api::global.global');
exports.default = controller;
