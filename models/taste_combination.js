const db = require("./connection");

function postTasteCombination(tasteId, combinationId) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO taste_combination(tasteId,combinationId) VALUES (?,?)`,
         [tasteId, combinationId],
         function (err) {
            if (err) {
               reject(err);
            } else {
               resolve();
            }
         }
      );
   });
}

module.exports = {
   postTasteCombination,
};
