module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "upload.wikimedia.org",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "upload.wikimedia.org",
          ],
          "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
          "script-src-attr": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  {
    name: "strapi::favicon",
    config: {
      path: "./favicon.ico",
    },
  },
  "strapi::public",
];
