import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsMainPageComponent } from './components/stats-main-page/stats-main-page.component';
import {statsRouting} from "./stats.routing";

@NgModule({
  imports: [
    statsRouting,
    CommonModule
  ],
  declarations: [StatsMainPageComponent]
})
export class StatsModule { }
