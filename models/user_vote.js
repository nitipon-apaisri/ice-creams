const db = require("./connection");

function voteCombination(email, combinationId) {
   return new Promise((resolve, reject) => {
      db.run(
         `INSERT INTO user_vote(email, combinationId) VALUES (?,?)`,
         [email, combinationId],
         function (err) {
            if (err) {
               reject(err);
            } else {
               db.get(
                  `SELECT * FROM user_vote WHERE id = ?`,
                  [this.lastID],
                  function (err, row) {
                     if (err) {
                        reject(err);
                     } else {
                        resolve(row);
                     }
                  }
               );
            }
         }
      );
   });
}

module.exports = {
   voteCombination,
};
