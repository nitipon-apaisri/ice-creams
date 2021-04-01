const combination = require("../models/combination");

const postCombination = async (req, res) => {
   const { name } = req.body;
   await combination.postCombination(name).then((row) => {
      res.json({ message: "Added", data: row });
   });
};

module.exports = {
   postCombination,
};
