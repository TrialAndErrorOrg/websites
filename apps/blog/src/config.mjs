export const SITE = {
  name: 'A Blog of Trial and Error',

  origin: 'https://blog.trialanderror.org',
  basePathname: '/',

  title: 'A Blog of Trial and Error',
  description:
    'A Blog by the Center of Trial and Error exploring failure in academia, open science and what it takes to be an Open Access publisher.',
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
