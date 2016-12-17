import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {GreeterComponent} from './greeter.component';
import {SalaryCalculatorComponent} from './salaryCalculator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreeterComponent,SalaryCalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
