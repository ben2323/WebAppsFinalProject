/**
 * Created by ben on 28/08/17.
 */
const request = require('request');
const Observable = require("rxjs/Observable").Observable;
require('rxjs/add/operator/map');

module.exports = class Http {
  static get(url, options) {
    return Observable.create(observer => {
      request(url, function (err, response, body) {
        if (err) {
          observer.error(err);
        } else {
          observer.next(JSON.parse(body));
          observer.complete();
        }
      });
    })
  }
};
