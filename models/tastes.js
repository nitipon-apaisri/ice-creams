const db = require("./connection");

function getTastes() {
   return new Promise((resolve, reject) => {
      db.all("SELECT * FROM tastes", (err, rows) => {
         if (err) {
            reject(err);
         } else {
            resolve(rows);
         }
      });
   });
}

function addTaste(taste) {
   return new Promise((resolve, reject) => {
      db.run(`INSERT INTO tastes (taste) VALUES (?)`, [taste], function (err) {
         if (err) {
            reject(err);
         } else {
            db.get(
               `SELECT * FROM tastes WHERE id = ?`,
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
module.exports = { getTastes, addTaste };
