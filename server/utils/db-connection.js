/**
 * Created by ben on 19/08/17.
 */
const MongoClient = require('mongodb');

module.exports = class DbConnection{
  static connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(`mongodb://ben:p24!2017@193.106.55.125:2724/ClearReview`,
        (err, db) => {
          err ? reject(err) : resolve(db);
        });
    });
  }
};
