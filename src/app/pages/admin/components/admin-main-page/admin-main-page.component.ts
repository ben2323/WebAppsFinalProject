import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../common/services/api.service";

@Component({
  selector: 'admin-main-page',
  templateUrl: 'admin-main-page.component.html',
  styleUrls: ['admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    this._apiService.getAllAds().subscribe(a=>{
      console.log(a);
    })
  }
}
