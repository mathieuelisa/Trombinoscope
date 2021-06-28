const dataMapper = require("./dataMapper");

exports.studentsInPromo = (req, res, next) => {
  dataMapper.getPromo(req.params.id, (error, result) => {
    if (error) {
      console.log(error);
      next();
    } else {
      const promo = result.rows[0];
      dataMapper.getStudentsInPromo(req.params.id, (error, resultat) => {
        if (error) {
          console.log(error);
          next();
        } else {
          res.render("students", { promo, students: resultat.rows });
        }
      });
    }
  });
};

exports.student = (req, res, next) => {
  dataMapper.getStudent(req.params.id, (error, resultat) => {
    if (error) {
      console.log(error);
      next();
    } else {
      const student = resultat.rows[0];
      dataMapper.getPromo(student.promo_id, (error, result) => {
        if (error) {
          console.log(error);
          next();
        } else {
          res.render("student", { student, promo: result.rows[0] });
        }
      });
    }
  });
};
