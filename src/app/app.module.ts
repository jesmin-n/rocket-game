import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //NgModel

import { AppComponent }  from './app.component';
import {RocketDetailComponent} from './rocket-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent, RocketDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
