import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMainPageComponent } from './components/display-main-page/display-main-page.component';
import {displayRouting} from './display.routing';
import { CityScreenComponent } from './components/city-screen/city-screen.component';
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    displayRouting,
    CommonModule,
    MdCardModule
  ],
  declarations: [DisplayMainPageComponent, CityScreenComponent]
})
export class DisplayModule { }
