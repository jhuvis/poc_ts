import pg from "pg";

const { Pool }  = pg;

//.env

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'driven_eats',
    user: 'postgres',
    password: '1999',

})

export { connection }