'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * global router.
 */
const strapi_1 = require("@strapi/strapi");
const router = strapi_1.factories.createCoreRouter('api::global.global');
exports.default = router;
