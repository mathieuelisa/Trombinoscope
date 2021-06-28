const express = require("express");
const router = express.Router();

// Controllers
const mainController = require("./mainController");
const promoController = require("./promoController");
const studentController = require("./studentController");

router.get("/", mainController.home);

// Get all the promos
router.get("/promos", promoController.promos);

// Get one promo
router.get("/promos/:id", promoController.promo);

// Get all the students of one promo
router.get("/promos/:id/students", studentController.studentsInPromo);

// Get info for one student
router.get("/student/:id", studentController.student);

module.exports = router;
