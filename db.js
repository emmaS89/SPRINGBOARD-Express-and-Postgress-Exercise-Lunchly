/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://emma:1234@localhost:5432/lunchly");
// const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;
