// Controller for get the promos

const dataMapper = require("./dataMapper");

exports.promos = (req, res) => {
  dataMapper.getPromos((error, result) => {
    if (error) console.log(error);
    else {
      res.render("promos", { promos: result.rows });
    }
  });
};

exports.promo = (req, res) => {
  dataMapper.getPromo(req.params.id, (error, resultat) => {
    if (error) console.log(error);
    else {
      res.render("promo", { promo: resultat.rows[0] });
    }
  });
};
