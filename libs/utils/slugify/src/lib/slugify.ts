export const slugify = (title: string) =>
  encodeURIComponent(
    title.replace(/-/g, '_').replace(/ /g, '-').replace('/', '').replace("'", '').toLowerCase(),
  )
export const deslugify = (slug: string) =>
  decodeURIComponent(slug).replace(/-/g, ' ').replace(/_/g, '-')
