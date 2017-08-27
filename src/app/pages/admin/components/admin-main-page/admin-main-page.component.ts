import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../../../../common/services/api.service";
import {MdSidenav} from "@angular/material";
import {DatatableComponent} from "@swimlane/ngx-datatable";

@Component({
  selector: 'admin-main-page',
  templateUrl: 'admin-main-page.component.html',
  styleUrls: ['admin-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminMainPageComponent implements OnInit {
  @ViewChild('propertiesRef') propertiesRef: MdSidenav;
  @ViewChild('mainGridRef') mainGridRef: DatatableComponent;

  currentItem:any;
  cols: any[];
  rows: any[];


  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    this.cols = this.initiateGridOptions();

    this._apiService.getAllAds().subscribe(a => {
      console.log(a);
      this.rows = a;
    })
  }

  initiateGridOptions() {
    return [
      {name: 'Name', prop: 'name'},
      {name: 'City', prop: 'city.name'},
      {name: 'Template', prop: 'templateUrl'},
      {name: 'Texts', prop: 'texts'},
      {name: 'Images', prop: 'imagesUrl'},
      {name: 'Time Duration', prop: 'timeDuration'},
      {name: 'Screens', prop: 'screens'},
      {name: 'From Date', prop: 'fromDate'},
      {name: 'To Date', prop: 'toDate', width: 99999},
    ];
  }

  hideProperties() {
    this.propertiesRef.close();
    this.mainGridRef.recalculate();
  }

  onRowClicked(event) {
    if (event.type !== 'click') {
      return;
    }
    this.currentItem = event.row;
    this.showProperties();
    console.log(event);
  }

  showProperties() {
    this.propertiesRef.open();
    this.mainGridRef.recalculate();
  }

  /*  toggleProperties(){
   this.propertiesRef.
   this.propertiesRef.toggle();
   this.isPropertyOpen = !this.isPropertyOpen;
   }*/
}
