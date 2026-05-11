import 'dotenv/config';
import knex from 'knex';


export const client = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.PG_CONNECTION_STRING,
  },
})


