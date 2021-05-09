import  knex from 'knex';
import path from 'path'

const db = knex({
    client: 'pg',
    connection: {
        user : 'postgres',
        password : 'henrique331995',
        database : 'proffys_db'
    },
    useNullAsDefault: true,
});

export default db;