const sqlite = require("sqlite3");
const db = new sqlite.Database("ice-creams.db");

module.exports = db;
