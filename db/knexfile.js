// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
module.exports = {

  development: {
    client: 'pg',
    connection: {
      sslmode:"disable",
      host: PGHOST,
      // port : 3306,
      user: PGUSER,
      password: PGPASSWORD,
      database: PGDATABASE,
      ssl: { rejectUnauthorized: false },
    },
      migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
