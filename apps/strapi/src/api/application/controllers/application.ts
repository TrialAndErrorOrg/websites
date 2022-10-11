/**
 *  application controller
 */

import { factories } from '@strapi/strapi'
import { writeFileSync } from 'fs'
import { join } from 'path'

export default factories.createCoreController('api::application.application', ({ strapi }) => ({
  async create(ctx) {
    await super.create(ctx)
    const {
      body,
      // @ts-expect-error this should be defined according to the docs https://docs.strapi.io/developer-docs/latest/development/backend-customization/requests-responses.html#accessing-the-request-context-anywhere
      files: { 'files.documents': documents },
    } = ctx.request
    console.log({ body, documents })
    const { name, email, motivation, experience, open_position } = JSON.parse(body.data)

    const files = Array.isArray(documents) ? documents : [documents]
    // strapi.service('api::application.application').

    const position = await strapi.entityService.findOne(
      'api::open-position.open-position',
      open_position,
      {
        populate: {
          image: true,
        },
      },
    )

    // send email
    const res = await strapi.plugins['email-designer'].service('email').sendTemplatedEmail(
      {
        to: email,
        from: 'positions@trialanderror.org',
        attachments: files,
      },
      {
        templateReferenceId: 'application',
      },
      {
        application: {
          name,
          email,
          motivation,
          experience,
          position,
        },
      },
    )

    console.log(res)
  },
}))
