// Controller for get the promos

const dataMapper = require("./dataMapper");

exports.promos = (req, res, next) => {
  dataMapper.getPromos((error, result) => {
    if (error) {
      console.log(error);
      next();
    } else {
      res.render("promos", { promos: result.rows });
    }
  });
};

exports.promo = (req, res, next) => {
  dataMapper.getPromo(req.params.id, (error, resultat) => {
    if (error) {
      console.log(error);
      next();
    } else {
      res.render("promo", { promo: resultat.rows[0] });
    }
  });
};
