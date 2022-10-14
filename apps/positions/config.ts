export const SITE = {
  name: 'Trial and Error Positions',

  origin: 'https://positions.trialanderror.org',
  basePathname: '/',

  title: 'Open Positions @ Center of Trial and Error',
  description:
    'Center of Trial and Error is a non-profit organization that aims to provide a platform for the exchange of ideas and experiences in the field of trial and error. We are looking for people who are interested in joining our team and contributing to our mission.',
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
