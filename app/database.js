const { Client } = require("pg");

const client = new Client(process.env.DB_URL);

// const client = new Client({
//     user: 'etudiant',
//     host: 'localhost',
//     database: 'trombi',
//     password: 'js4life',
//     port: 5432
// });

client.connect();

module.exports = client;
