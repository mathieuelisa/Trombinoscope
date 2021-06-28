const dataMapper = require("./dataMapper");

exports.studentsInPromo = (req, res) => {
  dataMapper.getPromo(req.params.id, (error, result) => {
    if (error) console.log(error);
    else {
      const promo = result.rows[0];
      dataMapper.getStudentsInPromo(req.params.id, (error, resultat) => {
        if (error) console.log(error);
        else {
          res.render("students", { promo, students: resultat.rows });
        }
      });
    }
  });
};

exports.student = (req, res) => {
  dataMapper.getStudent(req.params.id, (error, resultat) => {
    if (error) console.log(error);
    else {
      const student = resultat.rows[0];
      dataMapper.getPromo(student.promo_id, (error, result) => {
        if (error) console.log(error);
        else {
          res.render("student", { student, promo: result.rows[0] });
        }
      });
    }
  });
};
