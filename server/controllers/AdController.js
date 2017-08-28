/**
 * Created by ben on 19/08/17.
 */

const DbConnection  =  require('../utils/db-connection');

module.exports =  class AdController {
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

  static delete() {
    const succeeded = true;
    return Observable.create(observer => {
      observer.next(succeeded);
    });
  }

  static update(adId, ad) {
    return DbConnection.connect()
      .then(db => db.collection("ads")
      .findOneAndReplace(
        {_id: adId}, ad, { upsert : true, returnNewDocument: true }
      ).toArray());

  }
}
