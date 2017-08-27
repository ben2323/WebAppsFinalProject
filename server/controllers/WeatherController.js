/**
 * Created by ben on 27/08/17.
 */
const Http = require('../utils/http');
const Observable = require("rxjs/Observable").Observable;

module.exports = class WeatherController {
  static getByCity(city) {
    const apiKey = 'e40e7a67ef72c2f7260ec5aa3c14bb0d';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;
    return Observable.create(observer => {
      Http.get(url).subscribe(result => {
        if (!result.main) {
          observer.error('Error, Please try again.');
        } else {
          const temprature = Number((result.main.temp).toFixed(0));
          const weatherText = `The message was created in ${result.name} and it's ${temprature} degrees in there!`;
          observer.next(weatherText);
          observer.complete();
        }
      }, (error)=>{
        observer.error('Connection error');
      });
    });
  }
};
