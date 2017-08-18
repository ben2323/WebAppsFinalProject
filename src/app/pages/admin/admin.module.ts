import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import {adminRouting} from "./admin.routing";

@NgModule({
  imports: [
    adminRouting,
    CommonModule
  ],
  declarations: [AdminMainPageComponent]
})
export class AdminModule { }
