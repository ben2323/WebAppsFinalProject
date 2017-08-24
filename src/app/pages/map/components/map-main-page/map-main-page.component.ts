import { Component, OnInit  } from '@angular/core';

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

  // instead of this, take from server array of locations
  locations: any = [
    {
      'lat': 32.109333,
      'lng': 34.855499
    },
    {
      'lat': 51.507351,
      'lng': -0.127758
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}


