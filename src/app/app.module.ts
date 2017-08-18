import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_ROUTING} from "./app.routing";
import { NavigationBarComponent } from './navigation/navigation.component';
import {MdToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
