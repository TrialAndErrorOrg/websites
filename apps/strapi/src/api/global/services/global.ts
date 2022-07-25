'use strict'

/**
 * global service.
 */

import { factories } from '@strapi/strapi'

const service = factories.createCoreService('api::global.global')

export default service
