import { Component } from '@angular/core';
@Component({
  selector: 'key-up1',
  template: `<input (keyup)="onKey($event)">
  <p>{{values}}</p>`
})
export class KeyUp1Component {
values="";
onKey(event:any)
{
	this.values +=event.target.value+'|';
} 
 }

//////////////////////////////////////////////////////////////////////
@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUp2Component {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
  }


//////////////////////////////////////////////////////////////////////
 

 @Component({
 selector:'key-up3',
 template:`<input #box (keyup.enter)="onEnter(box.value)">
 <p>{{values}}</p>`
 })
 
 export class KeyUp3Component
 {
 values:string = "";
 onEnter(value:string)
 {
 this.values = value;
 console.log(value); 
 }
 }

//////////////////////////////////////////////////////////////////////
@Component({
  selector: 'key-up4',
  template: `
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUp4Component {
  value = '';
  update(value: string) 
  { 
  this.value = value;
  console.log(value); 
  }
}
