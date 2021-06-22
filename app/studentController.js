const client = require("./database");

exports.students = (req, res) => {
  client.query(
    `SELECT * FROM promo WHERE id=$1`,
    [req.params.id],
    (error, result) => {
      if (error) console.log(error);
      else {
        promo = result.rows;
        client.query(
          `SELECT * FROM student WHERE promo_id=$1`,
          [req.params.id],
          (error, result) => {
            if (error) console.log(error);
            else {
              res.render("students", { promo, students: result.rows });
            }
          }
        );
      }
    }
  );
};
