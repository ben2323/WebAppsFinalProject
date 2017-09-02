import {Component, OnInit, Input} from '@angular/core';
import {AdModel} from "../../../../models/ad.model";
import {DomSanitizer} from "@angular/platform-browser";

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

  constructor(public sanitized: DomSanitizer) {
  }

  ngOnInit() {
    this.setCurrentAdShowing(0);
  }

  setCurrentAdShowing(adIndex: number) {
    this.currentAdShowing = this.ads[adIndex];
      if (adIndex < (this.ads.length - 1)) {
        setTimeout(()=>{
          this.setCurrentAdShowing(adIndex + 1);
        }, this.ads[adIndex].timeDuration * 1000);
      } else {
        setTimeout(()=>{
          this.setCurrentAdShowing(0);
        }, this.ads[adIndex].timeDuration * 1000);
      }
  }
}
