const { Client } = require('pg')

    const client = new Client({
        host: 'localhost',
        user: 'postgres',
        port: '5432',
        password: 'watchthanu',
        database: 'postgres'
    })

    client.connect()
    .then(() => {
        return client.query(`SELECT EXISTS(SELECT datname FROM pg_catalog.pg_database WHERE datname = 'ticketManagement') AS db_exists;`);
    })
    .then(result => {
        const dbExists = result?.rows[0];
        if (!dbExists) {
          return client.query(`CREATE DATABASE ticketManagement;`);
        }
    })
    .then(() => {
      console.log('Database created successfully');
      client.end();
    })
    .catch(err => {
      console.error('Error:', err);
      client.end();
    });

    module.exports = client