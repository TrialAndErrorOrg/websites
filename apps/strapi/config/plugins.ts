import menus from './menus'
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        account: env('STORAGE_ACCOUNT'),
        accountKey: env('STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('STORAGE_URL'),
        containerName: env('STORAGE_CONTAINER_NAME'),
        cdnBaseURL: env('STORAGE_CDN_URL'),
        defaultPath: 'assets',
        maxConcurrent: 10,
      },
    },
  },
  // "rest-cache": {
  //   config: {
  //     provider: {
  //       name: "memory",
  //       options: {
  //         max: 32767,
  //         maxAge: 3600,
  //       },
  //     },
  //     strategy: {
  //       contentTypes: [
  //         // list of Content-Types UID to cache
  //         "api::category.category",
  //         "api::content-content-interface.content-content-interface",
  //         "api::content-update-interface.content-update-interface",
  //         "api::article.article",
  //         "api::global.global",
  //         "api::homepage.homepage",
  //       ],
  //     },
  //   },
  // },
  'email-designer': {
    enabled: true,

    // ⬇︎ Add the config property
    config: {
      editor: {
        // optional - if you have a premium unlayer account
        //projectId: [UNLAYER_PROJECT_ID],

        tools: {
          heading: {
            properties: {
              text: {
                value: 'This is the new default text!',
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#002642', '#feaf0c', '#697689', '#37D67A'],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: 'Overpass',
                value: "'Overpass', sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Overpass',
              },
              {
                label: 'Open Sans',
                value: "'Open Sans', Tahoma, Verdana, sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Open+Sans',
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{= USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ],
        },
        appearance: {
          // theme: "dark",
          // panels: {
          //   tools: {
          //     dock: "left",
          //   },
          // },
        },
      },
    },
  },
  'entity-notes': {
    enabled: true,
  },
  // scheduler: {
  //   enabled: true,
  //   // pathToPlugin: '../../../node_modules/strapi-plugin-scheduler',
  //   config: {
  //     model: 'scheduler',
  //   },
  // },
  seo: {
    // pathToPlugin: '../../../node_modules/@strapi/plugin-seo',
    enabled: true,
  },
  plausible: {
    enabled: true,
    config: {
      sharedLink: 'https://plausible.io/share/trialanderror.org?auth=sl01pbHu02aH7rz2qb0VG',
    },
  },
  'vercel-deploy': {
    enabled: true,
    config: {
      deployHook: env('VERCEL_DEPLOY_PLUGIN_HOOK'),
      apiToken: env('VERCEL_DEPLOY_PLUGIN_API_TOKEN'),
      teamFilter: env('VERCEL_DEPLOY_PLUGIN_TEAM_FILTER'),
      roles: ['strapi-super-admin'],
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog_post: {
          field: 'slug',
          references: 'title',
        },
        blog_author: {
          field: 'slug',
          references: 'lastName',
        },
        tag: {
          field: 'slug',
          references: 'title',
        },
        team_member: {
          field: 'slug',
          references: 'lastName',
        },
        page: {
          field: 'slug',
          references: 'title',
        },
        category: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  publisher: {
    enabled: true,
  },
  navigation: {
    enabled: false,
  },
  ckeditor: {
    enabled: true,
  },
  menus,
  meilisearch: {
    config: {
      host: env('MEILISEARCH_URL'),
      apiKey: env('MEILISEARCH_API_KEY'),
    },
  },
  graphql: {
    playgroundAlways: true,
  },
})
