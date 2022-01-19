module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  url: "https://admin.centeroftrialanderror.com/",
  proxy: true,
  admin: {
    url: "https://admin.centeroftrialanderror.com/admin",
    secret: env("ADMIN_JWT_SECRET", "c0b47f9208b27587591171747a858bc8"),
  },
});
