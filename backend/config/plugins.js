module.exports = ({ env }) => ({
  navigation: {
    additionalFields: ["audience"],
    allowedLevels: 2,
    contentTypes: [
      "api::blog-post.blog-post",
      "api::jote-article.jote-article",
      "api::user.user",
      "api::article.article",
    ],
    contentTypesNameFields: {
      "api::blog-post.blog-post": ["title"],
      blog_posts: ["title"],
    },
  },
});
