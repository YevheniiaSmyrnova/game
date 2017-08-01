import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute}       from '@angular/router';
import {Subscription}          from 'rxjs/Subscription';
import { NewsService }         from './news.service';
import { News, Comment }       from './news';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html'
})
export class NewsDetailComponent implements OnInit {

  private news_id: number;
  private subscription: Subscription;
  private newsService: any;
  private news: News = new News();
  private comments: any;
  error: any;

  constructor(private activateRoute: ActivatedRoute, newsService: NewsService) {
    this.subscription = activateRoute.params.subscribe(params=>this.news_id=params['id']);
    this.newsService = newsService;
  };

  ngOnInit() {
    this.newsService.getNews(this.news_id)
                    .subscribe((data: Response) => this.news=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
    this.newsService.getNewsComment(this.news_id)
                    .subscribe((data: Response) => this.comments=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
  }

  addNewsLike(id: string, like: string) {
    var new_like = Number (like) + 1;
    this.newsService.patchNewsLike(id, new_like)
                    .subscribe((data: Response) => this.news=data.json(),
                               (error:Response) => {this.error = error; console.log(error);}
                    );
  }

  addCommentLike(id: string, like: string) {
    var new_like = Number (like) + 1;
    this.newsService.patchCommentLike(id, new_like)
                    .subscribe((data: Response) => {
                                  let newComment = data.json();
                                  for(let index in this.comments) {
                                    if (this.comments[index].id == id) {
                                      this.comments[index] = newComment;
                                    }
                                  }
                                },
                               (error:Response) => {this.error = error; console.log(error);}
                    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
