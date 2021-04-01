const voteCombination = require("../models/user_vote");

const userVote = async (req, res) => {
   const { email, combinationId } = req.body;
   await voteCombination.voteCombination(email, combinationId).then((row) => {
      res.json({ message: "Success", data: row });
   });
};

module.exports = {
   userVote,
};
