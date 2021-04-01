const express = require("express");
const app = express();
const PORT = 5000;
const logger = require("./middleware/logger");
const db = require("./models/connection");
const router = require("./routes/index");
app.use(express.json());
app.use(logger);
app.use(router);
app.listen(PORT, () => {
   console.log(`This server is running on port: ${PORT}`);
});

db.run("DROP TABLE IF EXISTS tastes", function (err) {
   db.run(
      `CREATE TABLE "tastes" (
       "id"	INTEGER,
       "taste"	TEXT NOT NULL UNIQUE,
       PRIMARY KEY("id" AUTOINCREMENT)
   )`,
      function () {
         db.run(
            `INSERT INTO tastes (taste) VALUES ("Lemon"),("Chocolate"),("Mango"), ("Vanilla"), ("Melon")`
         ),
            function (err) {
               db.run("DROP TABLE IF EXISTS taste_combination", function (err) {
                  db.run(
                     `CREATE TABLE "taste_combination" (
                     "tasteId"	INTEGER NOT NULL,
                     "combinationId"	INTEGER NOT NULL,
                      FOREIGN KEY("combinationId") REFERENCES "combinations"("id"),
                      FOREIGN KEY("tasteId") REFERENCES "tastes"("id")
                      )`,
                     function () {
                        db.run("DROP TABLE IF EXISTS user_vote", function () {
                           db.run(
                              `CREATE TABLE "user_vote" (
                               "id"	INTEGER,
                               "email"	TEXT NOT NULL UNIQUE,
                               "combinationId"	INTEGER NOT NULL UNIQUE,
                                PRIMARY KEY("id" AUTOINCREMENT)
                                )`
                           );
                        });
                     }
                  );
               });
            };
      }
   );
});
