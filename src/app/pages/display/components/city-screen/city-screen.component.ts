import {Component, OnInit, Input} from '@angular/core';
import {AdModel} from "../../../../models/ad.model";

@Component({
  selector: 'city-screen',
  templateUrl: './city-screen.component.html',
  styleUrls: ['./city-screen.component.scss']
})
export class CityScreenComponent implements OnInit {

  @Input() cityName: string;
  @Input() ads: AdModel[];
  @Input() dataChanged: string;

  currentAdShowing: AdModel;
  constructor() { }

  ngOnInit() {
    this.currentAdShowing = this.ads[0];
  }
}
