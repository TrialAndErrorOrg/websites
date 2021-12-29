const path = require('path');
const fs = require('fs');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'support'),
      user: env('DATABASE_USERNAME', 'support'),
      password: env('DATABASE_PASSWORD', ''),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
	      ca: env('NODE_ENV') === 'production' ? fs.readFileSync(env('CERT_PATH', './cert')).toString() : undefined,
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
