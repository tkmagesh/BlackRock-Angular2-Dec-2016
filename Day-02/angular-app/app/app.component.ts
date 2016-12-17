import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 App</h1>
            <div>
              <math-calculator-one></math-calculator-one>
              <hr/>
              <math-calculator-two></math-calculator-two>
            </div>
            `,
})
export class AppComponent  { 
  name = 'Blackrock!!'; 
}
