import {Component} from '@angular/core'
import {MathCalculator} from './MathCalculator';

@Component({
   templateUrl : 'app/mathCalculatorTwo.template.html',
    selector : 'math-calculator-two'
})
export class MathCalculatorTwoComponent{
    calculator : MathCalculator = new MathCalculator();
    operation : string = '';
    calculate(){
        this.calculator[this.operation]();
        /*switch (this.operation){
            case  'add':
                this.calculator.add();
                break;
            case  'subtract':
                this.calculator.subtract();
                break;
            case  'multiply':
                this.calculator.multiply();
                break;
            case  'divide':
                this.calculator.divide();
                break;
        }*/
    }
}