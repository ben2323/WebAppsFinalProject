/**
 * Created by ben on 19/08/17.
 */

const DbConnection = require('../utils/db-connection');

module.exports = class AdController {
  static getAll() {
    return DbConnection.connect().then(db => db.collection("ads").find({}).toArray());
  }

  static getById(id) {
    return Observable.create(observer => {
      observer.next('ad1');
    });
  }

  static add() {
    return Observable.create(observer => {
      observer.next('newAdId');
    });
  }

  static delete(adId) {
    return DbConnection.connect().then(db => db.collection("ads").remove({_id: DbConnection.generateObjectId(adId)}));
  }

  static update(adId, ad) {

    delete ad._id;
    return DbConnection.connect()
      .then(db => db.collection("ads")
        .findOneAndReplace(
          {_id: adId == 'undefined' ? DbConnection.generateNewId() : DbConnection.generateObjectId(adId)}, ad, {upsert: true, returnNewDocument: true}
        ));
  }

  static deleteIdKey(ad) {
  }

};

