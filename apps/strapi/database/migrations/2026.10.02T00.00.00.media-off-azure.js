'use strict'

/**
 * Moves the media library off Azure (cote.azureedge.net) onto Strapi's own
 * /uploads, served from cms.trialanderror.org.
 *
 * Strapi runs this once on startup and records it in `strapi_migrations`. It must
 * stay plain JS: Strapi reads database/migrations/*.{js,sql} from the source dir,
 * not from dist, so a .ts migration would be skipped.
 *
 * The files themselves must already be in public/uploads, flat, named <hash><ext>
 * (the local provider's layout). Every statement is idempotent.
 *
 * Plan: meta repo, planning/cote/center/media-migration.md
 */
const base = `${process.env.UPLOADS_BASE_URL ?? 'https://cms.trialanderror.org'}/uploads/`

// Azure stored files under <container>/assets/; one stray file sits under undefined/assets/
const azurePrefix = String.raw`https://cote\.azureedge\.net/[^/"]+/assets/`
// The old WordPress archive; one policy-plan PDF is still linked from a text block
const archivePrefix = 'https://archive.azureedge.net/misc/'

const richTextColumns = [
  ['blog_posts', 'body'],
  ['components_components_text_blocks', 'body'],
  ['open_positions', 'description'],
  ['email_templates', 'body_html'],
]

module.exports = {
  async up(knex) {
    await knex.raw(
      `update files set
         url = regexp_replace(url, ?, ?),
         formats = regexp_replace(formats::text, ?, ?, 'g')::jsonb,
         provider = 'local',
         provider_metadata = null
       where provider = 'strapi-provider-upload-azure-storage'`,
      [`^${azurePrefix}`, base, azurePrefix, base]
    )

    for (const [table, column] of richTextColumns) {
      await knex.raw(
        `update ?? set ?? = regexp_replace(replace(??, ?, ?), ?, ?, 'g') where ?? like '%azureedge.net%'`,
        [table, column, column, archivePrefix, base, azurePrefix, base, column]
      )
    }

    await knex.raw(
      `update email_templates set design = regexp_replace(design::text, ?, ?, 'g')::jsonb
       where design::text like '%cote.azureedge.net%'`,
      [azurePrefix, base]
    )
  },

  async down() {
    // Azure is being decommissioned; there is nothing to go back to.
  },
}
