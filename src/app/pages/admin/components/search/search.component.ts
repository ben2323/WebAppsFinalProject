import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AdminService} from "../../admin.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output('onSearchResultsReady') onSearchResultsReady: EventEmitter<any> = new EventEmitter();

  searchParams:any = {};

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
  }

  find(){
    this._adminService.getAdsByQuery(this.searchParams).subscribe(results=>{
      console.log(results);
      this.onSearchResultsReady.emit(results);
    })
  }

}
