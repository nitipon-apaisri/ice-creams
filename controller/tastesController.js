const tastes = require("../models/tastes");

const getTastes = async (req, res) => {
   await tastes.getTastes().then((rows) => {
      res.json({ data: rows });
   });
};

const addTaste = async (req, res) => {
   const { taste } = req.body;
   await tastes.addTaste(taste).then((row) => {
      res.json({ message: "Added success", data: row });
   });
};
module.exports = { getTastes, addTaste };
