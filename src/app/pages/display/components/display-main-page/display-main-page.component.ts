import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {AdModel} from "../../../../models/ad.model";
import {ApiService} from "../../../../common/services/api.service";
import {AppSocketIoService} from "../../../../common/services/app-socket-io.service";

@Component({
  selector: 'display-main-page',
  templateUrl: 'display-main-page.component.html',
  styleUrls: ['display-main-page.component.css']
})
export class DisplayMainPageComponent implements OnInit {

  ads: AdModel[];
  citiesAdsMap: any;
  cities: string[];
  dataChangedNotifier: boolean = true;

  constructor(private _apiService: ApiService, private _sockets: AppSocketIoService, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this._apiService.getAllAds().subscribe(ads => {
      this.initiateAdsData(ads);
    });
    this._sockets.onAdsUpdated().subscribe(ads=>{
      this.initiateAdsData(ads);
      this.dataChangedNotifier = !this.dataChangedNotifier;
    })

  }

  initiateAdsData(ads: AdModel[]) {
    this.citiesAdsMap = Object.assign({}, this.createCitiesAdsMap(ads));
    this.cities = Object.keys(this.citiesAdsMap);
  }

  createCitiesAdsMap(ads: AdModel[]): any {
    return ads.reduce((initial, ad) => {
      return Object.assign(initial, {
        [ad.city.name]: initial[ad.city.name] ? initial[ad.city.name].concat(ad) : [].concat(ad)
      })
    }, {});
  }

}
