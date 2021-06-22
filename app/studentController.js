const client = require("./database");

exports.studentsInPromo = (req, res) => {
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

exports.student = (req, res) => {
  client.query(
    `SELECT * FROM student WHERE id=$1`,
    [req.params.id],
    (error, result) => {
      if (error) console.log(error);
      else {
        const student = result.rows[0];
        client.query(
          `SELECT * FROM promo WHERE id=$1`,
          [student.promo_id],
          (error, resultat) => {
            if (error) console.log(error);
            else {
              console.log(resultat.rows[0]);
              res.render("student", {
                student: student,
                promo: resultat.rows[0],
              });
            }
          }
        );
      }
    }
  );
};
