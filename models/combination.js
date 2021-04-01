const db = require("./connection");

function getAllCombinations() {
   return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM combinations`, (err, rows) => {
         if (err) {
            reject(err);
         } else {
            resolve(rows);
         }
      });
   });
}

function getCombinationById(id) {
   return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM combinations WHERE id = ?`, [id], function (err, row) {
         if (err) {
            reject(err);
         } else {
            db.all(
               `SELECT tastes.taste FROM taste_combination 
               INNER JOIN tastes ON tastes.Id = taste_combination.tasteId
               WHERE taste_combination.combinationId = ?`,
               [id],
               function (err, rows) {
                  if (err) {
                     reject(err);
                  } else {
                     const data = { combination: row, tastes: rows };
                     resolve(data);
                  }
               }
            );
         }
      });
   });
}

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

module.exports = { postCombination, getAllCombinations, getCombinationById };
