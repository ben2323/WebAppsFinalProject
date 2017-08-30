import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import {adminRouting} from './admin.routing';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { AdminPropertiesComponent } from './components/admin-properties/admin-properties.component';
import {
  MdInputModule, MdDatepickerModule, MdNativeDateModule, MdSidenavModule,
  MdButtonModule, MdAutocompleteModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminService} from "./admin.service";

@NgModule({
  imports: [
    adminRouting,
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    MdInputModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSidenavModule,
    MdButtonModule,
    MdAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [AdminService],
  declarations: [AdminMainPageComponent, AdminPropertiesComponent]
})
export class AdminModule { }
