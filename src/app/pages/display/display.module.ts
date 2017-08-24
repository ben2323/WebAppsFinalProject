import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMainPageComponent } from './components/display-main-page/display-main-page.component';
import {displayRouting} from './display.routing';

@NgModule({
  imports: [
    displayRouting,
    CommonModule
  ],
  declarations: [DisplayMainPageComponent]
})
export class DisplayModule { }
