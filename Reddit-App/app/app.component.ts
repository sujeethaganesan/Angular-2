import { Component } from '@angular/core';
import { Article } from './article';
@Component({
  selector: 'reddit',
  template: `<form class="article">
  <h2> Add a Link </h2>
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title" placeholder="Title of the book" #newtitle>
    </div>
    <div class="form-group">
      <label for="link">Link:</label>
      <input type="text" class="form-control" id="link" placeholder="Enter the link" #newlink>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button (click)="addArticle(newtitle.value,newlink.value)" type="submit" class="sub-link btn btn-default pull-right">Submit link</button>
      </div>
    </div>
    </form>
    <div>
    <reddit-article *ngFor="let article of sortedArticles()" [article]="article"></reddit-article>
    </div>`
})
export class AppComponent 
{

articles: Article[];

 constructor() 
 {
 this.articles = [
 new Article('Angular 2', 'http://angular.io', 3),
 new Article('Fullstack', 'http://fullstack.io', 2),
 new Article('Angular Homepage', 'http://angular.io', 1),
 ];
 }

 addArticle(title:string,link:string):boolean
 {
 this.articles.push(new Article(title, link, 0));
 title="";
 link="";
 return false;
 }
 sortedArticles():Artilces[]
 {
 return this.articles.sort((a:Article, b:Article) =>b.votes-a.votes);
 }
 }
