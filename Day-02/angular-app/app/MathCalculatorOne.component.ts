import {Component} from '@angular/core'
import {MathCalculator} from './MathCalculator';

@Component({
    template : `
    <input type="number" [(ngModel)] = "calculator.number1">
    <input type="number" [(ngModel)] = "calculator.number2">
    <input type="button" value="Add" (click)="calculator.add()">
    <input type="button" value="Subtract" (click)="calculator.subtract()">
    <input type="button" value="Multiply" (click)="calculator.multiply()">
    <input type="button" value="Divide" (click)="calculator.divide()">
    <div>{{calculator.result}}</div>
    `,
    selector : 'math-calculator-one'
})
export class MathCalculatorOneComponent{
    calculator : MathCalculator = new MathCalculator();
}