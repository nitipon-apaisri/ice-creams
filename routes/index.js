const express = require("express");
const router = express.Router();
const tastesController = require("../controller/tastesController");
router.get("/tastes", tastesController.getTastes);

module.exports = router;
