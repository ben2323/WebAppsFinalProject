import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_ROUTING} from './app.routing';
import { NavigationBarComponent } from './navigation/navigation.component';
import {MdToolbarModule} from '@angular/material';
import {ApiService} from './common/services/api.service';
import {HttpModule} from '@angular/http';
import {HttpService} from './common/services/http.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  imports: [
    HttpModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MdToolbarModule
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
