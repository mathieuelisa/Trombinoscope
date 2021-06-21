const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.home);

router.get("/promos", controller.promos);

router.get("/promos/:id", controller.promo);

module.exports = router;
