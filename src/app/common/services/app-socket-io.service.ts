import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {AdModel} from "../../models/ad.model";
import {Observable} from "rxjs";

@Injectable()
export class AppSocketIoService {

  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
  }

  emitAdsUpdated(ads: AdModel[]) {
    this.socket.emit('adsGridUpdated', ads);
  }

  onAdsUpdated(): Observable<any> {
    return Observable.create(observer=>{
      this.socket.on('adsUpdated', (ads: AdModel[]) => {
        console.log('ads: ', ads);
        observer.next(ads);
      });
    });
  }
}
