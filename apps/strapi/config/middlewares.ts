export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'upload.wikimedia.org',
            's3.amazonaws.com',
            'strapi.io',
            'cote.azureedge.net',
            '*.core.windows.net',
            'dl.airtable.com',
            'plausible.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'upload.wikimedia.org',
            's3.amazonaws.com',
            'strapi.io',
            'cote.azureedge.net',
            '*.core.windows.net',
            'dl.airtable.com',
            'plausible.io',
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'cdn.jsdelivr.net',
            'editor.unlayer.com',
            'plausible.io',
          ],
          'frame-src': [
            "'self'",
            'editor.unlayer.com',
            'plausible.io',
            'analytics.trialanderror.org',
          ],
          'script-src-attr': [
            "'self'",
            "'unsafe-inline'",
            'cdn.jsdelivr.net',
            'editor.unilayer.com',
            'plausible.io',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  {
    name: 'strapi::favicon',
    config: {
      path: './public/favicon.png',
    },
  },
  'strapi::public',
]
