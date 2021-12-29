module.exports = ({ env }) => ({
  connection: {
      client: 'postgres',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'support'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        ssl: {rejectUnauthorized:false},
      },
    },
});

