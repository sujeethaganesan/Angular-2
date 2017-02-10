import { Component } from '@angular/core';
@Component({
  selector: 'click-me',
  template: `<button (click)="onClickMe()">Click Me!</button>
  			{{clickmessage}}`
})
export class ClickMeComponent {
 clickmessage:string="";
 onClickMe()
 {
 this.clickmessage="You are my hero";
 }
  }