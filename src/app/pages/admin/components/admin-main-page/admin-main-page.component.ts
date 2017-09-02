import {Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {ApiService} from "../../../../common/services/api.service";
import {MdSidenav} from "@angular/material";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {AdminService} from "../../admin.service";
import {AdModel} from "../../../../models/ad.model";
import {AppSocketIoService} from "../../../../common/services/app-socket-io.service";

@Component({
  selector: 'admin-main-page',
  templateUrl: 'admin-main-page.component.html',
  styleUrls: ['admin-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminMainPageComponent implements OnInit {
  @ViewChild('propertiesRef') propertiesRef: MdSidenav;
  @ViewChild('mainGridRef') mainGridRef: DatatableComponent;

  currentItem: AdModel;
  cols: any[];
  adsCountCols: any[];
  adsCountRows: any;
  rows: AdModel[];


  isInEditingMode: boolean;

  constructor(private _adminService: AdminService, private _sockets:AppSocketIoService) {
  }

  ngOnInit() {
    this.cols = this.initiateGridOptions();
    this.adsCountCols = this.initiateAdsCountGridOptions();
    this.loadAds();
    this._sockets.onAdsUpdated().subscribe(res=>{
      this.rows = res;
      console.log('out: ', res);
    });

  }

  initiateGridOptions() {
    return [
      {name: 'Name', prop: 'name'},
      {name: 'City', prop: 'city.name'},
      {name: 'Time Duration', prop: 'timeDuration'},
      {name: 'From Date', prop: 'fromDate'},
      {name: 'To Date', prop: 'toDate'},
    ];
  }

  initiateAdsCountGridOptions() {
    return [
      {name: 'City', prop: '_id'},
      {name: 'Ads Count', prop: 'total'},
    ];
  }

  hideProperties() {
    this.propertiesRef.close().then(() => {
      this.recalculateGrid();
    });
  }

  onRowClicked(event) {
    const item = event.selected[0];
    this.currentItem = Object.assign({}, item);
    this.showProperties();
    this.isInEditingMode = true;
    console.log(event);
  }

  showProperties() {
    this.propertiesRef.open().then(() => {
      this.recalculateGrid();
      // to call change detection of grid
      this.rows = [...this.rows];
    })

  }

  recalculateGrid() {
    this.mainGridRef.recalculate();
  }

  saveProperties(properties: any) {
    this._adminService.updateAd(properties._id, properties).subscribe(res => {
      this.loadAds();
      console.log(res);
      if (!this.isInEditingMode) {
        this.addNewAd();
      }
    });
  }

  loadAds() {
    this._adminService.getAllAds().subscribe(rows => {
      console.log(rows);
      this.rows = rows;
    });

    this._adminService.getAdsCount().subscribe(result=>{
      this.adsCountRows = result;
    })
  }

  addNewAd() {
    this.currentItem = new AdModel();
    this.showProperties();
    this.isInEditingMode = false;
  }

  deleteAd(){
    this.hideProperties();
    this._adminService.deleteAd(this.currentItem._id).subscribe(result=>{
      this.loadAds();
    });
  }

  searchResultsReady(results: AdModel[]){
    this.rows = results;
  }
}
