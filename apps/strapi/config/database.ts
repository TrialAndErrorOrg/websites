import { Env } from './admin'

export default ({ env }: { env: Env }) => ({
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
