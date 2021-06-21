const express = require("express");

const router = express.Router();

const controller = require("./controller");

router.get("/", controller.home);

router.get("/promos", controller.promos);

module.exports = router;
