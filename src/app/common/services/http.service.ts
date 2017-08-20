import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

  httpGet(url: string) {
    return this._http.get(url).map(a=>a.json());
  }
}
