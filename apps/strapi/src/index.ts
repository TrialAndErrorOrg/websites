// import bootstrap from './bootstrap'

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap,
  bootstrap({ strapi }: { strapi: any }) {
    absoluteUploadUrls(strapi)
  },
}

/**
 * The local upload provider stores URLs as `/uploads/<file>`, but the websites and the
 * og service use `image.url` as-is on other domains. Prefix new uploads with the public
 * URL, so every stored URL stays absolute (the media migration made the existing ones so).
 */
function absoluteUploadUrls(strapi: any) {
  const base = process.env.UPLOADS_BASE_URL ?? 'https://cms.trialanderror.org'
  const provider = strapi.plugin('upload').provider

  for (const method of ['upload', 'uploadStream'] as const) {
    const original = provider[method]
    if (!original) continue

    provider[method] = async (file: { url?: string }, ...rest: unknown[]) => {
      await original(file, ...rest)
      if (file.url?.startsWith('/')) file.url = `${base}${file.url}`
    }
  }
}
