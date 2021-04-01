const express = require("express");
const router = express.Router();
const tastesController = require("../controller/tastesController");
const combinationController = require("../controller/combinationController");
const taste_combination = require("../controller/taste_combinationController");
const userVoteController = require("../controller/user_voteController");

//Tastes
router.get("/tastes", tastesController.getTastes);
router.put("/tastes", tastesController.addTaste);
//Combinations
router.get("/combinations", combinationController.getAllCombinations);
router.get("/combinations/:id", combinationController.getCombinationById);
router.post("/combinations", combinationController.postCombination);
router.put("/combinations/:combinationId", taste_combination.tasteCombination);
//User
router.post("/user_vote", userVoteController.userVote);

module.exports = router;
