import {Injectable} from '@angular/core';
import {ApiService} from "../../common/services/api.service";
import {AdModel} from "../../models/ad.model";

@Injectable()
export class AdminService {
  constructor(private _apiService: ApiService) {
  }

  getAllAds() {
    return this._apiService.getAllAds().map(ads=>ads.map(this.arrayToNewLines));
  }

  updateAd(adId: string, ad: AdModel) {
    return this._apiService.updateAd(adId, ad);
  }

  deleteAd(adId: string){
    return this._apiService.deleteAd(adId);
  }

  getWeatherByCity(city: string){
    return this._apiService.getWeatherByCity(city);
  }

  convertToArray(keysToConvert: any, ad: AdModel): AdModel{
    return Object.keys(ad).reduce((initial, currentKey)=>{
      if (keysToConvert[currentKey]) {
        return Object.assign(initial, {[currentKey]: ad[currentKey].split('\n')} )
      }
      return Object.assign(initial, {[currentKey]: ad[currentKey]} )
    }, new AdModel())
  }

  arrayToNewLines(ad: AdModel): AdModel{
    return Object.keys(ad).reduce((initial, currentKey)=>{
      if (ad[currentKey].constructor === Array) {
        return Object.assign(initial, {[currentKey]: ad[currentKey].join('\n')} )
      }
      return Object.assign(initial, {[currentKey]: ad[currentKey]} )
    }, new AdModel())
  }


}
