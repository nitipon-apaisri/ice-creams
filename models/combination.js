const db = require("./connection");

function postCombination(name) {
   return new Promise((resolve, reject) => {
      db.run("INSERT INTO combinations(name) VALUES (?)", [name], function (err) {
         if (err) {
            reject(err);
         } else {
            db.get(
               "SELECT * FROM combinations WHERE id = ?",
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
      });
   });
}

module.exports = { postCombination };
