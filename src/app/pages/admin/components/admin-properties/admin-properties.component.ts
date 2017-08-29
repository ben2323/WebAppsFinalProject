import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges,
  OnChanges
} from '@angular/core';
import {AdminService} from "../../admin.service";
import {AdModel} from "../../../../models/ad.model";
import {Observable} from "rxjs";

@Component({
  selector: 'admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['admin-properties.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPropertiesComponent implements OnInit, OnChanges {
  @Input() properties: AdModel;
  @Input() title: string;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  weatherInfo: Observable<string>;

  constructor(private _adminService: AdminService) { }

  ngOnChanges(changes:SimpleChanges){
    if (changes['properties']) {
      this.weatherInfo = this.getWeatherByCity(this.properties.city.name);
    }
  }

  ngOnInit() {
  }

  close(){
    this.onClose.emit();
  }

  save(){
    this.onSave.emit(this.properties);
  }

  getWeatherByCity(city: string){
    return this._adminService.getWeatherByCity(city);
  }

}
