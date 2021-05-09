import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        user : 'postgres',
        password : 'henrique331995',
        database : 'proffys_db'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    useNullAsDefault: true,
};