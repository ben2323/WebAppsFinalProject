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

  updateAd(adId: string, ad: AdModel) {
    return this._apiService.updateAd(adId, ad);

  }


}
