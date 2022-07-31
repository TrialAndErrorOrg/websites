'use strict'

/**
 *  global controller
 */

import { factories } from '@strapi/strapi'

const controller = factories.createCoreController('api::global.global')
export default controller
