import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {GreeterComponent} from './greeter.component';
import {SalaryCalculatorComponent} from './salaryCalculator.component';
import {MathCalculatorOneComponent} from './MathCalculatorOne.Component';
import {MathCalculatorTwoComponent} from './MathCalculatorTwo.Component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GreeterComponent,SalaryCalculatorComponent, MathCalculatorOneComponent, MathCalculatorTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
