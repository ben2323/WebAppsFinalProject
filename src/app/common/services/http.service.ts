import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) {
  }

  httpGet(url: string) {
    return this._http.get(url).map(a => a.json());
  }

  httpPost(url: string, body: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(url, body, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  httpDelete(url: string){
    return this._http.delete(url);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
