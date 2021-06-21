const { Client } = require("pg");

const client = new Client("postgresql://postgres:Gerville2021@localhost/test");

// const client = new Client({
//     user: 'etudiant',
//     host: 'localhost',
//     database: 'trombi',
//     password: 'js4life',
//     port: 5432
// });

client.connect();

module.exports = client;
