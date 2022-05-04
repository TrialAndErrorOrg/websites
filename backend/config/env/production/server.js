const cronTasks = require("@webbio/strapi-plugin-scheduler/cron-task");
module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 8080),
  url: `${env("PROD_HOST", "https://cms.centeroftrialanderror.com")}`,
  proxy: true,
  admin: {
    url: `${env("PROD_HOST", "https://cms.centeroftrialanderror.com")}/admin`,
    secret: env("ADMIN_JWT_SECRET", "c0b47f9208b27587591171747a858bc8"),
  },
  app: {
    keys: env.array("STRAPI_APP_KEYS"),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});
