const express = require("express");
const router = express.Router();
const tastesController = require("../controller/tastesController");
const combinationController = require("../controller/combinationController");
router.get("/tastes", tastesController.getTastes);
router.post("/combinations", combinationController.postCombination);
module.exports = router;
