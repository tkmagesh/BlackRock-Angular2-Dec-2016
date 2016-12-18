import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {BugTracker} from './BugTracker.component'
import {BugComponent} from './BugTracker/Bug.component';
import {BugStats} from './BugTracker/BugStats.component';

import {TrimTextPipe} from './pipes/trimtext.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTracker, BugComponent, BugStats, TrimTextPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
