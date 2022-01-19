module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  url: "https://admin.centeroftrialanderror.com/admin",
  proxy: true,
});
