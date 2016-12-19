import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {BugTracker} from './BugTracker.component'
import {BugComponent} from './BugTracker/Bug.component';
import {BugStats} from './BugTracker/BugStats.component';
import {BugEdit} from './BugTracker/BugEdit.Component';
import {BugSort} from './BugTracker/BugSort.Component';

import {SortPipe} from './pipes/sort.pipe';

import {BugOperations} from './services/BugOperations';
import {BugStorage} from './services/BugStorage';
import {BugService} from './services/BugService';


@NgModule({
  imports:      [ BrowserModule, FormsModule, UtilsModule, HttpModule ],
  declarations: [ AppComponent, BugTracker, BugComponent, BugStats, SortPipe, BugEdit, BugSort],
  bootstrap:    [ AppComponent ],
  providers :   [ BugOperations, BugStorage, BugService ]
})
export class AppModule { }
