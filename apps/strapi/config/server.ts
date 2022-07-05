import cronTasks from '@webbio/strapi-plugin-scheduler/cron-task'

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('STRAPI_APP_KEYS'),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
})
