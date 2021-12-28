module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5759e3e0320dfca3e6cf03cdf445ef51'),
  },
});
