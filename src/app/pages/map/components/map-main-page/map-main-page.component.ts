import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../common/services/api.service";
import {CityModel} from "../../../../models/city.model";
import {Observable} from "rxjs";
import {AppSocketIoService} from "../../../../common/services/app-socket-io.service";

@Component({
  selector: 'map-main-page',
  templateUrl: 'map-main-page.component.html',
  styleUrls: ['map-main-page.component.css'],
})
export class MapComponent implements OnInit {
  title: string = 'Map';
  zoom: number = 4;
  lat: number = 32.109333;
  lng: number = 34.855499;

  locations: CityModel[];

  constructor(private _apiService: ApiService, private _sockets: AppSocketIoService) {
  }

  ngOnInit() {
    this._apiService.getAdsCities().subscribe(cities=>{
      this.locations = cities;
    });
    this._sockets.onAdsUpdated().subscribe(ads => {
      this.locations = ads.map(ad => {
        return {
          city: {
            name: ad.city.name,
            lat: ad.city.lat,
            lng: ad.city.lng
          }
        }
      })
    })
  }
}


