const combination = require("../models/combination");

const postCombination = async (req, res) => {
   const { name } = req.body;
   await combination.postCombination(name).then((row) => {
      res.json({ message: "Added", data: row });
   });
};
const getAllCombinations = async (req, res) => {
   await combination.getAllCombinations().then((rows) => {
      res.json({ message: "Success", data: rows });
   });
};
const getCombinationById = async (req, res) => {
   const id = req.params.id;
   await combination.getCombinationById(id).then((rows) => {
      res.json({ message: "Success", data: rows });
   });
};
module.exports = {
   postCombination,
   getAllCombinations,
   getCombinationById,
};
