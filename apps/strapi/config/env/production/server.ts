// @ts-expect-error no declaration file for this
import cronTasks from '@webbio/strapi-plugin-scheduler/cron-task'
import { Env } from '../../admin'

export default ({ env }: { env: Env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8080),
  url: `${env('PROD_HOST', 'https://cms.trialanderror.org')}`,
  proxy: true,
  admin: {
    url: `${env('PROD_HOST', 'https://cms.trialanderror.org')}/admin`,
    secret: env('JWT_SECRET', 'c0b47f9208b27587591171747a858bc8'),
  },
  app: {
    keys: env.array('STRAPI_APP_KEYS'),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
})
