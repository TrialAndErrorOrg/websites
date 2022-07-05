export const slugify = (title) =>
  encodeURIComponent(
    title.replace(/-/g, '_').replace(/ /g, '-').replace('/', '').replace("'", '').toLowerCase(),
  )
export const deslugify = (slug) => decodeURIComponent(slug).replace(/-/g, ' ').replace(/_/g, '-')
