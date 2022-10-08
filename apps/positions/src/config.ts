export const SITE = {
  name: 'Trial and Error Positions',

  origin: 'https://positions.trialanderror.org',
  basePathname: '/',

  title: 'A Blog of Trial and Error',
  description:
    '🚀 AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.',
}

export const BLOG = {
  disabled: false,
  postsPerPage: 10,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
}
