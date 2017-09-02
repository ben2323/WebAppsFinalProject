/**
 * Created by ben on 19/08/17.
 */

const DbConnection = require('../utils/db-connection');

module.exports = class AdController {
  static getAll(project = {}) {
    return DbConnection.connect().then(db => db.collection("ads").find({}, project).toArray());
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

  static updateOrAdd(adId, ad) {
    delete ad._id;
    return DbConnection.connect()
      .then(db => db.collection("ads")
        .findOneAndReplace(
          {_id: adId == 'undefined' ? DbConnection.generateNewId() : DbConnection.generateObjectId(adId)}, ad, {upsert: true, returnNewDocument: true}
        ));
  }

  static findByQuery(query) {
    let _query = {};
    if (query.isGroupBy) {
      _query =   [
        { $group : { _id : "$city.name", total: { $sum: 1 } } }
      ];

      return DbConnection.connect().then(db => db.collection("ads").aggregate(_query).toArray());
    }
    if (query.name) {
      _query.name = query.name;
    }
    if (query.htmlContent) {
      _query.htmlContent = {'$regex': query.htmlContent};
    }
    if (query.timeDuration) {
      _query.timeDuration = query.timeDuration;
    }
    return DbConnection.connect().then(db => db.collection("ads").find(_query).toArray());
  }

};

