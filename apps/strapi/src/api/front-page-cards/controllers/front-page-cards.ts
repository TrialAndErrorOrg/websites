/**
 * A set of functions called "actions" for `front-page-cards`
 */
import { Controller, GenericController } from '@strapi/strapi/lib/core-api/controller'
import { query } from './query'

const CardController: GenericController = {
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
        ctx.badRequest('Post report controller error', { moreDetails: err })
      }

      ctx.body = data
    } catch (err) {
      ctx.badRequest('Post report controller error', { moreDetails: err })
    }
  },
}

export default CardController
// `((select p.id as id, null as guid, 'post' as type, p.title, p.excerpt, p.slug as url, p.slug as identifier, to_jsonb(array_agg(distinct concat(coalesce(tm.first_name, ba.first_name),' ', coalesce(tm.last_name, ba.last_name)))) as authors, coalesce(p.publish_date, p.published_at) as published, to_jsonb(array_agg(bt.title)) as tags, jsonb_build_object('url',f.url,'width', f.width, 'height', f.height, 'alt', f.alternative_text, 'caption', f.caption) as image from blog_posts p left outer join files_related_morphs fp on p.id = fp.related_id LEFT OUTER JOIN files f on f.id=fp.file_id LEFT OUTER JOIN blog_posts_blog_authors_links pal on p.id = pal.blog_post_id FULL JOIN blog_authors ba on pal.blog_author_id = ba.id LEFT OUTER JOIN blog_posts_blog_tags_links ptl on p.id = ptl.blog_post_id LEFT OUTER JOIN tags bt ON ptl.tag_id = bt.id LEFT OUTER JOIN blog_posts_team_members_links pml on p.id = pml.blog_post_id LEFT OUTER JOIN team_members tm ON pml.team_member_id = tm.id LEFT OUTER JOIN blog_posts_category_links pcl on p.id = pcl.blog_post_id LEFT OUTER JOIN categories c ON pcl.category_id = c.id where (fp.related_type is null or fp.related_type = 'api::blog-post.blog-post') group by p.id, guid, type, p.title, p.excerpt, p.slug, p.publish_date, p.published_at, image)
// UNION
// (select j.id as id, j.guid as guid, 'article' as type, j.title as title, j.abstract as excerpt, j.url as url, j.doi as identifier,  j.authors, coalesce(j.published, j.published_at) as published, j.keywords as tags, jsonb_build_object('url',f.url,'width', f.width, 'height', f.height, 'alt', f.alternative_text, 'caption', f.caption) as image from jote_articles j left outer join files_related_morphs fp on j.id = fp.related_id left outer join files f on f.id=fp.file_id LEFT OUTER JOIN jote_articles_jote_article_category_links jcl on j.id = jcl.jote_article_id LEFT OUTER JOIN jote_article_categories jc ON jcl.jote_article_category_id = jc.id where (fp.related_type is null or fp.related_type = 'api::jote-article.jote-article')
// )) as all_posts`,
