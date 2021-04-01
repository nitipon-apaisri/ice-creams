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

module.exports = { getTastes };
