import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <input type="text"  [(ngModel)]="name"/> `
})
export class AppComponent {  }
