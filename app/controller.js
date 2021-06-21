const client = require("./database");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },

  promos: (req, res) => {
    client.query(`SELECT * FROM promo`, (error, resultats) => {
      if (error) console.log(error);
      else {
        res.render("promos", {
          promos: resultats.rows,
        });
      }
    });
  },

  promo: (req, res) => {
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
  },
};
