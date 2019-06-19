const { Pool } = require('pg');
require('dotenv').config();
// defines database queries that are actually called in product-controller
const pool = new Pool({
  user: process.env.PG_USERNAME,
  host: 'raja.db.elephantsql.com',
  database: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  _connectionTimeoutMillis: 2000
});

const favoritesModel = {
  getAll(user_id) {
    // table join
    console.log('hey');
    console.log(
      `SELECT Items.* FROM Items INNER JOIN Favorites ON Items.item_id = Favorites.item_id WHERE Favorites.user_id=${user_id}`
    );
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT Items.* FROM Items INNER JOIN Favorites ON Items.item_id = Favorites.item_id WHERE Favorites.user_id=${user_id}`,
        (err, result) => {
          console.log(result);
          console.log(err);
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  },
  add(user_id, item_id) {
    // when a user submits an item, it gets saved to the products db
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO Favorites("user_id", "item_id") values($1, $2)',
        [user_id, item_id],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  }
};

module.exports = favoritesModel;
