const express = require("express");
const router = express.Router();
const tastesController = require("../controller/tastesController");
const combinationController = require("../controller/combinationController");
const taste_combination = require("../controller/taste_combinationController");
router.get("/tastes", tastesController.getTastes);
router.post("/combinations", combinationController.postCombination);
router.post("/combinations/:combinationId", taste_combination.tasteCombination);
module.exports = router;
