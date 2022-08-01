export const strapi = () => {
  return '@trialanderror/strapi'
}

/**
 * Initializes the Strapi client
 *
 * @param {Object} options
 * @param {string} options.url The URL of the Strapi server
 * @param {string} options.token The token to use to authenticate with the Strapi server
 * @param {string} options.schema The path to the schema file or the schema file itself as a string
 *
 */
export const createClient = async ({
  schema,
  url,
  token,
}: {
  schema: string
  url: string
  token: string
}) => {
  /**
   * If the schema file is a single line, then we assume it is a path to a file
   * If the schema file is a multiline string, then we assume it is the schema itself
   **/
  if (schema.indexOf('\n') === -1) {
    const fs = await import('fs/promises')
    schema = await fs.readFile(schema, 'utf8')
  }

  /**
   * Dynamically import type definitions from the Schema
   */
}
