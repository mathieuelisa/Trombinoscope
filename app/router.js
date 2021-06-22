const express = require("express");
const router = express.Router();

// Controllers
const mainController = require("./mainController");
const promoController = require("./promoController");
const studentController = require("./studentController");

router.get("/", mainController.home);

router.get("/promos", promoController.promos);

router.get("/promos/:id", promoController.promo);

router.get("/promos/:id/students", studentController.students);

module.exports = router;
