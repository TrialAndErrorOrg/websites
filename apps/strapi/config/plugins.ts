import { Env } from './admin'
import menus from './menus'
export default ({ env }: { env: Env }) => ({
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
  'rest-cache': {
    config: {
      provider: {
        name: 'memory',
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          'api::category.category',
          'api::jote-article.jote-article',
          'api::page.page',
          'api::blog-post.blog-post',
          'api::tag.tag',
          'api::blog-author.blog-author',
          'api::team-member.team-member',
          'plugin::menus.menu',
        ],
        hitpass: (ctx: any) => {
          return Boolean(ctx.request.headers.cookie)
        },
      },
    },
  },
  comments: {
    enabled: false,
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp-mail.outlook.com'),
        port: env('SMTP_PORT', 587),
        secureConnection: false,
        tls: {
          ciphers: 'SSLv3',
        },
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_FROM'),
        defaultReplyTo: env('SMTP_FROM'),
      },
    },
  },

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
  seo: {
    enabled: true,
  },
  plausible: {
    enabled: true,
    config: {
      sharedLink:
        'https://analytics.trialanderror.org/share/blog.trialanderror.org?auth=XFeoDlc0fe0TDF4Q_Hy5j',
    },
  },
  'multi-site-vercel-deploy': {
    enabled: true,
    config: {
      sites: [
        {
          deployHook: env('VERCEL_DEPLOY_PLUGIN_HOOK'),
          apiToken: env('VERCEL_DEPLOY_PLUGIN_API_TOKEN'),
          teamFilter: env('VERCEL_DEPLOY_PLUGIN_TEAM_FILTER'),
          roles: ['strapi-super-admin'],
          displayName: 'Blog',
        },
      ],
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
    enabled: false,
  },
  navigation: {
    enabled: false,
  },
  // ckeditor: {
  //   enabled: true,
  // },
  menus,
  meilisearch: {
    config: {
      host: env('MEILISEARCH_URL'),
      apiKey: env('MEILISEARCH_API_KEY'),
      'blog-post': {
        settings: {
          filterableAttributes: ['blog_tags', 'category', 'blog_authors', 'team_members'],
        },
      },
    },
  },
  graphql: {
    playgroundAlways: true,
  },
  'strapi-blurhash': {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
    },
  },
  'preview-button': {
    config: {
      openTarget: '_blank',
      contentTypes: [
        {
          uid: 'api::blog-post.blog-post',
          draft: {
            url: 'https://blog.trialanderror.org/api/draft',
            query: {
              secret: env('DRAFT_SECRET'),
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://blog.trialanderror.org/{slug}',
          },
        },
        {
          uid: 'api::page.page',
          draft: {
            url: 'https://trialanderror.org/api/draft',
            query: {
              secret: env('DRAFT_SECRET'),
              slug: '{slug}',
            },
          },
          published: {
            url: 'https://trialanderror.org/{slug}',
          },
        },
      ],
    },
  },
})
