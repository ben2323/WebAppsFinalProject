import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map-main-page/map-main-page.component';
import {mapRouting} from './map.routing';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    mapRouting,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBT5lAAPOp2pUU2rRC1s-CPrNDV6Q9NPQw'
    })
  ],
  providers: [],
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ]
})
export class MapModule {}
