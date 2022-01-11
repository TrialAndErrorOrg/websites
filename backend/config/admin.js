module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "c0b47f9208b27587591171747a858bc8"),
  },
  url: "/admin",
});
