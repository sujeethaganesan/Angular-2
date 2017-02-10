import { Component } from '@angular/core';
import { Article } from './article';
@Component({
  selector: 'reddit-article',
  inputs: ['article'],
  host:{ 
  class:'details row' 
  },
  template: `<div class="col-md-3" style="background-color:#e6ffb3;">
  			 <div>
  			 <h1 class="vote">{{article.votes}}</h1>
  			 <p>Points</p>
  			 </div>
     
    		</div>
    		<div class="col-md-6" style="background-color:pink;">
    		<a class="titleName" href="{{article.link}}">
    		{{article.title}}
    		</a>
        <p class="sub">({{article.domain()}})</p>
    		<ul class="voter list-group">
  				<li class="list-group-item"><a (click)="voteUp()">
  				<i class="fa fa-arrow-up"></i>Like</a></li>
  				<li class="list-group-item"><a (click)="voteDown()">
  				<i class="fa fa-arrow-down"></i>Dislike</a></li>
			</ul>
    		</div>`
  })
export class RedditArticleComponent
{
article:Article;
voteUp():boolean
{
  this.article.voteUp();
  return false;

  }
voteDown():boolean
{
  this.article.voteDown();
  return false;
}

}