export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.sqlite'),
    },
    useNullAsDefault: true,
    debug: false,
  },
})
