import { Component } from '@angular/core';
@Component({
	selector:'little',
	template:`<input #newHero (keyup.enter)="add(newHero.value)" (blur)="add(newHero.value); newHero.value=''">
	<button (click)="add(newHero.value)">Add</button>
	<ul><li *ngFor="let hero of heroes">{{hero}}</li>
	</ul>`
})

export class LittleHeroComponent
{
	heroes:string[]=['Sujeetha','ManjuPriya','Leethi','Kalish']
	add(value:string){
	if(value)
	{
	this.heroes.push(value);
	}
	}
}