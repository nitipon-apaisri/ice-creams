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
db.serialize(() => {
   db.run("DROP TABLE IF EXISTS tastes");
   db.run(
      `CREATE TABLE "tastes" (
         "id"	INTEGER,
         "taste"	TEXT NOT NULL UNIQUE,
         PRIMARY KEY("id" AUTOINCREMENT)
     )`
   );
   db.run(
      `INSERT INTO tastes (taste) VALUES ("Lemon"),("Chocolate"),("Mango"), ("Vanilla"), ("Melon")`
   );
   db.run("DROP TABLE IF EXISTS taste_combination");
   db.run(
      `CREATE TABLE "taste_combination" (
        "tasteId"	INTEGER NOT NULL,
        "combinationId"	INTEGER NOT NULL,
         FOREIGN KEY("combinationId") REFERENCES "combinations"("id"),
         FOREIGN KEY("tasteId") REFERENCES "tastes"("id")
         )`
   );
   db.run("DROP TABLE IF EXISTS user_vote");
   db.run(
      `CREATE TABLE "user_vote" (
             "id"	INTEGER,
             "email"	TEXT NOT NULL UNIQUE,
             "combinationId"	INTEGER NOT NULL UNIQUE,
              PRIMARY KEY("id" AUTOINCREMENT)
              )`
   );
});
