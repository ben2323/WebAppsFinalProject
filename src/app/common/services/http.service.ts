import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private _http: Http) {
  }

  httpGet(url: string) {
    return this._http.get(url).map(a => a.json());
  }

  httpPost(url: string, body: any) {
    const headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    const options = new RequestOptions({headers: headers});
    return this._http.post(url, JSON.stringify(body), options).map(a => a.json());
  }

}
