import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Constants} from "../constants";
import {HttpService} from "./http.service";
import {AdModel} from "../../models/ad.model";
import {CityModel} from "../../models/city.model";

@Injectable()
export class ApiService {

  constructor(private _httpService: HttpService) { }

  public getAllAds(): Observable<any>{
    return this._httpService.httpGet(Constants.GET_ALL_ADS);
  }

  public getAdsByQuery(query:any): Observable<any>{
    return this._httpService.httpPost(Constants.FIND_BY_QUERY, {query: query});
  }

  public updateAd(adId:string, ad:AdModel): Observable<any>{
    return this._httpService.httpPost(Constants.UPDATE_AD + adId, {ad: ad});
  }

  public deleteAd(adId:string) : Observable<any>{
    return this._httpService.httpDelete(Constants.DELETE_AD + adId)
  }

  public getWeatherByCity(city: string): Observable<any>{
    return this._httpService.httpGet(Constants.GET_WEATHER + city);
  }

  public getAdsCities(): Observable<CityModel[]>{
    return this._httpService.httpGet(Constants.GET_CITIES);
  }

}
