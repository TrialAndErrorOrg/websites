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
            "s3.amazonaws.com",
            "stapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "upload.wikimedia.org",
            "s3.amazonaws.com",
            "stapi.io",
          ],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "cdn.jsdelivr.net",
            "editor.unlayer.com",
          ],
          "frame-src": ["'self'", "editor.unlayer.com"],
          "script-src-attr": [
            "'self'",
            "'unsafe-inline'",
            "cdn.jsdelivr.net",
            "editor.unilayer.com",
          ],
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
  "strapi::session",
  {
    name: "strapi::favicon",
    config: {
      path: "./favicon.ico",
    },
  },
  "strapi::public",
];
