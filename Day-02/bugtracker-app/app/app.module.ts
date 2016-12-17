import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {BugTracker} from './BugTracker.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTracker],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
