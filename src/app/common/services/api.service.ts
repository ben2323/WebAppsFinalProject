import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Constants} from "../constants";
import {HttpService} from "./http.service";

@Injectable()
export class ApiService {

  constructor(private _httpService: HttpService) { }

  public getAllAds(): Observable<any>{
    return this._httpService.httpGet(Constants.GET_ALL_ADS);
  }
}
