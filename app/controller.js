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
};
