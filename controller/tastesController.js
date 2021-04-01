const tastes = require("../models/tastes");

const getTastes = async (req, res) => {
   await tastes.getTastes().then((rows) => {
      res.json({ data: rows });
   });
};

module.exports = { getTastes };
