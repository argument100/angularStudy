import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <h2>test</h2>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent  { name = 'First Angular Application'; }
