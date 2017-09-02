import {Injectable} from '@angular/core';
import {ApiService} from "../../common/services/api.service";
import {AdModel} from "../../models/ad.model";

@Injectable()
export class AdminService {
  constructor(private _apiService: ApiService) {
  }

  getAllAds() {
    return this._apiService.getAllAds();
  }

  getAdsByQuery(query: any) {
    return this._apiService.getAdsByQuery(query);
  }

  getAdsCount() {
    return this._apiService.getAdsByQuery({isGroupBy: true});
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
}
