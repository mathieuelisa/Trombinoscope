const client = require("./database");

// Get all the promos
exports.getPromos = (callback) => {
  client.query(`SELECT * FROM promo`, callback);
};

// Get one promo
exports.getPromo = (id, callback) => {
  client.query(`SELECT * FROM promo WHERE id=$1`, [id], callback);
};

// Get students form on promo
exports.getStudentsInPromo = (id, callback) => {
  client.query(`SELECT * FROM student WHERE promo_id=$1`, [id], callback);
};

// Get informations for one studient
exports.getStudent = (id, callback) => {
  client.query(`SELECT * FROM student WHERE id = $1`, [id], callback);
};
