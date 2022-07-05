export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '.tmp/data.sqlite'),
    },
    useNullAsDefault: true,
    debug: false,
  },
})
