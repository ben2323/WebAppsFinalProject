/**
 * Created by ben on 19/08/17.
 */
const MongoClient = require('mongodb');

module.exports = class DbConnection{
  static connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(`mongodb://localhost:27017/final-project`,
        (err, db) => {
          err ? reject(err) : resolve(db);
        });
    });
  }
}
