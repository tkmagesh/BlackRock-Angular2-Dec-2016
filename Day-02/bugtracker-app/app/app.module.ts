import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {BugTracker} from './BugTracker.component'
import {BugComponent} from './BugTracker/Bug.component';
import {BugStats} from './BugTracker/BugStats.component';

import {TrimTextPipe} from './pipes/trimtext.pipe';
import {SortPipe} from './pipes/sort.pipe';

import {BugOperations} from './BugOperations';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BugTracker, BugComponent, BugStats, TrimTextPipe, SortPipe],
  bootstrap:    [ AppComponent ],
  providers :   [ BugOperations ]
})
export class AppModule { }
