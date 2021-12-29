'use strict';

/**
 * team-member service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team-member.team-member');
