/**
 * A set of functions called "actions" for `front-page-cards`
 */
import { Controller } from '@strapi/strapi/lib/types/core-api'
import { query } from './query'
import { factories } from '@strapi/strapi'

const CardController: Controller.Generic = {
  async frontPageCards(ctx) {
    const queryParams = ctx.query
    const { limit = '100', offset = '0' } = queryParams

    const parsedLimit = parseInt(Array.isArray(limit) ? limit[0] : limit, 10)
    const parsedOffset = parseInt(Array.isArray(offset) ? offset[0] : offset, 10)

    try {
      const db = strapi.db
      const knex = db?.connection

      // do something like
      // select title, excerpt, url from (select title, excerpt, id, (select file_id from files_related_morphs where (related_type = 'api::blog-post.blog-post' and related_id = blog_posts.id)) as file_id from blog_posts) as sorted_blog join files on files.id = sorted_blog.file_id;
      let data
      try {
        // we temporarily set the type parser for JSONB to JSON.parse
        // this was removed in Strapi 4.6.2, as they parse the result somewhere else as well
        // but since we do a raw query, we need to do it ourselves
        db.connection.client.driver.types.setTypeParser(
          db.connection.client.driver.types.builtins.JSONB,
          'text',
          (v: string) => JSON.parse(v),
        )

        data = await knex.raw(query(parsedLimit, parsedOffset))

        // .select('*')
        // .fromRaw(query)
        // .orderBy('published', 'desc')
        // .limit(parsedLimit)
        // .offset(parsedOffset)

        // resets the type parser for JSONB to the default
        db.connection.client.driver.types.setTypeParser(
          db.connection.client.driver.types.builtins.JSONB,
          'text',
          (v: string) => v,
        )

        data = data.rows
      } catch (err) {
        console.error(err)
        ctx.throw('Post report controller error', { moreDetails: err })
      }

      ctx.body = data
    } catch (err) {
      ctx.throw('Post report controller error', { moreDetails: err })
    }
  },
}

export default CardController
