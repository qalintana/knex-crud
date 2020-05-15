// Update with your config settings.

const { join } = require('path');
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host:'127.0.0.1',
      database: 'knext',
      user: 'postgres',
      password: 'docker',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: join(__dirname, 'src', 'database', 'migrations'),
    },
    seeds:{
      directory: join(__dirname, 'src', 'database', 'seeds'),

    }
  },
};
