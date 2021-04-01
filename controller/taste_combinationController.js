const postTasteCombination = require("../models/taste_combination");

const tasteCombination = async (req, res) => {
   const { tastes } = req.body;
   const { combinationId } = req.params;
   for (taste of tastes) {
      await postTasteCombination
         .postTasteCombination(taste, combinationId)
         .catch((err) => console.log(err));
   }
   res.json({ message: "Success" });
};

module.exports = {
   tasteCombination,
};
