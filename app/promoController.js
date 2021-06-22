const client = require("./database");

exports.promos = (req, res) => {
  client.query(`SELECT * FROM promo`, (error, resultats) => {
    if (error) console.log(error);
    else {
      res.render("promos", {
        promos: resultats.rows,
      });
    }
  });
};

exports.promo = (req, res) => {
  client.query(
    `SELECT * FROM promo WHERE id = $1`,
    [req.params.id],
    (err, result) => {
      if (err) console.log(err);
      else {
        res.render("promo", { promo: result.rows[0] });
      }
    }
  );
};
