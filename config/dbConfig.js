const { Client } = require('pg')
const { Sequelize } = require('sequelize');
require('dotenv').config()

const client = new Client({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  port: process.env.DBPORT,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME
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

const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectModule: require('pg'),
  database: process.env.DBNAME,
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  define: {
    timestamps: false,
  }
});

module.exports = sequelize