import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    		<h2>my favourite hero name is {{myHero}}</h2>
    		<p>Heroes:</p>
    		<ul>
      			<li *ngFor="let hero of heroes">{{ hero }}</li>
    		</ul>
    		<p *ngIf="heroes.length > 3">There are many heroes!</p>
    		<h1>{{title}}</h1>
    		<h2>my favourite hero name is {{myHero1}}</h2>
    		<p>Heroes:</p>
    		<ul>
      			<li *ngFor="let hero1 of heroes1">{{ hero1.name }}</li>
    		</ul>
    		<p *ngIf="heroes1.length > 3">There are many heroes!</p>
             `
})
export class AppComponent {
	title:string;
	heroes:string[]=['Windstorm', 'Bombasto', 'Magneta']; //Array way of displaying
	heroes1 = [
  				new Hero(1, 'Windstorm'),
  				new Hero(13, 'Bombasto'),
  				new Hero(15, 'Magneta'),
  				new Hero(20, 'Tornado')
			]; //Object way of displaying
		constructor()
	{
		this.title="Tour of Heroes";
		this.myHero=this.heroes[1];
		this.myHero1=this.heroes[0];
	}


 }
