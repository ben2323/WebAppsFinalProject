import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Constants} from "../constants";
import {HttpService} from "./http.service";
import {AdModel} from "../../models/ad.model";

@Injectable()
export class ApiService {

  constructor(private _httpService: HttpService) { }

  public getAllAds(): Observable<any>{
    return this._httpService.httpGet(Constants.GET_ALL_ADS);
  }

  public updateAd(adId:string, ad:AdModel): Observable<any>{
    return this._httpService.httpPost(Constants.UPDATE_AD + adId, ad);
  }
}
