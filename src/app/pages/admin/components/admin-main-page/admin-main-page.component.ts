import {Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef} from '@angular/core';
import {ApiService} from "../../../../common/services/api.service";
import {MdSidenav} from "@angular/material";
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {AdminService} from "../../admin.service";
import {AdModel} from "../../../../models/ad.model";

@Component({
  selector: 'admin-main-page',
  templateUrl: 'admin-main-page.component.html',
  styleUrls: ['admin-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminMainPageComponent implements OnInit {
  @ViewChild('propertiesRef') propertiesRef: MdSidenav;
  @ViewChild('mainGridRef') mainGridRef: DatatableComponent;

  currentItem:AdModel;
  cols: any[];
  rows: AdModel[];


  constructor(private _adminService: AdminService) {
  }

  ngOnInit() {
    this.cols = this.initiateGridOptions();

    this._adminService.getAllAds().subscribe(rows => {
      console.log(rows);
      this.rows = rows;
    })
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

  hideProperties() {
    this.propertiesRef.close().then(()=>{
      this.recalculateGrid();
    });
  }

  onRowClicked(event) {
    if (event.type !== 'click') {
      return;
    }
    this.currentItem = Object.assign({},event.row);
    this.showProperties();
    console.log(event);
  }

  showProperties() {
    this.propertiesRef.open().then(()=>{
      this.recalculateGrid();
      // to call change detection of grid
      this.rows = [...this.rows];
    })

  }

  recalculateGrid(){
    this.mainGridRef.recalculate();
  }

  saveProperties(properties:any){
    this._adminService.updateAd(properties._id, properties).subscribe(res=>{console.log(res)});
  }

  addNewAd(){
    this.currentItem = new AdModel();
    this.showProperties();
  }
}
